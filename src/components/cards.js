import React from "react"
import "../App.css"
import styled from "styled-components"

const StyledCard = styled.div`
  max-width: 800px;
  color: #172c66;
  display: flex;
  flex-wrap: wrap;
  margin: 3rem auto;
  justify-content: space-between;

  div {
    width: 48%;
    border: 3px solid #001858;
    border-radius: 5px;
    margin: 5px;
    background-color: #f3d2c1;
    padding: 1rem;
  }
`

function Cards(props) {
  const { card } = props

  return (
    <StyledCard>
      {card.map((item) => {
        return (
          <div key={item.id}>
            <h3>Title: {item.title}</h3>
            <p>Date: {item.geometries[0].date}</p>
            <p>Categorie: {item.categories[0].title}</p>
            <a href={item.sources[0].url}>Link: {item.sources[0].id}</a>
          </div>
        )
      })}
    </StyledCard>
  )
}

export default Cards
