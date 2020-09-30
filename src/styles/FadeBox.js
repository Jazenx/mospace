import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  from {
    opacity: 0;
    transform: translateX(-0.5rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const FadeBox = styled.div`
  animation: ${rotate} 0.5s linear;
`

export default FadeBox
