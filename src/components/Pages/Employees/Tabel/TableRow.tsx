import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import {useAppSelector} from '../../../../hooks/redux';
import {monthToNumbers} from '../../../../utils/monthToNumbers';

const StyledTableRow = styled.div<{second: string, big: boolean}>`
    display: grid;
    grid-column-gap: 15px;
    grid-template-columns: ${(props) =>
    props.big
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
    padding: 28px 0;
    border-bottom: #F2F2F2 1px solid;
    &:hover {
        background-color: ${props => props.second};
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

const TableRow: FC<TableRowProps> = ({name, phone, position, birthdate, id}) => {
    const {big} = useAppSelector(state => state.windowSizeReducer);
    const {second} = useAppSelector(state => state.themeReducer);

    const router = useNavigate();
    const birth = birthdate.split(' ');
    const date = birth[0] + '.' + monthToNumbers.get(birth[1]) + '.' + birth[2]

    return (
        <StyledTableRow onClick={() => router(`/employees/${id}`)} second={second} big={big}>
            <StyledTableCell>{name}</StyledTableCell>
            <StyledTableCell>{position}</StyledTableCell>
            <StyledTableCell style={{whiteSpace: 'nowrap'}}>{phone}</StyledTableCell>
            {big && <StyledTableCell>{date}</StyledTableCell>}
        </StyledTableRow>
    );
};

export default TableRow;