import React, {FC} from 'react';
import styled from 'styled-components';
import {useAppSelector} from 'hooks/redux';

const StyledSkills = styled.div<{second: string, isDesktop: boolean}>`
    min-width: ${props => props.isDesktop ? '90px' : '70px'};
    height: ${props => props.isDesktop ? '39px' : '34px'};
    background-color: ${props => props.second};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${props => props.isDesktop ? '16px' : '8px'};
    font-size: ${props => props.isDesktop ? '16px' : '12px'};
`

interface SkillsProps {
    children: string
}

const Skills: FC<SkillsProps> = ({children}) => {
    const {second} = useAppSelector(state => state.themeReducer)
    const {isDesktop} = useAppSelector(state => state.windowSizeReducer)

    return (
        <StyledSkills second={second} isDesktop={isDesktop}>
            {children}
        </StyledSkills>
    );
};

export default Skills;