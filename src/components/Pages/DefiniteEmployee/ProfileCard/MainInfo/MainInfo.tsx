import React from 'react';
import {useAppSelector} from 'hooks/redux';
import styled from 'styled-components';
import {monthToNumbers} from 'utils/consts/monthToNumbers';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;

    @media (max-width: 768px) {
        margin-top: 40px;
    }
`

const MainInfoHeading = styled.h2`
    font-size: 32px;
    font-weight: 600;
    margin-block-start: 0;
    margin-block-end: 12px;

    @media (max-width: 768px) {
        font-size: 16px;
        margin-block-end: 4px;
    }
`

const Title = styled.span`
    display: inline-block;
    width: 292px;
    font-size: 24px;
    margin-top: 24px;
    font-weight: 500;

    @media (max-width: 768px) {
        width: 161px;
        font-size: 14px;
        margin-top: 12px;
    }
`

const Info = styled.span`
    display: inline-block;
    font-size: 24px;
    margin-top: 24px;

    @media (max-width: 768px) {
        font-size: 14px;
        margin-top: 12px;
    }
`

const MainInfo = () => {
    const {employee} = useAppSelector(state => state.employeeByIdReducer);

    let birthdate = '',
        dateOfEmployment = '';

    const birth = employee.birthdate?.split(' ');
    if (birth?.length) birthdate = birth[0] + '.' + monthToNumbers.get(birth[1]) + '.' + birth[2]
    const employ = employee.dateOfEmployment?.split(' ');
    if (employ?.length) dateOfEmployment = employ[0] + '.' + monthToNumbers.get(employ[1]) + '.' + employ[2]

    return (
        <Container>
            <MainInfoHeading>Основная информация</MainInfoHeading>
            <div>
                <Title>Контактный телефон:</Title><Info>{employee.phone}</Info>
            </div>
            <div>
                <Title>Дата рождения:</Title><Info>{birthdate}</Info>
            </div>
            <div>
                <Title>Дата устройства:</Title><Info>{dateOfEmployment}</Info>
            </div>
        </Container>
    );
};

export default MainInfo;