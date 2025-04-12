import React, { useState } from 'react';

const BlogCard = () => {
  const blogs = [
    {
      title: "Understanding GST for Small Businesses",
      excerpt: "A beginner's guide to navigating GST in Australia...",
      image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202412/6761434cee77e-the-upcoming-meeting-of-the-gst-council--led-by-finance-minister-nirmala-sitharaman-and-including-st-172423355-16x9.jpg?size=1280:720",
      date: "March 5, 2025"
    },
    {
      title: "10 Tax Tips Before EOFY",
      excerpt: "End of financial year approaching? Here's how to prep...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8229XXC-5wzG8fj3J2PKdCXASEJ6KiYq2g&s",
      date: "March 10, 2025"
    },
    {
      title: "Freelancer Tax Checklist",
      excerpt: "Make sure you don’t miss any key deductions...",
      image: "https://images.indianexpress.com/2024/06/Heres-a-list.jpg",
      date: "March 12, 2025"
    },
    {
      title: "Investment Property & Tax",
      excerpt: "Understanding capital gains and deductions on property...",
      image: "https://www.tickertape.in/blog/wp-content/uploads/2023/01/26-jan-23-Where-To-Invest-Money-In-India-27.png",
      date: "March 14, 2025"
    },
    {
      title: "How to Claim Work from Home Expenses",
      excerpt: "Track your hours and know what to deduct...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1IPtCt5bxAk2sWG5uxOwv1eO1zg9t19HvQ&s",
      date: "March 16, 2025"
    },
    {
      title: "Student Tax Returns Simplified",
      excerpt: "If you’re studying in Australia, here's what to know...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPRIpMGRduFpcx8M6SB4jID-KRFen5vmwXeg&s",
      date: "March 18, 2025"
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Latest Blog Posts</h2>
      
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentPosts.map((blog, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{blog.date}</p>
              <p className="text-gray-700 text-sm">{blog.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-full border text-sm ${
              currentPage === i + 1
                ? 'bg-Primary text-white'
                : 'bg-white text-black border-gray-300 hover:bg-gray-200'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
