import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.26);
    border: 3px solid var(--orangeCard);
    box-shadow: var(--boxShadow);
    border-radius: 20px;
    padding: 15px;
    transition: transform .2s;

    &:hover{
      transform: scale(1.2);
    }

    & img{
        width: 75px;
        height: 75px;
    }
`

function SkillCard({url,text}) {
  return (
    <StyledDiv>
        <img src={url} alt="" />
        <span>{text}</span>
    </StyledDiv>
  )
}

export default SkillCard