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

const Employees = () => {
    const {employees} = useAppSelector(state => state.employeesReducer);
    const {filterFormContent} = useAppSelector(state => state.filterFormContentReducer);
    const {setPage} = filterFormContentSlice.actions;

    const {ref, inView} = useInView();
    const dispatch = useAppDispatch();

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
        <>
            <Header/>
            <Breadcrumbs/>
            <Form/>
            <Filters/>
            <Table/>
            <div ref={ref} style={{height: 10}}></div>
        </>
    );
};

export default Employees;