import React from "react"
import "../App.css"

function Cards(props) {
  const { card } = props

  return (
    <div>
      {card.map((item) => {
        return (
          <div key={item.id}>
            <h3>Title: {item.title}</h3>
            <p>Date: {item.geometries[0].date}</p>
            <p>Categorie: {item.categories[0].title}</p>
            <a href={item.sources[0].url}>{item.sources[0].id}</a>
          </div>
        )
      })}
    </div>
  )
}

export default Cards
