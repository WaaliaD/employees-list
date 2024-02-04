import React from 'react';
import ChosenFilters from './ChosenFilters';
import styled from 'styled-components';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {fetchEmployees} from '../store/reducers/ActionCreators';
import {filterFormContentSlice} from '../store/reducers/FilterFormContentSlice';

const StyledFilters = styled.div`
    display: flex;
    justify-content: center;
    background-color: #F2F2F2;
`

const StyledFiltersContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1560px;
    padding: 13px 0;
`

const StyledFiltersContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const StyledButton = styled.button`
    width: 146px;
    height: 45px;
    padding: 12px 48px 12px 48px;
    border-radius: 8px;
    gap: 10px;
    color: white;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    background: #155DA4;
`

const Filters = () => {
    const dispatch = useAppDispatch();
    const {filterFormContent} = useAppSelector(state => state.filterFormContentReducer);
    const {setPage} = filterFormContentSlice.actions

    const handleSubmit = () => {
        dispatch(fetchEmployees(
            1,
            filterFormContent.name,
            filterFormContent.gender,
            filterFormContent.position,
            filterFormContent.stack
        ));
        dispatch(setPage(2));
    }

    return (
        <StyledFilters>
            <StyledFiltersContainer>
                <StyledFiltersContent>
                    <span style={{marginRight: 40}}>Выбранные фильтры:</span>
                    {filterFormContent.gender?.map(item =>
                        <ChosenFilters>{item}</ChosenFilters>
                    )}
                    {filterFormContent.stack?.map(item =>
                        <ChosenFilters>{item}</ChosenFilters>
                    )}
                    {filterFormContent.position?.map(item =>
                        <ChosenFilters>{item}</ChosenFilters>
                    )}
                </StyledFiltersContent>
                <StyledButton onClick={handleSubmit}>Найти</StyledButton>
            </StyledFiltersContainer>
        </StyledFilters>
    );
};

export default Filters;