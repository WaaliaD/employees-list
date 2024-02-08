import React from 'react';
import styled from 'styled-components';
import {useAppSelector} from 'hooks/redux';
import Skills from './Skills/Skills';

const Container = styled.div<{big: boolean}>`
    display: flex;
    flex-direction: ${props => props.big ? 'row' : 'column'};
    margin-top: ${props => props.big ? '16px' : '12px'};
`

const ProfileContent = styled.div<{big: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: ${props => props.big ? '42px' : '16px'};
`

const SkillsBar = styled.div<{big: boolean}>`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${props => props.big ? '0' : '12px'};
`

const StyledImage = styled.img<{big: boolean}>`
    width: ${props => props.big ? '163px' : '100px'};
    height: ${props => props.big ? '164px' : '100px'};
    border-radius: 50%;
`

const Name = styled.h1<{big: boolean}>`
    font-size:  ${props => props.big ? '40px' : '20px'};
    margin-block-start: 5px;
    margin-block-end: 16px;
`

const Role = styled.h3<{big: boolean}>`
    font-size: ${props => props.big ? '24px' : '14px'};
    margin-block-start: 0;
    margin-block-end: 24px;
    font-weight: 400;
`

const Title = () => {
    const {employee} = useAppSelector(state => state.employeeByIdReducer);
    const {big} = useAppSelector(state => state.windowSizeReducer);

    if (big) {
        return (
            <Container big={big}>
                <StyledImage src={employee.photo} alt="Photo" big={big}/>
                <ProfileContent big={big}>
                    <Name big={big}>{employee.name}</Name>
                    <Role big={big}>{employee.position}</Role>
                    <SkillsBar big={big}>
                        {employee.stack?.map(item => <Skills key={item}>{item}</Skills>)}
                    </SkillsBar>
                </ProfileContent>
            </Container>
        )
    } else {
        return (
            <Container big={big}>
                <div style={{display: 'flex'}}>
                    <StyledImage src={employee.photo} alt="Photo" big={big}/>
                    <ProfileContent big={big}>
                        <Name big={big}>{employee.name}</Name>
                        <Role big={big}>{employee.position}</Role>
                    </ProfileContent>
                </div>
                <SkillsBar big={big}>
                    {employee.stack?.map(item => <Skills key={item}>{item}</Skills>)}
                </SkillsBar>
            </Container>
        )
    }
};

export default Title;