import React from "react"
import "../App.css"

function Hero(props) {
  const { hero } = props

  const sectionStyle = {
    backgroundImage: `url(${hero.url})`,
  }

  return (
    <section style={sectionStyle} className="hero">
      <div>
        <h2>{hero.title}</h2>
        <blockquote>{hero.explanation}</blockquote>
        <p>{hero.date}</p>
      </div>
    </section>
  )
}

export default Hero
