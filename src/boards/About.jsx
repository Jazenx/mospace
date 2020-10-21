import React from "react"
import styled from "styled-components"
import avatar from '../assets/avatar.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem;
`

const MyAvatar = styled.img`
  height: 6rem;
  width: 6rem;
  border-radius: 6rem;
`

function About() {
  return (
    <Container>
      <MyAvatar src={avatar} />
      <p>Hello，我是 Jason，一个努力抗压的 Coder</p>
    </Container>
  )
}

export default About
