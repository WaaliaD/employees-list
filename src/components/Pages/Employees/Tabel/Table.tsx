import React from 'react';
import styled from 'styled-components';
import TableRows from './TableRows/TableRows';
import {useAppSelector} from 'hooks/redux';

const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 24px;
`

const StyledTable = styled.div`
    width: 1584px;
    display: flex;
    flex-direction: column;
`

const TableHead = styled.div<{isDesktop: boolean}>`
    display: grid;
    grid-column-gap: 15px;
    grid-template-columns: ${(props) => 
        props.isDesktop
            ?
                `minmax(150px, 4fr)
                minmax(150px, 3fr)
                minmax(150px, 2fr)
                minmax(150px, 1fr)`
            :
                `minmax(80px, 1fr)
                minmax(80px, 1fr)
                minmax(80px, 0.7fr)`
    };
    padding: ${(props) =>
        props.isDesktop
            ? '32px 12px 28px 12px'
            : '24px 0 4px 0'
    };
`

const StyledTh = styled.div`
    color: #B0B0B0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    font-weight: normal;
`

const Table = () => {
    const {employees} = useAppSelector(state => state.employeesReducer);
    const {isDesktop} = useAppSelector(state => state.windowSizeReducer);

    return (
        <TableContainer>
            <StyledTable>
                <TableHead isDesktop={isDesktop}>
                    <StyledTh>ФИО</StyledTh>
                    <StyledTh>Должность</StyledTh>
                    <StyledTh>Телефон</StyledTh>
                    {isDesktop && <StyledTh>Дата рождения</StyledTh>}
                </TableHead>
                {employees.length
                    ?
                    employees.map(item => <TableRows
                        key={item.id}
                        name={item.name}
                        phone={item.phone}
                        position={item.position}
                        birthdate={item.birthdate}
                        id={item.id}
                    />)
                    :
                    <h2 style={{textAlign: 'center'}}>Таких не найденно</h2>}
            </StyledTable>
        </TableContainer>
    );
};

export default Table;