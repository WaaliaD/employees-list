import React from 'react';
import Header from '../../Header';
import Breadcrumbs from '../../Breadcrumbs';
import MainInfo from './ProfileCard/MainInfo';
import ProfileTitle from './ProfileCard/ProfileTitle';
import {useAppSelector} from '../../../hooks/redux';
import styled from 'styled-components';

const Container = styled.div<{tc: string, bc: string}>`
    color: ${props => props.tc};
    background-color: ${props => props.bc};
    min-height: 100vh;
`

const DefiniteEmployee = () => {
    const {background, textColor} = useAppSelector(state => state.themeReducer)

    return (
        <Container bc={background} tc={textColor}>
            <Header/>
            <Breadcrumbs/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', width: 1560, alignItems: 'flex-start'}}>
                    <ProfileTitle/>
                    <MainInfo/>
                </div>
            </div>
        </Container>
    );
};

export default DefiniteEmployee;