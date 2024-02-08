import React from 'react';
import {useAppSelector} from 'hooks/redux';
import styled from 'styled-components';
import {monthToNumbers} from 'utils/consts/monthToNumbers';

const Container = styled.div<{isDesktop: boolean}>`
    display: flex;
    flex-direction: column;
    margin-top: ${props => props.isDesktop ? '80px' : '40px'};
`

const MainInfoHeading = styled.h2<{isDesktop: boolean}>`
    font-size: ${props => props.isDesktop ? '32px' : '16px'};
    font-weight: 600;
    margin-block-start: 0;
    margin-block-end: ${props => props.isDesktop ? '12px' : '4px'};
`

const Title = styled.span<{isDesktop: boolean}>`
    display: inline-block;
    width: ${props => props.isDesktop ? '292px' : '161px'};
    font-size: ${props => props.isDesktop ? '24px' : '14px'};
    margin-top: ${props => props.isDesktop ? '24px' : '12px'};
    font-weight: 500;
`

const Info = styled.span<{isDesktop: boolean}>`
    display: inline-block;
    font-size: ${props => props.isDesktop ? '24px' : '14px'};
    margin-top: ${props => props.isDesktop ? '24px' : '12px'};
`

const MainInfo = () => {
    const {isDesktop} = useAppSelector(state => state.windowSizeReducer)
    const {employee} = useAppSelector(state => state.employeeByIdReducer);

    let birthdate = '',
        dateOfEmployment = '';

    const birth = employee.birthdate?.split(' ');
    if (birth?.length) birthdate = birth[0] + '.' + monthToNumbers.get(birth[1]) + '.' + birth[2]
    const employ = employee.dateOfEmployment?.split(' ');
    if (employ?.length) dateOfEmployment = employ[0] + '.' + monthToNumbers.get(employ[1]) + '.' + employ[2]

    return (
        <Container isDesktop={isDesktop}>
            <MainInfoHeading isDesktop={isDesktop}>Основная информация</MainInfoHeading>
            <div>
                <Title isDesktop={isDesktop}>Контактный телефон:</Title><Info isDesktop={isDesktop}>{employee.phone}</Info>
            </div>
            <div>
                <Title isDesktop={isDesktop}>Дата рождения:</Title><Info isDesktop={isDesktop}>{birthdate}</Info>
            </div>
            <div>
                <Title isDesktop={isDesktop}>Дата устройства:</Title><Info isDesktop={isDesktop}>{dateOfEmployment}</Info>
            </div>
        </Container>
    );
};

export default MainInfo;