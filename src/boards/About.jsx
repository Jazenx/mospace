import React from "react"
import styled from "styled-components"
import avatar from "../assets/avatar.png"
import react from '../assets/skills/react.svg'
import vue from '../assets/skills/vue.svg'
import webpack from '../assets/skills/webpack.svg'



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
const MyIntro = styled.span`
  margin-top: 1rem;
  font-size: 1rem;
  color: #a6a6b0;
`

const SkillContainer = styled.div``

const SkillBox = styled.img`
  margin: 0.3rem;
  height: 3rem;
  width: 3rem;
`



function About() {
  return (
    <Container>
      <MyAvatar src={avatar} />
      <MyIntro>生命不止，战斗不息的一个焦虑患者。</MyIntro>
      <h5>技能点</h5>
      <SkillContainer>
        <SkillBox src={react} />
        <SkillBox src={vue} />
        <SkillBox src={webpack} />
      </SkillContainer>
    </Container>
  )
}

export default About
