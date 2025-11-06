import React from 'react'

const Home = () => {
  return (
    <section className="page home">
      <div className="hero">
        <h1>creativeDecorators</h1>
        <p className="tagline">Designing memorable spaces for people and events.</p>
        <div className="hero-actions">
          <a href="/auth" className="btn primary">Get Started</a>
          <a href="/company" className="btn ghost">Our Work</a>
        </div>
      </div>
      <div className="features">
        <div className="feature">
          <h3>Event Design</h3>
          <p>Custom themes, moodboards and end-to-end event styling.</p>
        </div>
        <div className="feature">
          <h3>Corporate Services</h3>
          <p>On-brand experiences for product launches and conferences.</p>
        </div>
        <div className="feature">
          <h3>Private Celebrations</h3>
          <p>Intimate and large-scale celebrations crafted to your vision.</p>
        </div>
      </div>
    </section>
  )
}

export default Home
