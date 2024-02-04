import React, {useEffect} from 'react';
import Header from '../../Header';
import Form from './Form/Form';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {useInView} from 'react-intersection-observer';
import {fetchEmployees} from '../../../store/reducers/ActionCreators';
import Breadcrumbs from '../../Breadcrumbs';
import Filters from './Form/Filters'
import Table from './Tabel/Table'
import {filterFormContentSlice} from '../../../store/reducers/FilterFormContentSlice';
import styled from 'styled-components';

const Container = styled.div<{tc: string, bc: string}>`
    color: ${props => props.tc};
    background-color: ${props => props.bc};
    min-height: 100vh;
`

const Employees = () => {
    const {employees} = useAppSelector(state => state.employeesReducer);
    const {ref, inView} = useInView();
    const {filterFormContent} = useAppSelector(state => state.filterFormContentReducer);
    const dispatch = useAppDispatch();
    const {setPage} = filterFormContentSlice.actions
    const {background, textColor} = useAppSelector(state => state.themeReducer)

    useEffect(() => {
        if(inView) {
            dispatch(fetchEmployees(
                filterFormContent.page,
                filterFormContent.name,
                filterFormContent.gender,
                filterFormContent.position,
                filterFormContent.stack,
                employees,
            ));
            dispatch(setPage(filterFormContent.page+1))
        }
    }, [inView]);

    return (
        <Container bc={background} tc={textColor}>
            <Header/>
            <Breadcrumbs/>
            <Form/>
            <Filters/>
            <Table/>
            <div ref={ref} style={{height: 10}}></div>
        </Container>
    );
};

export default Employees;