import styled from 'styled-components'
import Flex from './Flex'
import React, { useState } from 'react';
import Line from './Line';




const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
background: black;
font-size: 24px;
border: none;
resize: none:; 
color: ${props => props.color || 'white'};
&:focus {
    outline: none;
}
`

const Console = ({ color, ...props }) => {
    const [lines, setLines] = useState(['C/users/~/Desktop>'])
    return (
        <Flex>
            <Flex direction='column'>
                {lines.map(line =>
                    <Line color={color}>
                        {line}
                    </Line>
                )}
            </Flex>
            <StyledConsole {...props} />
        </Flex>
    )
}

export default Console