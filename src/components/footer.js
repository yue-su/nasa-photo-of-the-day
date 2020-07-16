import React from "react"
import "../App.css"
import styled from "styled-components"

const StyledFooter = styled.div`
  width: 800px;
  color: #172c66;
  font-size: 120%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
`

function Footer(props) {
  return (
    <StyledFooter>
      <h3>Made by Yue</h3>
    </StyledFooter>
  )
}

export default Footer
