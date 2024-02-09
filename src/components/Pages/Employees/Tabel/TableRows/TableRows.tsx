import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import {useAppSelector} from 'hooks/redux';
import {monthToNumbers} from 'utils/consts/monthToNumbers';

const StyledTableRow = styled.div<{ second: string }>`
    cursor: pointer;
    border-bottom: 1px solid #F2F2F2;
    min-width: 410px;
    display: grid;
    grid-column-gap: 15px;
    grid-template-columns: 
                minmax(150px, 4fr)
                minmax(150px, 3fr)
                minmax(150px, 2fr)
                minmax(150px, 1fr);
    padding: 28px 0;

    &:hover {
        background-color: ${props => props.second};
    }

    @media (max-width: 768px) {
        grid-template-columns: 
                minmax(80px, 1fr)
                minmax(80px, 1fr)
                minmax(115px, 1fr)
                minmax(90px, 1fr);
    }
`

const StyledTableCell = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
`

interface TableRowProps {
    name: string;
    phone: string;
    position: string;
    birthdate: string;
    id: number;
}

const TableRows: FC<TableRowProps> = ({name, phone, position, birthdate, id}) => {
    const {second} = useAppSelector(state => state.themeReducer);

    const router = useNavigate();
    const birth = birthdate.split(' ');
    const date = birth[0] + '.' + monthToNumbers.get(birth[1]) + '.' + birth[2]

    return (
        <StyledTableRow onClick={() => router(`/employees/${id}`)} second={second}>
            <StyledTableCell>{name}</StyledTableCell>
            <StyledTableCell>{position}</StyledTableCell>
            <StyledTableCell style={{whiteSpace: 'nowrap'}}>{phone}</StyledTableCell>
            <StyledTableCell>{date}</StyledTableCell>
        </StyledTableRow>
    );
};

export default TableRows;