// /js/blog-posts.js

const blogPosts = [
    {
        title: "Introduction to Data Science",
        thumbnail: "/img/blog-thumbnails/data-science.jpg",
        url: "/blog/introduction-to-data-science.html"
    },
    {
        title: "The Future of AI in Business",
        thumbnail: "/img/blog-thumbnails/ai-business.jpg",
        url: "/blog/future-of-ai-in-business.html"
    },
    {
        title: "Mastering Python for Data Analysis",
        thumbnail: "/img/blog-thumbnails/python-data-analysis.jpg",
        url: "/blog/mastering-python-for-data-analysis.html"
    }
];

function createBlogPostCard(post) {
    return `
        <article class="post-card">
            <img src="${post.thumbnail}" alt="${post.title}">
            <h3>${post.title}</h3>
            <a href="${post.url}" class="read-more">Read More</a>
        </article>
    `;
}

function loadBlogPosts() {
    const postGrid = document.getElementById('post-grid');
    if (postGrid) {
        postGrid.innerHTML = blogPosts.map(createBlogPostCard).join('');
    }
}

document.addEventListener('DOMContentLoaded', loadBlogPosts);