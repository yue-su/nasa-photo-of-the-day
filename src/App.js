import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import Header from "./components/header"
import Hero from "./components/hero"
import Cards from "./components/cards"
import Footer from "./components/footer"
import eonetRaw from "./components/eonet_raw"
import heroRaw from "./components/hero_raw"

/*

https://api.nasa.gov/planetary/apod?api_key=oi1YhAvBobZBTnfgfEDZ88bLNIBpBatXHQFnyYAY
https://epic.gsfc.nasa.gov/api/enhanced
https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png
https://api.nasa.gov/techport/api/projects/17792?api_key=DEMO_KEY
https://api.nasa.gov/techport/api/projects?updatedSince=2020-06-01&api_key=DEMO_KEY
https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=5&days=20&source=InciWeb&status=open

*/
const apiKEY = "zn8TnSNKWDu402MJ8ih7L7gGIPcfdTZjO9ZP356z"
const nasaURL = "https://api.nasa.gov/planetary/"
const eonetURL =
  "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=5&days=20&source=InciWeb&status=open"

function App() {
  const [hero, setHero] = useState("")
  const [card, setCard] = useState([])

  useEffect(() => {
    axios
      .get(`${nasaURL}apod?api_key=${apiKEY}`)
      .then((res) => {
        setHero(res.data)
      })
      .catch((err) => {
        setHero(heroRaw)
      })
  }, [])

  useEffect(() => {
    axios
      .get(eonetURL)
      .then((res) => {
        setCard(res.data.events)
      })
      .catch((err) => {
        setCard(eonetRaw.events)
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <Hero hero={hero} />
      <Cards card={card} />
      <Footer />
    </div>
  )
}

export default App
