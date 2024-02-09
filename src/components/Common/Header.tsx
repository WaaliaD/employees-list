import React from 'react';
import styled from 'styled-components';
import image from "utils/images/logo.png";
import Switch from '../UI/Switch';

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    box-shadow: 0 4px 8px 0 #3971A440;
    padding: 0 24px;
`

const Services = styled.div`
    width: 1560px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;

    @media (max-width: 768px) {
        height: 54px;
    }
`

const ServicesInfo = styled.div`
    margin-left: auto;

    @media (max-width: 768px) {
        display: none;
    }
`

const StyledSpan = styled.span`
    margin-left: 12px;
    margin-right: 48px;
    font-size: 18px;
`

const Logo = styled.img`
    width: 101px;
    height: 41px;

    @media (max-width: 768px) {
        width: 52px;
        height: 22px;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <Services>
                <Logo src={image} alt="logo"/>
                <ServicesInfo>
                    <StyledSpan>+7 343 290 84 76</StyledSpan>
                    <StyledSpan>info@66bit.ru</StyledSpan>
                </ServicesInfo>
                <Switch/>
            </Services>
        </StyledHeader>

    );
};

export default Header;