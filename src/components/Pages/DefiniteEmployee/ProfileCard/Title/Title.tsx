import React from 'react';
import styled from 'styled-components';
import {useAppSelector} from 'hooks/redux';
import Skills from './Skills/Skills';

const Container = styled.div<{isDesktop: boolean}>`
    display: flex;
    flex-direction: ${props => props.isDesktop ? 'row' : 'column'};
    margin-top: ${props => props.isDesktop ? '16px' : '12px'};
`

const ProfileContent = styled.div<{isDesktop: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: ${props => props.isDesktop ? '42px' : '16px'};
`

const SkillsBar = styled.div<{isDesktop: boolean}>`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${props => props.isDesktop ? '0' : '12px'};
`

const StyledImage = styled.img<{isDesktop: boolean}>`
    width: ${props => props.isDesktop ? '163px' : '100px'};
    height: ${props => props.isDesktop ? '164px' : '100px'};
    border-radius: 50%;
`

const Name = styled.h1<{isDesktop: boolean}>`
    font-size:  ${props => props.isDesktop ? '40px' : '20px'};
    margin-block-start: 5px;
    margin-block-end: 16px;
`

const Role = styled.h3<{isDesktop: boolean}>`
    font-size: ${props => props.isDesktop ? '24px' : '14px'};
    margin-block-start: 0;
    margin-block-end: 24px;
    font-weight: 400;
`

const Title = () => {
    const {employee} = useAppSelector(state => state.employeeByIdReducer);
    const {isDesktop} = useAppSelector(state => state.windowSizeReducer);

    if (isDesktop) {
        return (
            <Container isDesktop={isDesktop}>
                <StyledImage src={employee.photo} alt="Photo" isDesktop={isDesktop}/>
                <ProfileContent isDesktop={isDesktop}>
                    <Name isDesktop={isDesktop}>{employee.name}</Name>
                    <Role isDesktop={isDesktop}>{employee.position}</Role>
                    <SkillsBar isDesktop={isDesktop}>
                        {employee.stack?.map(item => <Skills key={item}>{item}</Skills>)}
                    </SkillsBar>
                </ProfileContent>
            </Container>
        )
    } else {
        return (
            <Container isDesktop={isDesktop}>
                <div style={{display: 'flex'}}>
                    <StyledImage src={employee.photo} alt="Photo" isDesktop={isDesktop}/>
                    <ProfileContent isDesktop={isDesktop}>
                        <Name isDesktop={isDesktop}>{employee.name}</Name>
                        <Role isDesktop={isDesktop}>{employee.position}</Role>
                    </ProfileContent>
                </div>
                <SkillsBar isDesktop={isDesktop}>
                    {employee.stack?.map(item => <Skills key={item}>{item}</Skills>)}
                </SkillsBar>
            </Container>
        )
    }
};

export default Title;