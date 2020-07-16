import React from "react"
import "../App.css"
import styled from "styled-components"

const StyledHero = styled.section`
  background-image: url(${(pr) => pr.bk});
  min-height: 1000px;
  color: #fef6e4;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f3d2c1;

  div {
    blockquote {
      text-align: justify;
    }

    p {
      font-size: 120%;
    }
  }
`

function Hero(props) {
  const { hero } = props

  return (
    <StyledHero bk={hero.url}>
      <div>
        <h2>{hero.title}</h2>
        <blockquote>{hero.explanation}</blockquote>
        <p>{hero.date}</p>
      </div>
    </StyledHero>
  )
}

export default Hero
