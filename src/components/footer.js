import React from "react"
import "../App.css"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const StyledFooter = styled.div`
  width: 800px;
  color: #172c66;
  font-size: 120%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 4rem;
  padding-bottom: 2rem;

  .footer__icon {
    font-size: 200%;
    margin-bottom: 1rem;
  }
`

function Footer(props) {
  return (
    <StyledFooter>
      <h3>Made by Yue</h3>
      <a
        href="https://github.com/yue-su/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="footer__icon" />
      </a>
    </StyledFooter>
  )
}

export default Footer
