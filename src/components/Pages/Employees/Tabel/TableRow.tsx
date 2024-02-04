import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import {useAppSelector} from '../../../../hooks/redux';

const StyledTableRow = styled.div<{second: string}>`
    display: grid;
    grid-template-columns:
        minmax(150px, 4fr)
        minmax(150px, 3fr)
        minmax(150px, 2fr)
        minmax(150px, 1fr);
    padding: 28px 0;
    border-bottom: #F2F2F2 1px solid;
    &:hover {
        background-color: ${props => props.second};
    }
`

const StyledTableCell = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;     
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

interface TableRowProps {
    name: string;
    phone: string;
    position: string;
    birthdate: string;
    id: number;
}

const TableRow: FC<TableRowProps> = ({name, phone, position, birthdate, id}) => {
    const {second} = useAppSelector(state => state.themeReducer)
    const router = useNavigate();
    const birth = birthdate.split(' ');
    const date = birth[0] + '.' + monthToNumbers.get(birth[1]) + '.' + birth[2]
    return (
        <StyledTableRow onClick={() => router(`/employees/${id}`)} second={second}>
            <StyledTableCell>{name}</StyledTableCell>
            <StyledTableCell>{position}</StyledTableCell>
            <StyledTableCell>{phone}</StyledTableCell>
            <StyledTableCell style={{marginRight: 50}}>{date}</StyledTableCell>
        </StyledTableRow>
    );
};

export default TableRow;