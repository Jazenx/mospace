import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ItemWrapper = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0.8rem;
  &:hover {
    border-radius: 0.35rem;
    background: #f6f8fb;
  }
`

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
`

const DateSpan = styled.span`
  color: #787f87;
  font-size: 0.8rem;
  white-space: nowrap;
  font-weight: 400;
`

const Title = styled.h2`
  margin: 0;
  font-size: 1.15rem;
`

const RightBox = styled.div`
  display: flex;
  flex-direction: row;
`

const Tag = styled.span`
  display: block;
  box-sizing: border-box;
  font-weight: 500;
  background: #edf2ff;
  color: #3b5bdb;
  padding: 0.2rem 0.6rem;
  font-size: 0.8rem;
  border-radius: 16px;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

function PostItem({ slug, title, date, tag }) {
  return (
    <Link to={slug} itemProp="url">
      <ItemWrapper key={slug} itemScope itemType="http://schema.org/Article">
        <LeftBox>
          <DateSpan>{date}</DateSpan>
          <Title>{title}</Title>
        </LeftBox>
        <RightBox>
          <Tag>React</Tag>
        </RightBox>
      </ItemWrapper>
    </Link>
  )
}

export default PostItem
