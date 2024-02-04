import React, {FC} from 'react';
import styled from 'styled-components';
import {useAppSelector} from '../../../../hooks/redux';

const StyledSkills = styled.div<{second: string}>`
    padding: 10px;
    background-color: ${props => props.second};
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 16px;
`

interface SkillsProps {
    children: string
}

const Skills: FC<SkillsProps> = ({children}) => {
    const {second} = useAppSelector(state => state.themeReducer)

    return (
        <StyledSkills second={second}>
            {children}
        </StyledSkills>
    );
};

export default Skills;