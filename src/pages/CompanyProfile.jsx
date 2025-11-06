import React, { useState } from 'react'

const EVENT_TYPES = [
  { id: 'corporate', title: 'Corporate Events', description: 'Product launches, conferences, awards and corporate gatherings with on-brand staging and technical production.' },
  { id: 'house', title: 'House Party', description: 'Intimate home celebrations with tailored styling, lighting and decor to match your vibe.' },
  { id: 'birthday', title: 'Birthday Party', description: 'Creative themes, cake tables and entertainment planning for kids and adults.' },
  { id: 'baby', title: 'Baby Shower', description: 'Warm, memorable showers with tasteful styling, games and keepsakes.' },
  { id: 'balloon', title: 'Balloon Decorations', description: 'Bold and playful balloon installations, arches and table arrangements.' },
]

const Events = () => {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(openId === id ? null : id)

  return (
    <section className="page events">
      <div className="container">
        <h2>Events</h2>
        <p>
          We collaborate with clients to build concept-to-completion event
          experiences — logistics, styling and production.
        </p>

        <ul className="event-list">
          {EVENT_TYPES.map((ev) => (
            <li key={ev.id} className={`event-item ${openId === ev.id ? 'open' : ''}`}>
              <button className="event-title" onClick={() => toggle(ev.id)}>
                {ev.title}
              </button>
              {openId === ev.id && (
                <div className="event-description">
                  <p>{ev.description}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Events
