import React from "react"
import styled from "styled-components"

const BackgroundBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(90deg, #f1f1f1 11px, transparent 1%) 50%,
    linear-gradient(#f1f1f1 11px, transparent 1%) 50%, #e9e9e9;
  background-size: 15px 15px;
`

const Background = () => {
  return <BackgroundBox></BackgroundBox>
}

export default Background
