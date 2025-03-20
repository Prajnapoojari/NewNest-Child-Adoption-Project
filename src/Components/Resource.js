import React from "react";

const Resource = () => {
  const blogPosts = [
    {
      date: "June 20, 2024",
      title: "Where to Give Now",
      description:
        "If you're looking to support or get involved in the child adoption process, there are several ways to help depending on your region.",
      image: require("../Images/Blog1.jpg"), // ✅ Corrected import
    },
    {
      date: "June 22, 2024",
      title: "Popular Charities",
      description:
        "There are several popular charities that support the child adoption process and work to make it easier for children to find loving families.",
      image: require("../Images/Blog2.jpg"),
    },
    {
      date: "June 24, 2024",
      title: "Childcare Crisis",
      description:
        "The child adoption process is closely tied to the ongoing childcare crisis, where many children face instability due to issues like poverty.",
      image: require("../Images/Blog3.jpg"),
    },
  ];

  return (
    <div>
      {/* Blog Section */}
      <section className="resource-section">
        <h2 className="section-title">Latest News and Blog</h2>
        <div className="blog-container">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <p className="blog-date">📅 {post.date}</p>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-description">{post.description}</p>
                <a href="https://cara.wcd.gov.in/" className="read-more">
                  READ MORE →
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="more-news-btn">
        <a href="/News">MORE NEWS</a></button>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-content">
          <blockquote>
            <span className="quote-mark">“</span>
            <p className="testimonial-text">
              Together, we can change lives for the better
            </p>
          </blockquote>
          <p className="testimonial-description">
            Absolutely! The child adoption process is a powerful way to
            transform lives, providing children with loving homes and giving
            families the opportunity to nurture and care for a new life.
          </p>
          <p className="testimonial-author">
            <strong>Shaik Ibrahim</strong> <br />
          </p>
        </div>
        <div className="testimonial-video">
          <img src={require("../Images/Testimonial.jpg")} alt="Testimonial" />
          <button className="play-button">▶</button>
        </div>
      </section>
    </div>
  );
};

export default Resource;
