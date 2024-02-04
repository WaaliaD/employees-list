import React, {useEffect} from 'react';
import Header from './Header';
import Form from './Form';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {useInView} from 'react-intersection-observer';
import {fetchEmployees} from '../store/reducers/ActionCreators';
import Breadcrumbs from './Breadcrumbs';
import Filters from './Filters'
import {filterFormContentSlice} from '../store/reducers/FilterFormContentSlice';

const Employees = () => {
    const {employees} = useAppSelector(state => state.employeesReducer);
    const {ref, inView} = useInView();
    const {filterFormContent} = useAppSelector(state => state.filterFormContentReducer);
    const dispatch = useAppDispatch();
    const {setPage} = filterFormContentSlice.actions

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
            {employees.length
                ?
                employees.map(item => <h2 key={item.id}>{item.name}</h2>)
                :
                <h2>Таких не найденно</h2>}
            <h1>{filterFormContent.page}</h1>
            <div ref={ref} style={{backgroundColor: 'red', height: 10}}></div>
        </>
    );
};

export default Employees;