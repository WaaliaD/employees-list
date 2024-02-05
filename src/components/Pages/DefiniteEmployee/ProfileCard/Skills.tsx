import React, {FC} from 'react';
import styled from 'styled-components';
import {useAppSelector} from '../../../../hooks/redux';

const StyledSkills = styled.div<{second: string, big: boolean}>`
    min-width: ${props => props.big ? '90px' : '70px'};
    height: ${props => props.big ? '39px' : '34px'};
    background-color: ${props => props.second};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${props => props.big ? '16px' : '8px'};
    font-size: ${props => props.big ? '16px' : '12px'};
`

interface SkillsProps {
    children: string
}

const Skills: FC<SkillsProps> = ({children}) => {
    const {second} = useAppSelector(state => state.themeReducer)
    const {big} = useAppSelector(state => state.windowSizeReducer)

    return (
        <StyledSkills second={second} big={big}>
            {children}
        </StyledSkills>
    );
};

export default Skills;