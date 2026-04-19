import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
    const images = [
        "https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/a72ec7ae-e5ac-4d1b-ab78-44670d36e854/a2233388-b592-4bd2-a13f-f48efe2246da.png/public",
        "https://i.pinimg.com/736x/4a/a8/fb/4aa8fbbde451348c87c32d54b26f9215.jpg",
        "https://i.pinimg.com/1200x/65/00/85/650085494b582131eccd84a51383df4f.jpg",
        "https://i.pinimg.com/736x/81/c2/d5/81c2d5db59757d2ab8f1730dc26a0165.jpg",
        "https://i.pinimg.com/1200x/cb/e3/d8/cbe3d895c41fd3023fbba1fb0579aae4.jpg",
        "https://i.pinimg.com/736x/d8/e0/c3/d8e0c38048ad9f02dc71f13363bbcfb5.jpg",
        "https://i.pinimg.com/736x/29/36/8d/29368d35c883756395d676e4d79e62ea.jpg",
    ];

    // Dummy trending titles with corresponding blog post slugs (replace with your actual slugs)
    const trendingTitles = [
        { title: "Decorative Pillows: 2026's Hottest Home Decor Trend (+ DIY Ideas)", slug: "decorative-pillows-trend-2026-diy" },
        { title: "10 Tips for Better Productivity", slug: "productivity-tips-2024" },
        { title: "Understanding AI in 2024", slug: "understanding-ai-2024" },
        { title: "Creative Writing Techniques", slug: "creative-writing-techniques" },
        { title: "Digital Marketing Trends", slug: "digital-marketing-trends" },
        { title: "The Art of Minimalism", slug: "art-of-minimalism" },
        { title: "Sustainable Living Guide", slug: "sustainable-living-guide" },
    ];

    // More varied random values for scattered effect
    const getRandomStyle = (index: number) => {
        const rotations = [-12, -6, 3, 8, -4, 10, -9, 5, -2, 7, -7, 4];
        const yOffsets = [-15, 8, -10, 12, -5, 15, -8, 6, -3, 10, -12, 5];
        const xOffsets = [-8, 5, -3, 10, -6, 4, -10, 7, -2, 8, -5, 3];
        
        return {
            rotate: rotations[index % rotations.length],
            translateY: yOffsets[index % yOffsets.length],
            translateX: xOffsets[index % xOffsets.length],
        };
    };

    return (
        <div className="min-h-screen transition-colors duration-300">
            <div className="text-center px-4 max-w-6xl mx-auto">
                <span className="font-script text-2xl sm:text-3xl md:text-5xl block text-black dark:text-white">
                    Welcome to <span>{process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME}</span>
                </span>
                <h1 className="text-3xl md:text-7xl font-bold mt-4 text-black dark:text-white">
                    Stories, Ideas & Curiosity in One Place
                </h1>
            </div>

            {/* Scattered photo wall */}
            <div className="flex justify-center items-center py-[2rem] w-full min-h-[500px]">
                <div className="relative flex flex-wrap justify-center items-center gap-2 md:gap-4 px-8">
                    {images.map((image, index) => {
                        const style = getRandomStyle(index);
                        // Fixed z-index: higher numbers on newer images, predictable layering
                        const baseZIndex = 10 + (index * 2);
                        const postData = trendingTitles[index % trendingTitles.length];
                        
                        return (
                            <Link
                                key={index}
                                href={`/blog/${postData.slug}`}
                                className="relative transition-all duration-300 hover:scale-110 group cursor-pointer"
                                style={{
                                    transform: `rotate(${style.rotate}deg) translateX(${style.translateX}px) translateY(${style.translateY}px)`,
                                    zIndex: baseZIndex,
                                    margin: index !== 0 ? '-12px' : '0',
                                    display: 'block',
                                }}
                            >
                                <div className="relative 
                                    w-28 h-28           // Mobile
                                    sm:w-32 sm:h-32      // Small
                                    md:w-40 md:h-40      // Tablet
                                    lg:w-52 lg:h-52      // Desktop
                                    xl:w-[15rem] xl:h-[15rem]      // Large
                                ">
                                    <Image
                                        src={image}
                                        alt={`Photo ${index + 1}`}
                                        fill
                                        className="object-cover rounded-xl border-4 border-white shadow-lg transition-all duration-300 hover:-translate-y-4"
                                        style={{
                                            boxShadow: '0 20px 30px -12px rgba(0, 0, 0, 0.25)',
                                            border: '2px solid white',
                                        }}
                                    />
                                </div>

                                {/* Messaging app style tooltip - Fixed positioning and z-index */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999] pointer-events-none">
                                    {/* Triangle pointer */}
                                    <div className="absolute top-full left-1/4 -translate-x-1/2 -mt-[7px]">
                                        <div className="w-3 h-3 bg-black dark:bg-white rotate-45 origin-center"></div>
                                    </div>

                                    {/* Message bubble - Dark mode support */}
                                    <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full whitespace-nowrap shadow-lg border border-gray-200 dark:border-gray-800">
                                        <p className="text-sm font-medium">
                                            {postData.title}
                                        </p>
                                    </div>
                                </div>

                                {/* Subtle shadow overlay for depth */}
                                <div className="absolute inset-0 rounded-xl pointer-events-none"
                                    style={{
                                        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
                                    }}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home