import React from 'react';
import styled from 'styled-components';
import {useAppSelector} from 'hooks/redux';
import Skills from './Skills/Skills';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 16px;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 12px;
    }
`

const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 42px;

    @media (max-width: 768px) {
        margin-left: 16px;
    }
`

const SkillsBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 0;

    @media (max-width: 768px) {
        margin-top: 12px;
    }
`

const StyledImage = styled.img`
    width: 163px;
    height: 164px;
    border-radius: 50%;

    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
    }
`

const Name = styled.h1`
    font-size: 40px;
    margin-block-start: 5px;
    margin-block-end: 16px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`

const Role = styled.h3`
    font-size: 24px;
    margin-block-start: 0;
    margin-block-end: 24px;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`

const Title = () => {
    const {employee} = useAppSelector(state => state.employeeByIdReducer);
    const {isDesktop} = useAppSelector(state => state.applicationAppearanceReducer);

    if (isDesktop) {
        return (
            <Container>
                <StyledImage src={employee.photo} alt="Photo"/>
                <ProfileContent>
                    <Name>{employee.name}</Name>
                    <Role>{employee.position}</Role>
                    <SkillsBar>
                        {employee.stack?.map(item => <Skills key={item}>{item}</Skills>)}
                    </SkillsBar>
                </ProfileContent>
            </Container>
        )
    } else {
        return (
            <Container>
                <div style={{display: 'flex'}}>
                    <StyledImage src={employee.photo} alt="Photo"/>
                    <ProfileContent>
                        <Name>{employee.name}</Name>
                        <Role>{employee.position}</Role>
                    </ProfileContent>
                </div>
                <SkillsBar>
                    {employee.stack?.map(item => <Skills key={item}>{item}</Skills>)}
                </SkillsBar>
            </Container>
        )
    }
};

export default Title;