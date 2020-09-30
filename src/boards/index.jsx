import React, { useState } from "react"
import styled from "styled-components"

import MenuList from '../constants/MenuList'
import Posts from './Posts'
import About from './About'


const BoardBox = styled.div`
  padding: 1rem;
`

function Board({ page }) {
  console.log(page)
  return (
    <BoardBox id="board">
      {page === MenuList.Posts && <Posts />}
      {page === MenuList.About && <About />}
    </BoardBox>
  )
}

export default Board
