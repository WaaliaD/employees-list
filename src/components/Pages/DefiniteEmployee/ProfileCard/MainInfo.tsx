import React from 'react';
import {useAppSelector} from '../../../../hooks/redux';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`

const MainInfoHeading = styled.h2`
    font-size: 1.6rem;
    font-weight: 600;
    margin-block-start: 0;
    margin-block-end: 12px;
`

const Title = styled.span`
    display: inline-block;
    width: 292px;
    font-size: 1.2rem;
    margin-top: 24px;
    font-weight: 500;
`

const Info = styled.span`
    display: inline-block;
    font-size: 1.2rem;
    margin-top: 24px;
`

const monthToNumbers = new Map([
    ['января', '01'],
    ['февраля', '02'],
    ['марта', '03'],
    ['апреля', '04'],
    ['мая', '05'],
    ['июня', '06'],
    ['июля', '07'],
    ['августа', '08'],
    ['сентября', '09'],
    ['октября', '10'],
    ['ноября', '11'],
    ['декабря', '12']
])

const MainInfo = () => {
    const {employee} = useAppSelector(state => state.employeeByIdReducer);
    const birth = employee.birthdate?.split(' ');
    let birthdate = ''
    if (birth?.length) birthdate = birth[0] + '.' + monthToNumbers.get(birth[1]) + '.' + birth[2]
    const employ = employee.dateOfEmployment?.split(' ');
    let dateOfEmployment = ''
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