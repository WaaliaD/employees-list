import React from 'react';
import styled from 'styled-components';
import {useAppSelector} from '../../../../hooks/redux';
import Skills from './Skills';

const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 42px;
`

const StyledImage = styled.img`
    width: 164px;
    height: 164px;
    border-radius: 82px;
`

const Name = styled.h1`
    font-size: 2rem;
    margin-block-start: 5px;
    margin-block-end: 16px;
`

const Role = styled.h3`
    font-size: 1.2rem;
    margin-block-start: 0;
    margin-block-end: 1rem;
    font-weight: 400;
`

const ProfileTitle = () => {
    const {employee} = useAppSelector(state => state.employeeByIdReducer);

    return (
        <div style={{display: 'flex'}}>
            <StyledImage src={employee.photo} alt="Photo"/>
            <ProfileContent>
                <Name>{employee.name}</Name>
                <Role>{employee.position}</Role>
                <div style={{display: 'flex'}}>
                    {employee.stack?.map(item => <Skills key={item}>{item}</Skills>)}
                </div>
            </ProfileContent>
        </div>
    );
};

export default ProfileTitle;