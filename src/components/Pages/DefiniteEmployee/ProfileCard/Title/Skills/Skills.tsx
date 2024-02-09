import React, {FC} from 'react';
import styled from 'styled-components';
import {useAppSelector} from 'hooks/redux';

const StyledSkills = styled.div<{second: string}>`
    min-width: 90px;
    height: 39px;
    background-color: ${props => props.second};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    font-size: 16px;

    @media (max-width: 768px) {
        min-width: 70px;
        height: 34px;
        margin-right: 8px;
        font-size: 12px;
    }
`

interface SkillsProps {
    children: string
}

const Skills: FC<SkillsProps> = ({children}) => {
    const {second} = useAppSelector(state => state.applicationAppearanceReducer);

    return (
        <StyledSkills second={second}>
            {children}
        </StyledSkills>
    );
};

export default Skills;