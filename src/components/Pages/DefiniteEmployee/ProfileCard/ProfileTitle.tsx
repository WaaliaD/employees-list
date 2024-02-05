import React from 'react';
import styled from 'styled-components';
import {useAppSelector} from '../../../../hooks/redux';
import Skills from './Skills';

const ProfileContent = styled.div<{big: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: ${props => props.big ? '42px' : '16px'};
`

const StyledImage = styled.img<{big: boolean}>`
    width: ${props => props.big ? '164px' : '100px'};
    height: ${props => props.big ? '164px' : '100px'};
    border-radius: 82px;
`

const Name = styled.h1<{big: boolean}>`
    font-size:  ${props => props.big ? '40px' : '20px'};
    margin-block-start: 5px;
    margin-block-end: 16px;
`

const Role = styled.h3<{big: boolean}>`
    font-size:  ${props => props.big ? '24px' : '14px'};
    margin-block-start: 0;
    margin-block-end: 1rem;
    font-weight: 400;
`

const ProfileTitle = () => {
    const {employee} = useAppSelector(state => state.employeeByIdReducer);
    const {big} = useAppSelector(state => state.windowSizeReducer)

    return (
        <>
            {big
                ?
                    <div style={{display: 'flex'}}>
                        <StyledImage src={employee.photo} alt="Photo" big={big}/>
                        <ProfileContent big={big}>
                            <Name big={big}>{employee.name}</Name>
                            <Role big={big}>{employee.position}</Role>
                            <div style={{display: 'flex'}}>
                                {employee.stack?.map(item => <Skills key={item}>{item}</Skills>)}
                            </div>
                        </ProfileContent>
                    </div>
                :
                    <>
                        <div style={{display: 'flex'}}>
                            <StyledImage src={employee.photo} alt="Photo" big={big}/>
                            <ProfileContent big={big}>
                                <Name big={big}>{employee.name}</Name>
                                <Role big={big}>{employee.position}</Role>
                            </ProfileContent>
                        </div>
                        <div style={{display: 'flex', marginTop: 12}}>
                            {employee.stack?.map(item => <Skills key={item}>{item}</Skills>)}
                        </div>
                    </>
            }
        </>
    );
};

export default ProfileTitle;