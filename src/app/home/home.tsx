import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoFlameOutline, IoMedalOutline, IoStatsChart, IoThumbsUpOutline, IoWifiOutline } from 'react-icons/io5';
import { IoGameControllerOutline } from 'react-icons/io5';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { IoHardwareChipOutline } from 'react-icons/io5';
import { IoBulbOutline } from 'react-icons/io5';
import { IoTrendingUpOutline } from 'react-icons/io5';
import { IoRocketOutline } from 'react-icons/io5';
import { IoHappyOutline } from 'react-icons/io5';

const Home = () => {
    const images = [
        "https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/a72ec7ae-e5ac-4d1b-ab78-44670d36e854/a2233388-b592-4bd2-a13f-f48efe2246da.png/public",
        "https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/a72ec7ae-e5ac-4d1b-ab78-44670d36e854/bb12ec3b-4417-4df7-85e1-65aafa92d104.png/public",
        "https://images.unsplash.com/photo-1776877580669-752fa1048fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1776876384831-8da872957396?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D",
        "https://i.pinimg.com/1200x/cb/e3/d8/cbe3d895c41fd3023fbba1fb0579aae4.jpg",
        "https://i.pinimg.com/736x/d8/e0/c3/d8e0c38048ad9f02dc71f13363bbcfb5.jpg",
        "https://i.pinimg.com/736x/29/36/8d/29368d35c883756395d676e4d79e62ea.jpg",
    ];

    const trendingTitles = [
        { title: "Decorative Pillows: 2026's Hottest Home Decor Trend (+ DIY Ideas)", slug: "decorative-pillows-trend-2026-diy" },
        { title: "Best GTA 6 Setup Under ₹24.8K", slug: "best-gta-6-setup-under-24800" },
        { title: "GTA 6 Smart Creator Setup Under ₹45K", slug: "gta-6-smart-creator-setup-under-45000" },
        { title: "GTA 6 Best Value Setup Under ₹60k - Future Proofing", slug: "gta-6-best-value-setup-under-60000" },
        { title: "Digital Marketing Trends", slug: "digital-marketing-trends" },
        { title: "The Art of Minimalism", slug: "art-of-minimalism" },
        { title: "Sustainable Living Guide", slug: "sustainable-living-guide" },
    ];

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
            {/* Hero Section */}
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
                                    w-28 h-28
                                    sm:w-32 sm:h-32
                                    md:w-40 md:h-40
                                    lg:w-52 lg:h-52
                                    xl:w-[15rem] xl:h-[15rem]
                                ">
                                    <Image
                                        src={image}
                                        alt={`Photo ${index + 1}`}
                                        fill
                                        sizes="(max-width: 640px) 7rem, (max-width: 768px) 8rem, (max-width: 1024px) 10rem, (max-width: 1280px) 13rem, 15rem"
                                        className="object-cover rounded-xl border-4 border-white shadow-lg transition-all duration-300 hover:-translate-y-4"
                                        style={{
                                            boxShadow: '0 20px 30px -12px rgba(0, 0, 0, 0.25)',
                                            border: '2px solid white',
                                        }}
                                    />
                                </div>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999] pointer-events-none">
                                    <div className="absolute top-full left-1/4 -translate-x-1/2 -mt-[7px]">
                                        <div className="w-3 h-3 bg-black dark:bg-white rotate-45 origin-center"></div>
                                    </div>
                                    <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full whitespace-nowrap shadow-lg border border-gray-200 dark:border-gray-800">
                                        <p className="text-sm font-medium">
                                            {postData.title}
                                        </p>
                                    </div>
                                </div>
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

            {/* Welcome Section */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                        Welcome to I Know Tech World
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        At I Know Tech World, we simplify technology for everyday users, students, gamers, and creators.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                        Whether you're building a budget gaming PC, choosing the right gadget, exploring AI tools, or staying updated with digital trends we create content that saves time, money, and confusion.
                    </p>
                </div>

                {/* What You'll Find Here */}
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-black dark:text-white mb-8">
                        What You'll Find Here
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5">
                            <div className="text-2xl mb-3 flex gap-2">
                                <IoFlameOutline size={40} color="#a855f7" />
                            </div>
                            <h3 className="text-lg font-bold text-black dark:text-white mb-1">Honest Buying Guides</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Best value gadgets, smart purchases, budget recommendations.</p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5">
                            <div className="text-2xl mb-3">
                                <IoGameControllerOutline size={40} color="#a855f7" />
                            </div>
                            <h3 className="text-lg font-bold text-black dark:text-white mb-1">Gaming & PC Builds</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Affordable gaming setups, GTA 6-ready PCs, performance guides.</p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5">
                            <div className="text-2xl mb-3">
                                <IoChatbubblesOutline size={40} color="#a855f7" />
                            </div>
                            <h3 className="text-lg font-bold text-black dark:text-white mb-1">AI & Productivity Tools</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Useful tools that help creators, students, and businesses grow faster.</p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5">
                            <div className="text-2xl mb-3">
                                <IoHardwareChipOutline size={40} color="#a855f7" />
                            </div>
                            <h3 className="text-lg font-bold text-black dark:text-white mb-1">Tech News & Trends</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Latest updates in consumer tech, apps, gadgets, and internet culture.</p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5">
                            <div className="text-2xl mb-3">
                                <IoBulbOutline size={40} color="#a855f7" />
                            </div>
                            <h3 className="text-lg font-bold text-black dark:text-white mb-1">Beginner Friendly Explanations</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">No jargon. No confusion. Just clear useful advice.</p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5">
                            <div className="text-2xl mb-3">
                                <IoHappyOutline size={40} color="#a855f7" />
                            </div>
                            <h3 className="text-lg font-bold text-black dark:text-white mb-1">Budget-Friendly Focus</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Quality recommendations that don't break the bank.</p>
                        </div>
                    </div>
                </div>

                {/* Why Readers Choose Us */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-black dark:text-white mb-6">
                        Why Readers Choose Us
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                        <div className="p-3">
                            <div className="text-green-500 text-xl mb-1">✓</div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Straightforward advice</p>
                        </div>
                        <div className="p-3">
                            <div className="text-green-500 text-xl mb-1">✓</div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Budget-friendly recommendations</p>
                        </div>
                        <div className="p-3">
                            <div className="text-green-500 text-xl mb-1">✓</div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Real-world useful content</p>
                        </div>
                        <div className="p-3">
                            <div className="text-green-500 text-xl mb-1">✓</div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Easy to understand guides</p>
                        </div>
                        <div className="p-3">
                            <div className="text-green-500 text-xl mb-1">✓</div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Regularly updated articles</p>
                        </div>
                    </div>
                </div>

                {/* Stay Ahead Section */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
                        Stay Ahead in Tech
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Technology moves fast. We help you stay informed with fresh content, new guides, smarter recommendations, and trends worth knowing.
                    </p>
                </div>

                {/* CTA Footer Section */}
                <div className="text-center bg-black dark:bg-white rounded-2xl p-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white dark:text-black mb-4">
                        Ready to Explore?
                    </h2>
                    <p className="text-gray-300 dark:text-gray-600 mb-6">
                        Browse our latest articles and discover smarter ways to buy, build, and use technology.
                    </p>
                    <Link
                        href="/blogpage"
                        className="inline-block px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition font-medium"
                    >
                        Read Latest Posts →
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home