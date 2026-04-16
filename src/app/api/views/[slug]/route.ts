import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

// Initialize Redis
const redis = Redis.fromEnv();

// POST - Record a view
export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    
    if (!slug) {
      return NextResponse.json({ error: 'Slug required' }, { status: 400 });
    }

    // Get IP address for unique counting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'anonymous';
    
    // Create a unique key for this IP and post (prevents multiple counts from same user)
    const viewedKey = `viewed:${slug}:${ip}`;
    
    // Check if this IP has viewed this post recently
    const viewed = await redis.get(viewedKey);
    
    if (!viewed) {
      // Increment total views for this post
      await redis.incr(`views:${slug}`);
      
      // Mark this IP as viewed (expires after 24 hours)
      await redis.set(viewedKey, 'true', { ex: 86400 });
    }
    
    // Get the updated view count
    const views = await redis.get(`views:${slug}`);
    
    return NextResponse.json({ views: views || 0 });
  } catch (error) {
    console.error('Error recording view:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET - Fetch view count without recording
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const views = await redis.get(`views:${slug}`);
    return NextResponse.json({ views: views || 0 });
  } catch (error) {
    console.error('Error fetching views:', error);
    return NextResponse.json({ views: 0 });
  }
}