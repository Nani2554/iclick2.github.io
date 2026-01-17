// --- DATA SIMULATION ---
const blogsData = [
    {
        category: "Tech Life",
        title: "Living in the Metaverse",
        excerpt: Living in the metaverse is like stepping into a world where the line between reality and imagination becomes fluid. It is a digital universe where people can interact, work, learn, and socialize using avatars—digital representations of themselves. In this virtual space, physical limitations vanish; you can attend a concert on the moon, visit a museum in Paris, or collaborate with colleagues across continents, all from your living room. The metaverse offers a new form of presence, where experiences are not constrained by geography, time, or traditional social rules.
Communication in the metaverse is immersive. Instead of texting or video calling, you might meet someone in a 3D virtual office, shake hands with their avatar, and read their gestures and expressions in real time. Education transforms too; students can explore historical events, conduct science experiments, or dive into microscopic worlds, making learning an interactive adventure rather than a passive activity. Similarly, the entertainment industry finds a new canvas—movies, games, concerts, and art exhibitions become interactive, participatory experiences rather than mere observation.
However, living in the metaverse comes with challenges. There is a risk of blurring the boundaries between digital and physical life. Spending too much time in virtual spaces can affect mental health, social relationships, and our sense of reality. Privacy and data security are also major concerns, as every interaction leaves digital footprints that can be tracked or misused. Moreover, the metaverse could deepen social inequalities if access is limited to those who can afford advanced technology and fast internet.
Yet, despite these challenges, the metaverse represents a unique opportunity to reshape human experience. It encourages creativity, collaboration, and experimentation on a scale never seen before. People can explore identities, ideas, and worlds that were previously impossible, opening doors to innovation in art, business, and education. Living in the metaverse is not about escaping reality; it’s about expanding it—creating new dimensions where imagination meets interaction, and where the only limits are those of your own creativity.",
        date: "Oct 12, 202X",
        author: "Alex V."
    },
    {
        category: "Coding",
        title: "The Future of Rust",
        excerpt: "Rust has emerged as one of the most promising programming languages of the modern era, and its future looks increasingly bright. Known for its focus on memory safety, performance, and concurrency, Rust addresses many of the problems that have long plagued developers in languages like C and C++. Its ability to prevent common bugs such as null pointer dereferences or data races without sacrificing speed has made it a favorite among system programmers, web developers, and even embedded systems engineers.
The future of Rust is tied to its growing adoption in both industry and open-source communities. Large technology companies like Microsoft, Google, and Amazon are exploring Rust for critical systems because it allows them to build software that is both fast and reliable. Its use in web development is also expanding, particularly with frameworks like Rocket and Actix, which demonstrate that Rust can handle web applications with performance comparable to lower-level languages while maintaining safety. Furthermore, Rust is gaining traction in the field of blockchain and decentralized applications, where security is paramount.
Another important factor shaping Rust’s future is its vibrant and inclusive community. The Rust Foundation and its contributors consistently invest in documentation, tooling, and educational resources, making it easier for newcomers to adopt the language. This community-driven approach ensures that Rust continues to evolve according to the needs of developers while maintaining its core principles of safety and performance.
Looking ahead, Rust is likely to play a major role in the development of next-generation technologies. Its emphasis on safety and concurrency aligns well with the increasing complexity of modern software, from IoT devices to cloud infrastructure. As more companies prioritize secure and efficient code, Rust’s adoption will continue to grow. Additionally, ongoing improvements to the compiler and ecosystem will make the language even more accessible and versatile, solidifying its position as a language for both performance-critical applications and large-scale systems programming.
In conclusion, the future of Rust is promising. With its combination of safety, speed, and community support, Rust is not just a language of today but a language of tomorrow—poised to redefine how developers write reliable, efficient, and secure software.",
        date: "Oct 10, 202X",
        author: "Sarah J."
    },
    {
        category: "Design",
        title: "Neomorphism vs Glassmorphism",
        excerpt: "In modern UI/UX design, both Neomorphism and Glassmorphism have gained popularity as ways to make interfaces feel fresh, tactile, and visually engaging. While they share a focus on depth and layering, their approaches and aesthetics are quite different.
Neomorphism (or “New Skeuomorphism”) combines elements of skeuomorphism and flat design. It creates soft, extruded shapes that appear to rise out of—or sink into—the background, giving a subtle 3D effect. This is achieved using gentle shadows and highlights, often on monochromatic or minimal backgrounds. Buttons, cards, and toggles in neomorphic designs look tactile, almost like soft plastic or clay, which makes interfaces feel modern yet approachable. The downside is that neomorphism can sometimes compromise accessibility, as low-contrast shadows and light effects may make elements hard to distinguish for some users.
Glassmorphism, on the other hand, is inspired by frosted glass or translucent materials. It uses semi-transparent backgrounds with a blur effect to create the illusion of layered glass panels floating over the interface. Glassmorphic elements often include subtle borders, shadows, and vibrant accent colors behind the frosted layer to enhance the sense of depth. This style gives a futuristic, high-tech look and is widely used in dashboards, apps, and websites to emphasize hierarchy and layering. Unlike neomorphism, glassmorphism relies less on extruded shapes and more on transparency, light, and contrast to create visual interest.
Key differences: Neomorphism emphasizes soft, raised or inset elements with shadows and highlights, creating a tactile, almost physical feel. Glassmorphism focuses on transparency, blur, and layering to create a sense of depth and sophistication. While neomorphism feels soft and subtle, glassmorphism feels light, airy, and futuristic.
In practice, both styles have their place. Neomorphism works well for minimal, app-based interfaces where subtle interactions matter. Glassmorphism is ideal for modern, visually rich designs where depth, layering, and contrast can guide users’ attention. Designers often combine elements from both, but understanding their principles helps maintain usability while keeping designs trendy and engaging.",
        date: "Oct 08, 202X",
        author: "Mike R."
    },
     {
        category: "AI",
        title: "Prompt Engineering 101",
        excerpt: "Prompt Engineering 101 is the foundational skill for anyone looking to interact effectively with AI language models, like ChatGPT. At its core, prompt engineering is about crafting clear, precise, and context-rich instructions so that an AI produces the output you want. It may seem simple, but subtle changes in wording, structure, or detail can drastically affect results.
The first principle of prompt engineering is clarity. A well-formed prompt should leave little room for ambiguity. For example, instead of saying, “Tell me about history,” you might ask, “Explain the causes and consequences of the French Revolution in 300 words for high school students.” This gives the AI a clear topic, scope, and audience.
The second principle is context and specificity. AI performs best when it has enough context to understand your intent. Providing details like tone, style, format, or perspective ensures the output matches your expectations. For instance, you could instruct the AI to “Write a friendly, humorous email introducing a new product to young adults,” which guides not only the content but also the tone.
The third principle is iteration and refinement. Rarely does a perfect result come from a single prompt. Prompt engineers often try multiple versions, tweak phrasing, or break complex tasks into smaller steps to achieve better results. This trial-and-error process helps reveal which prompt structures produce the most accurate or creative responses.
Advanced prompt engineering also involves techniques like role assignment (asking the AI to act as a teacher, lawyer, or designer), few-shot prompting (providing examples of desired output), and constraint setting (limiting word count, style, or format). These methods enhance control over the AI’s responses, making them more useful and aligned with your goals.
In today’s AI-driven world, prompt engineering is becoming as essential as coding or writing skills. It allows users to unlock the full potential of AI tools, from generating text and code to creating art and solving problems. By mastering clarity, context, and iteration, anyone can transform vague requests into precise, actionable results—making AI a reliable and creative partner.",
        date: "Oct 05, 202X",
        author: "Elena D."
    }
];

const newsData = [
    {
        category: "Global",
        title: "SpaceX Launches Mars Colony I",
        excerpt: "The first ship carrying infrastructure for the Mars base has successfully left orbit.",
        date: "Today",
        source: "Space Daily"
    },
    {
        category: "Finance",
        title: "Crypto Markets Hit New High",
        excerpt: "Bitcoin and Ethereum surge as new regulations provide stability for institutional investors.",
        date: "Yesterday",
        source: "FinTech Wire"
    },
    {
        category: "Environment",
        title: "Ocean Cleanup 90% Complete",
        excerpt: "The great pacific garbage patch has been significantly reduced thanks to autonomous drones.",
        date: "2 Days Ago",
        source: "Eco Watch"
    }
];

// --- DOM ELEMENTS ---
const contentArea = document.getElementById('content-area');
const btnBlogs = document.getElementById('btn-blogs');
const btnNews = document.getElementById('btn-news');

// --- RENDER FUNCTIONS ---

function renderCards(type) {
    // Clear current content
    contentArea.innerHTML = '';
    
    const data = type === 'blogs' ? blogsData : newsData;
    
    data.forEach(item => {
        const card = document.createElement('div');
        // Add specific class for styling (cyan for blog, pink for news)
        card.className = `card ${type === 'blogs' ? 'blog' : 'news'}`;
        
        // Determine bottom meta text (Author for blogs, Source for news)
        const metaText = type === 'blogs' ? item.author : item.source;

        card.innerHTML = `
            <span class="card-tag">${item.category}</span>
            <h2 class="card-title">${item.title}</h2>
            <p class="card-excerpt">${item.excerpt}</p>
            <div class="card-meta">
                <span>${item.date}</span>
                <span>${metaText}</span>
            </div>
        `;
        
        contentArea.appendChild(card);
    });
}

// --- EVENT HANDLERS ---

function showCategory(category) {
    // Update Buttons State
    if (category === 'blogs') {
        btnBlogs.classList.add('active');
        btnNews.classList.remove('active');
        renderCards('blogs');
    } else {
        btnNews.classList.add('active');
        btnBlogs.classList.remove('active');
        renderCards('news');
    }
}

// --- INITIAL LOAD ---
// Load blogs by default
renderCards('blogs');