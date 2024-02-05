import React, {useEffect} from 'react';
import arrow from '../images/arrow.svg';
import styled from 'styled-components';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {useNavigate, useParams} from 'react-router-dom'
import {fetchEmployeeById} from '../store/reducers/ActionCreators';

const StyledBreadcrumbs = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 24px;
`

const BreadcrumbsContent = styled.div<{big: boolean}>`
    display: flex;
    align-items: center;
    height: ${props => props.big ? '77px' : '44px'};
    width: 1560px;
    color: #B0B0B0;
    text-overflow: ellipsis;
`

const StyledSpan = styled.span<{big: boolean}>`
    cursor: pointer;
    font-size: ${props => props.big ? '18px' : '12px'};
`

const Arrow = styled.img<{big: boolean}>`
    margin: ${props => props.big ? '0 20px' : '0 15px'};
    height: ${props => props.big ? '12.67px' : '9.5px'};
    width: ${props => props.big ? '7.33px' : '5.5px'};
`

const Breadcrumbs = () => {
    const {employee} = useAppSelector(state => state.employeeByIdReducer);
    const {big} = useAppSelector(state => state.windowSizeReducer);

    const dispatch = useAppDispatch();
    const router = useNavigate();
    const params = useParams();
    const id = Number(params.id)

    function goToMain() { router(`/`) }
    function goToEmployees() { router(`/employees`) }
    function goToEmployeeById() { router(`/employees/${id}`) }


    useEffect(() => {
        if(id) {
            dispatch(fetchEmployeeById(id))
        }
    }, []);

    return (
        <StyledBreadcrumbs>
            <BreadcrumbsContent big={big}>
                <StyledSpan
                    big={big}
                    onClick={goToMain}
                >
                    Главная
                </StyledSpan>
                <Arrow big={big} src={arrow} alt={'>'}/>
                <StyledSpan
                    big={big}
                    onClick={goToEmployees}
                >
                    {big
                        ? 'Список сотрудников'
                        : 'Список'}
                </StyledSpan>
                {!!id && <>
                    <Arrow big={big} src={arrow} alt={'>'}/>
                    <StyledSpan
                        big={big}
                        onClick={goToEmployeeById}
                    >
                        {big
                            ? employee.name
                            : employee.name &&
                                employee.name.split(' ')[0]
                                + ' '
                                + employee.name.split(' ')[1][0]
                                + '. '
                                + employee.name.split(' ')[2][0]
                                + '.'
                        }
                    </StyledSpan>
                </>
                }
            </BreadcrumbsContent>
        </StyledBreadcrumbs>
    );
};

export default Breadcrumbs;