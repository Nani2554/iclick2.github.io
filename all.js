// --- DATA SIMULATION ---
const blogsData = [
    {
        category: "Tech Life",
        title: "Living in the Metaverse",
        excerpt: "An deep dive into how virtual reality is reshaping our social interactions and daily work routines.",
        date: "Oct 12, 202X",
        author: "Alex V."
    },
    {
        category: "Coding",
        title: "The Future of Rust",
        excerpt: "Why memory safety is becoming the number one priority for systems programming in the next decade.",
        date: "Oct 10, 202X",
        author: "Sarah J."
    },
    {
        category: "Design",
        title: "Neomorphism vs Glassmorphism",
        excerpt: "Comparing the two biggest UI trends of the century and predicting what comes next.",
        date: "Oct 08, 202X",
        author: "Mike R."
    },
     {
        category: "AI",
        title: "Prompt Engineering 101",
        excerpt: "Mastering the art of talking to machines. A guide for the modern developer.",
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
