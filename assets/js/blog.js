/**
 * blog.js
 * Handles dynamic rendering of blog posts and pagination.
 */

const blogPosts = [
    {
        id: 1,
        title: "The Future of Spatial Design: Beyond the Screen",
        category: "Spatial Design",
        categoryClass: "bg-primary bg-opacity-10 text-primary",
        date: "Jan 22, 2026",
        image: "assets/img/spatial_design_blog_1769017045661.png",
        excerpt: "As we transition from mobile-first to spatial-first computing, the rules of UI/UX are being rewritten. Depth, lighting, and material are functional necessities.",
        link: "blog-details.html"
    },
    {
        id: 2,
        title: "Why We Ditched Figma for Pen & Paper",
        category: "Design Systems",
        categoryClass: "bg-success bg-opacity-10 text-success",
        date: "Jan 18, 2026",
        image: "assets/img/design_system_blog_1769017068664.png",
        excerpt: "Returning to analog sketching unlocked a level of creativity that pixels simply couldn't match during the ideation phase.",
        link: "blog-details.html"
    },
    {
        id: 3,
        title: "10 Principles of Inclusive Design",
        category: "Accessibility",
        categoryClass: "bg-info bg-opacity-10 text-info",
        date: "Jan 15, 2026",
        image: "assets/img/InclusiveDesign.avif",
        excerpt: "Designing for everyone isn't just about compliance; it's about empathy and innovation. Here are the core principles we follow.",
        link: "blog-details.html"
    },
    {
        id: 4,
        title: "Micro-Interactions: The Secret Sauce of Good UX",
        category: "UI Design",
        categoryClass: "bg-warning bg-opacity-10 text-warning",
        date: "Jan 10, 2026",
        image: "assets/img/MicroInteractions.png",
        excerpt: "Those small animations and feedbacks? They matter more than you think. Learn how to design meaningful micro-interactions.",
        link: "blog-details.html"
    },
    {
        id: 5,
        title: "Frontend Trends to Watch in 2026",
        category: "Frontend Dev",
        categoryClass: "bg-danger bg-opacity-10 text-danger",
        date: "Jan 05, 2026",
        image: "assets/img/Frontend.webp",
        excerpt: "From AI-assisted coding to new CSS features, here's what every frontend developer needs to know this year.",
        link: "blog-details.html"
    },
    {
        id: 6,
        title: "Building Trust Through Transparent Interfaces",
        category: "UX Research",
        categoryClass: "bg-secondary bg-opacity-10 text-secondary",
        date: "Dec 28, 2025",
        image: "assets/img/TrustUI.jpg",
        excerpt: "Dark patterns are out. Ethical design is in. How to create interfaces that respect user privacy and build long-term trust.",
        link: "blog-details.html"
    },
    {
        id: 7,
        title: "The Rise of Zero-UI: Voice and Gesture Controls",
        category: "Innovation",
        categoryClass: "bg-dark bg-opacity-10 text-dark",
        date: "Dec 20, 2025",
        image: "assets/img/ZEROUI.png",
        excerpt: "Screens aren't always the answer. Exploring the possibilities of voice assistants and gesture-based navigation.",
        link: "blog-details.html"
    },
    {
        id: 8,
        title: "Optimizing Web Performance for Next Billion Users",
        category: "Performance",
        categoryClass: "bg-info bg-opacity-10 text-info",
        date: "Dec 15, 2025",
        image: "assets/img/WebPerformance.png",
        excerpt: "Lightweight pages, offline capabilities, and fast load times are critical for emerging markets. Here's our optimization checklist.",
        link: "blog-details.html"
    },
    {
        id: 9,
        title: "Color Psychology in Modern Branding",
        category: "Branding",
        categoryClass: "bg-primary bg-opacity-10 text-primary",
        date: "Dec 10, 2025",
        image: "assets/img/ColorPsychology.png",
        excerpt: "How to correct colors can evoke emotions and influence decision-making. A deep dive into color theory for UI.",
        link: "blog-details.html"
    }
];

const POSTS_PER_PAGE = 3;
let currentPage = 1;

document.addEventListener('DOMContentLoaded', () => {
    renderPosts(currentPage);
    renderPagination();
});

function renderPosts(page) {
    const container = document.getElementById('blog-posts-container');
    container.innerHTML = '';

    // Calculate start and end index
    const start = (page - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    const paginatedPosts = blogPosts.slice(start, end);

    paginatedPosts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'card border-0 shadow-sm mb-4 overflow-hidden';
        article.innerHTML = `
            <div class="row g-0 align-items-stretch">
                <div class="col-md-5">
                    <img src="${post.image}" class="img-fluid h-100 w-100 object-fit-cover" 
                         style="min-height: 240px;" alt="${post.title}">
                </div>
                <div class="col-md-7">
                    <div class="card-body p-4 h-100 d-flex flex-column justify-content-center">
                        <div class="mb-2">
                            <span class="badge ${post.categoryClass}">${post.category}</span>
                            <small class="text-muted ms-2">${post.date}</small>
                        </div>
                        <h3 class="card-title fw-bold mb-3 fs-4"><a href="${post.link}" class="text-decoration-none text-body">${post.title}</a></h3>
                        <p class="card-text text-muted mb-3 flex-grow-1">${post.excerpt}</p>
                        <a href="${post.link}" class="fw-bold text-primary text-decoration-none">Read More <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(article);
    });

    // Scroll to top of posts
    if (page > 1) {
        document.getElementById('blog-posts-container').scrollIntoView({ behavior: 'smooth' });
    }
}

function renderPagination() {
    const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.innerHTML = '';

    const ul = document.createElement('ul');
    ul.className = 'pagination justify-content-center';

    // Previous Button
    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `<a class="page-link" href="#" aria-label="Previous">Previous</a>`;
    prevLi.onclick = (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            renderPosts(currentPage);
            renderPagination();
        }
    };
    ul.appendChild(prevLi);

    // Page Numbers
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        li.onclick = (e) => {
            e.preventDefault();
            currentPage = i;
            renderPosts(currentPage);
            renderPagination();
        };
        ul.appendChild(li);
    }

    // Next Button
    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
    nextLi.innerHTML = `<a class="page-link" href="#" aria-label="Next">Next</a>`;
    nextLi.onclick = (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            renderPosts(currentPage);
            renderPagination();
        }
    };
    ul.appendChild(nextLi);

    paginationContainer.appendChild(ul);
}
