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

const BreadcrumbsContent = styled.div`
    display: flex;
    align-items: center;
    padding: 28px 0;
    width: 1560px;
    color: #B0B0B0;
    text-overflow: ellipsis;
`

const Breadcrumbs = () => {
    const {employee} = useAppSelector(state => state.employeeByIdReducer);

    const dispatch = useAppDispatch();
    const router = useNavigate();
    const params = useParams();
    const id = Number(params.id)

    useEffect(() => {
        if(id) {
            dispatch(fetchEmployeeById(id))
        }
    }, []);

    return (
        <StyledBreadcrumbs>
            <BreadcrumbsContent>
                <span
                    onClick={() => router(`/`)}
                    style={{cursor: 'pointer'}}
                >
                    Главная
                </span>
                <img style={{margin: 20}} src={arrow} alt={'>'}/>
                <span
                    onClick={() => router(`/employees`)}
                    style={{cursor: 'pointer'}}
                >
                    Список сотрудников
                </span>
                {!!id && <>
                    <img style={{margin: 20}} src={arrow} alt={'>'}/>
                    <span
                        onClick={() => router(`/employees/${id}`)}
                        style={{cursor: 'pointer'}}
                    >
                        {employee.name}
                    </span>
                </>
                }
            </BreadcrumbsContent>
        </StyledBreadcrumbs>
    );
};

export default Breadcrumbs;