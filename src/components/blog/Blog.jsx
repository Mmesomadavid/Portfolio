import React from 'react';
import "./blog.css";


const Blog = () => {
    // Sample blog data (replace this with your actual data)
    const blogs = [
        {
            id: 1,
            title: 'Exploring React Hooks',
            content: 'This is the content of the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: 'July 15, 2023',
            label: 'Technology',
        },
        {
            id: 1,
            title: 'Exploring React Hooks',
            content: 'This is the content of the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: 'July 15, 2023',
            label: 'Technology',
        },
        {
            id: 1,
            title: 'Exploring React Hooks',
            content: 'This is the content of the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: 'July 15, 2023',
            label: 'Technology',
        },
        {
            id: 1,
            title: 'Exploring React Hooks',
            content: 'This is the content of the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: 'July 15, 2023',
            label: 'Technology',
        },
        {
            id: 1,
            title: 'Exploring React Hooks',
            content: 'This is the content of the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: 'July 15, 2023',
            label: 'Technology',
        },
        {
            id: 1,
            title: 'Exploring React Hooks',
            content: 'This is the content of the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: 'July 15, 2023',
            label: 'Technology',
        },
        // Add more blog objects as needed
    ];

    return (
        <section className='blog-section'>
            <h2 className='section-header'>My Latest Blogs</h2>
            <div className='blog-grid'>
                {blogs.map((blog) => (
                    <div className='blog-card' key={blog.id}>
                        <h2 className='blog-title'>{blog.title}</h2>
                        <p className='blog-content'>{blog.content}</p>
                        <div className='blog-info'>
                            <span className='blog-date'>{blog.date}</span>
                            <span className='blog-label'>{blog.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};



export default Blog;