// Sections removed from the homepage during the blog-merge redesign.
// Stashed here so they can be rebuilt on the About page later.
// Plain data only (no icons); the About page can attach its own icon set.

export interface AboutSectionItem {
  title: string;
  body: string;
}

export interface AboutSection {
  eyebrow: string;
  heading: string;
  intro: string;
  items: AboutSectionItem[];
}

export const whatWeCoverSection: AboutSection = {
  eyebrow: "What we cover",
  heading: "Practical gaming content for real players",
  intro:
    "At I Know Tech World, we focus on honest gaming content for every type of player: hardcore gamers, casual players, and completionists alike.",
  items: [
    {
      title: "Game Reviews",
      body: "Honest, in-depth reviews of AAA blockbusters and hidden indie gems. No fluff, just what you need to know.",
    },
    {
      title: "Walkthroughs & Guides",
      body: "Step-by-step guides for boss fights, collectibles, achievements, and 100% completion runs.",
    },
    {
      title: "Gaming News & Tips",
      body: "Latest patches, meta changes, pro strategies, and insider tips to level up your play.",
    },
    {
      title: "Indie Spotlights",
      body: "Hidden gems and rising indie games that deserve your attention before they blow up.",
    },
    {
      title: "Game Strategies",
      body: "Meta builds, speedrun routes, competitive play guides, and advanced tactics.",
    },
    {
      title: "Upcoming Releases",
      body: "Previews, release calendars, and what to watch for each month across all platforms.",
    },
  ],
};

export const hardwareSection = {
  eyebrow: "Gear up",
  heading: "Gaming hardware guides",
  paragraphs: [
    "The right gear makes every game better. Our hardware guides help you pick the best components and peripherals for your playstyle and budget, from GPU benchmarks to console comparisons.",
    "From GPU benchmarks to console comparisons, we break down what actually matters for gaming performance.",
  ],
  chips: [
    "GPU Reviews",
    "Console Guides",
    "Peripherals",
    "Performance Tuning",
    "Monitors & Displays",
    "Value Picks",
  ],
  closing:
    "Whether you're upgrading your rig or buying your first console, our guides help you make smarter hardware decisions.",
};

export const featuredGuidesSection: AboutSection = {
  eyebrow: "Featured",
  heading: "Featured guides",
  intro:
    "Explore some of our most helpful gaming guides, from boss fights to 100% completion.",
  items: [
    {
      title: "Complete walkthroughs",
      body: "Step-by-step guides for 100% completion, all collectibles, and secret endings.",
    },
    {
      title: "Boss fight strategies",
      body: "Detailed tactics for every major boss: patterns, weaknesses, and optimal builds.",
    },
    {
      title: "Meta builds & loadouts",
      body: "Best weapons, armor, skills, and perk combinations for current patches.",
    },
    {
      title: "Speedrun routes & tips",
      body: "Optimized paths, glitches, and techniques for record-breaking runs.",
    },
    {
      title: "Hidden secrets & easter eggs",
      body: "Secret areas, lore discoveries, and developer references you missed.",
    },
    {
      title: "Achievement hunting guides",
      body: "Roadmaps for platinum trophies and 1000/1000 achievements.",
    },
  ],
};

export const trustSection = {
  eyebrow: "Why trust us",
  heading: "Honest gaming content, not paid hype",
  intro: "Every article is written by gamers who actually play the games.",
  items: [
    {
      title: "No sponsored reviews",
      body: "We don't take money for reviews. Every opinion is honest and unfiltered.",
    },
    {
      title: "Player-first content",
      body: "Written by gamers, for gamers. We actually play what we cover.",
    },
    {
      title: "No pay-to-win guides",
      body: "We don't gatekeep content behind paywalls. Everything is free.",
    },
    {
      title: "Always updated",
      body: "Games evolve. We update guides and reviews to match current patches and meta.",
    },
    {
      title: "Honest pros & cons",
      body: "Every review includes what we loved AND what frustrated us.",
    },
    {
      title: "No paid hype",
      body: "Research and player experience come before marketing talking points.",
    },
  ] as AboutSectionItem[],
  highlight: "We understand the grind because we've been there too",
  closing:
    "Our content prioritizes honest opinions, deep research, and player experience over marketing hype.",
};

export const newsletterSection = {
  eyebrow: "Newsletter",
  heading: "Get game reviews & tips weekly",
  intro:
    "Honest reviews, walkthroughs, gaming news, and pro tips, delivered to your inbox.",
  cta: "Join free",
  note: "Join thousands of gamers",
  url: "https://news.iknowtechworld.online",
};
