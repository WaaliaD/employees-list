import React from 'react';
import styled from 'styled-components';
import image from "../images/logo.png";
import {Switch} from 'antd';

const onChange = (checked: boolean) => {

};

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    box-shadow: 0 4px 8px 0 #3971A440;
`

const Services = styled.div`
    width: 1560px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
`

const ServicesInfo = styled.div`
    margin-left: auto;
`

const StyledSpan = styled.span`
    margin-left: 12px;
    margin-right: 48px;
`


const Header = () => {
    return (
        <StyledHeader>
            <Services>
                <img src={image} alt="logo"/>
                <ServicesInfo>
                    <StyledSpan>+7 343 290 84 76</StyledSpan>
                    <StyledSpan>info@66bit.ru</StyledSpan>
                </ServicesInfo>
                <Switch onChange={onChange}/>
            </Services>
        </StyledHeader>

    );
};

export default Header;