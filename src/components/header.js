import React from "react"
import "../App.css"
import styled from "styled-components"

const StyledHeader = styled.div`
  color: #001858;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    text-transform: uppercase;
  }
`

function Header(props) {
  return (
    <StyledHeader>
      <h1>What is happening in the univers?</h1>
    </StyledHeader>
  )
}

export default Header
