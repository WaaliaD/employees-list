import React from 'react';
import styled from 'styled-components';
import image from "utils/images/logo.png";
import Switch from '../UI/Switch';
import {useAppSelector} from 'hooks/redux';

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    box-shadow: 0 4px 8px 0 #3971A440;
    padding: 0 24px;
`

const Services = styled.div<{big: boolean}>`
    width: 1560px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${props => props.big ? '90px' : '54px'};
`

const ServicesInfo = styled.div`
    margin-left: auto;
`

const StyledSpan = styled.span`
    margin-left: 12px;
    margin-right: 48px;
    font-size: 18px;
`

const Header = () => {
    const {big} = useAppSelector(state => state.windowSizeReducer);

    return (
        <StyledHeader>
            <Services big={big}>
                <img
                    width={big ? '101px' : '52px'}
                    height={big ? '41px' : '22px'}
                    src={image}
                    alt="logo"
                />
                {big &&
                    <ServicesInfo>
                        <StyledSpan>+7 343 290 84 76</StyledSpan>
                        <StyledSpan>info@66bit.ru</StyledSpan>
                    </ServicesInfo>
                }
                <Switch/>
            </Services>
        </StyledHeader>

    );
};

export default Header;