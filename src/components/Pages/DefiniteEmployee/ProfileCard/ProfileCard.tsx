import React from 'react';
import styled from 'styled-components';
import Title from './Title/Title';
import MainInfo from './MainInfo/MainInfo';

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    width: 1560px;
`

const ProfileCard = () => {
    return (
        <Container>
            <Title/>
            <MainInfo/>
        </Container>
    );
};

export default ProfileCard;