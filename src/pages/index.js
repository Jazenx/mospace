import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import MenuList from "../constants/MenuList"
import Board from "../boards/index"

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

const LayoutBox = styled.div`
  box-sizing: border-box;
  height: 90vh;
  width: 600px;
  background: #fff;
  overflow: scroll;
  box-shadow: 0 0 100px 25px rgba(0, 0, 0, 0.2);
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  @media (max-width: 800px) {
    width: 100vw;
    height: 100vh;
  }
`

const Footer = styled.footer`
  align-self: flex-start;
  margin-top: 4vh;
  font-family: monospace;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  @media (max-width: 800px) {
    position: absolute;
    right: 0;
  }
`

const menuRotate = keyframes`
  from {
    opacity: 0;
    transform: translateX(-0.5rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  text-align: right;
  margin-top: 5vh;
  animation: ${menuRotate} 0.5s linear;
`

const MenuItem = styled.span`
  position: relative;
  display: inline-block;
  left: 1rem;
  color: ${props => (props.light ? "red" : "#3c4043")};
  font-family: Covered By Your Grace;
  cursor: pointer;
  margin: 7px 0;
  font-size: 3rem;
  transition: color 0.1s linear;
`

const Home = () => {
  const [page, setPage] = useState("Posts")
  return (
    <BackgroundBox>
      <MenuBox>
        {Object.keys(MenuList).map(item => (
          <MenuItem
            key={item}
            onClick={() => {
              document.getElementById("board").scrollTop = 0
              return setPage(item)
            }}
            light={page === item}
          >
            {item}
          </MenuItem>
        ))}{" "}
      </MenuBox>
      <LayoutBox>
        <Board page={page} />
      </LayoutBox>
      <Footer>
        © {new Date().getFullYear()}
        {` `}Built with
        {` `}
        <a href="https://github.com/Jazenx">Jazenx</a>
      </Footer>
    </BackgroundBox>
  )
}

export default Home
