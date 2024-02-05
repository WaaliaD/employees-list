import React from 'react';
import {useAppSelector} from '../../../../hooks/redux';
import styled from 'styled-components';
import {monthToNumbers} from '../../../../utils/monthToNumbers';

const Container = styled.div<{big: boolean}>`
    display: flex;
    flex-direction: column;
    margin-top: ${props => props.big ? '80px' : '40px'};
`

const MainInfoHeading = styled.h2<{big: boolean}>`
    font-size: ${props => props.big ? '32px' : '16px'};
    font-weight: 600;
    margin-block-start: 0;
    margin-block-end: ${props => props.big ? '12px' : '4px'};
`

const Title = styled.span<{big: boolean}>`
    display: inline-block;
    width: ${props => props.big ? '292px' : '161px'};
    font-size: ${props => props.big ? '24px' : '14px'};
    margin-top: ${props => props.big ? '24px' : '12px'};
    font-weight: 500;
`

const Info = styled.span<{big: boolean}>`
    display: inline-block;
    font-size: ${props => props.big ? '24px' : '14px'};
    margin-top: ${props => props.big ? '24px' : '12px'};
`

const MainInfo = () => {
    const {big} = useAppSelector(state => state.windowSizeReducer)
    const {employee} = useAppSelector(state => state.employeeByIdReducer);

    let birthdate = '',
        dateOfEmployment = '';

    const birth = employee.birthdate?.split(' ');
    if (birth?.length) birthdate = birth[0] + '.' + monthToNumbers.get(birth[1]) + '.' + birth[2]
    const employ = employee.dateOfEmployment?.split(' ');
    if (employ?.length) dateOfEmployment = employ[0] + '.' + monthToNumbers.get(employ[1]) + '.' + employ[2]

    return (
        <Container big={big}>
            <MainInfoHeading big={big}>Основная информация</MainInfoHeading>
            <div>
                <Title big={big}>Контактный телефон:</Title><Info big={big}>{employee.phone}</Info>
            </div>
            <div>
                <Title big={big}>Дата рождения:</Title><Info big={big}>{birthdate}</Info>
            </div>
            <div>
                <Title big={big}>Дата устройства:</Title><Info big={big}>{dateOfEmployment}</Info>
            </div>
        </Container>
    );
};

export default MainInfo;