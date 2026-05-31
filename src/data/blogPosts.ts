export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  image: string
  excerpt: string
  content: (string | { type: "image"; src: string; alt: string })[]
  embed?: { type: "iframe"; src: string; height: string; width: string }
  tag?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "welsh-business-show-2025",
    title: "A Defining Day at The Welsh Business Show – 20 May 2025",
    author: "Harsh Sanmukh",
    date: "May 21, 2025",
    image: "/images/welsh-business-show-logo.png",
    tag: "Events",
    excerpt: "Held in Cardiff, this event proved why it's Wales' largest business show. I walked in seeking clarity, and walked out empowered with sharper direction and invaluable insights from true experts.",
    content: [
      "Held in Cardiff, this event proved why it's Wales' largest business show. I walked in seeking clarity, and walked out empowered with sharper direction and invaluable insights from true experts.",
      "🔹 Department for Business and Trade: A special thanks to Jason Carter, Deputy Head Export Expert your practical advice on navigating import/export was a game-changer.",
      { type: "image", src: "/images/harsh-with-jason-carter.png", alt: "Harsh Sanmukh with Jason Carter" },
      "🔹 Caffeine Creative Limited: Jeff Patreane, your stall stopped me in my tracks. Your storytelling-first marketing approach was magnetic.",
      { type: "image", src: "/images/harsh-with-jeff-patreane.png", alt: "Harsh Sanmukh with Jeff Patreane" },
      "🔹 Welsh Business Club in Wales (Business Stories): Sharing my journey as the founder of HNM Groups why we're rethinking ingredients in the food industry was a proud moment.",
      { type: "image", src: "/images/business-in-wales-stall.png", alt: "Business in Wales stall" },
      "🔹 Federation of Small Businesses (FSB): It was great to finally join the FSB. This community has been on my radar for a while, and the supportive energy at the stall sealed the deal.",
      { type: "image", src: "/images/harsh-at-fsb-stall.png", alt: "Harsh Sanmukh at the FSB stall" },
      { type: "image", src: "/images/harsh-with-rob-basini.png", alt: "Harsh Sanmukh with Rob Basini" },
      "🔹 Gallagher: Wayne Carter, thank you for patiently walking me through essential insurance types for food startups.",
      "Attending this show reminded me: Knowledge is everywhere but guidance is rare. When experience meets openness, growth follows.",
      "💡 \"What if your breakfast carried a story, a soul, and a purpose? HNM is bringing something soon and it's more than just food.\"",
      { type: "image", src: "/images/harsh-selfie-elevator.png", alt: "Harsh Sanmukh at the Welsh Business Show" },
    ],
  },
  {
    slug: "commitment-to-quality",
    title: "Our Commitment to Quality",
    author: "Harsh Sanmukh",
    date: "October 5, 2025",
    image: "/images/our-commitment.jpg",
    tag: "LinkedIn",
    excerpt: "At HNM Food Groups, quality isn't just a buzzword; it's the foundation of everything we do.",
    content: ["At HNM Food Groups, quality isn't just a buzzword; it's the foundation of everything we do. We believe that good food starts with the best ingredients and a process you can trust."]
  },
  {
    slug: "behind-the-scenes",
    title: "Behind the Scenes at HNM",
    author: "Harsh Sanmukh",
    date: "October 4, 2025",
    image: "/images/behind-the-scenes.jpg",
    tag: "LinkedIn",
    excerpt: "A peek behind the curtain at HNM Food Groups the passion and process behind our products.",
    content: ["The magic of our food lies in the details. From sourcing the freshest ingredients to perfecting our recipes, every step is a labour of love."]
  },
  {
    slug: "sharing-our-vision",
    title: "Sharing Our Vision for Healthy Food",
    author: "Harsh Sanmukh",
    date: "October 3, 2025",
    image: "/images/sharing-our-vision.png",
    tag: "LinkedIn",
    excerpt: "Our founder recently shared his thoughts on the future of food and our mission at HNM Food Groups.",
    content: ["Our mission is driven by a simple, powerful vision: to make pure, healthy, and organic food accessible to every family."]
  },
  {
    slug: "hnm-on-linkedin",
    title: "We're on LinkedIn! Follow Our Journey",
    author: "Harsh Sanmukh",
    date: "October 1, 2025",
    image: "/images/linkedin-logo-square.png",
    tag: "LinkedIn",
    excerpt: "HNM Food Groups is now active on LinkedIn. Follow our page for the latest updates and insights.",
    content: ["We are thrilled to announce that HNM Food Groups is now active on LinkedIn! Follow our page to stay up-to-date with company news, new product launches, and behind-the-scenes looks at what we do."]
  },
  {
    slug: "the-millet-movement",
    title: "The Millet Movement: Rediscovering Ancient Grains for Modern Health",
    author: "Harsh Sanmukh",
    date: "September 22, 2025",
    image: "/images/hnm-cereal-bowl.jpg",
    tag: "Nutrition",
    excerpt: "Millets are not just a food trend; they are a return to our roots and a powerhouse of nutrition.",
    content: [
      "Millets are not just a food trend; they are a return to our roots. These ancient grains, once a staple in Indian agriculture, are making a powerful comeback. They are a powerhouse of nutrition, packed with protein, fibre, vitamins, and minerals.",
      "At HNM Food Groups, we are proud to be at the forefront of this millet movement. Our journey began with a simple question: Why have we moved away from foods that are so inherently good for us?",
      "We source our millets from certified organic farms, ensuring they are free from harmful pesticides and chemicals. Our process is simple and transparent, with no artificial preservatives, colours, or flavours.",
      "Choosing millets is a choice for better health and a sustainable future. They are climate-resilient crops that require less water, making them a friend to our planet.",
    ],
  },
  {
    slug: "why-organic-matters",
    title: "Why 'Organic' Matters: Our Commitment to Purity",
    author: "Harsh Sanmukh",
    date: "September 15, 2025",
    image: "/images/organic-produce-collage.png",
    tag: "Our Values",
    excerpt: "The word 'organic' is more than just a label; it's a promise a commitment to food grown without synthetic pesticides, GMOs, or harmful chemicals.",
    content: [
      "The word 'organic' is more than just a label; it's a promise. It's a commitment to food that is grown and processed without synthetic pesticides, GMOs, or harmful chemicals.",
      "For us at HNM Food Groups, 'organic' is non-negotiable. Every ingredient is sourced from farms that practice sustainable agriculture, promoting biodiversity and ecological balance.",
      "We believe that what we leave out of our food is just as important as what we put in. No artificial preservatives, no synthetic colours, no fake flavours.",
      "Our vision is to create food so pure that even a newborn baby can have it. This is the standard we hold ourselves to every single day.",
    ],
  },
  {
    slug: "from-our-family-to-yours",
    title: "From Our Family to Yours: The Heart of HNM Food Groups",
    author: "Harsh Sanmukh",
    date: "September 5, 2025",
    image: "/images/harsh-sanmukh-new.jpeg",
    tag: "Our Story",
    excerpt: "HNM Food Groups was born not in a boardroom, but from a place of deep personal conviction a desire to provide families with food that is pure, wholesome, and honest.",
    content: [
      "HNM Food Groups was born not in a boardroom, but from a place of deep personal conviction. It started with my concern for the health of my own family and a desire to provide them with food that was pure, wholesome, and free from artificial additives.",
      "This is why the question, 'Would I give this to my own family?' is so much more than a slogan for us. It is the guiding principle that shapes our entire company.",
      "My philosophy is simple: 'Eat good food to stay healthy, or else you will end up eating medicine like food to stay healthy.' Thank you for trusting us, for welcoming us into your homes, and for being a part of the HNM Food Groups family.",
    ],
  },
]
