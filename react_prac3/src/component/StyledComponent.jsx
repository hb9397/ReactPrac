import React from 'react'
import styled, {css} from 'styled-components'

// 아래의 ``안에  스타일을 저장
const Box = styled.div`
background: ${props => props.color || 'blue'};
padding: 1rem;
display: flex`;

const Button = styled.button`
backgoround: white;
color: balck;
border.radius: 4px;
padding: 0.5rem;
display: flex);
justify-contenet: center;
box-sizing: border-box;
font-size = 200;
font weight; 600

&:hover{background: rgba(255, 255, 255,0.9)}

& + button{
    margin-left:1rem;
}`


const StyledComponent = () => {
  return (
    <div>
        <Box color='black'>
            <Button>안녕하세요</Button>
            <Button>반갑습니다</Button>
        </Box>
    </div>
  )
}

export default StyledComponent