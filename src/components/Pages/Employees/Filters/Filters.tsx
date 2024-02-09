import React from 'react';
import ChosenFilters from './ChosenFilters/ChosenFilters';
import styled from 'styled-components';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {fetchEmployees} from 'store/reducers/ActionCreators';
import {filterFormContentSlice} from 'store/reducers/FilterFormContentSlice';

const StyledFilters = styled.div<{ second: string }>`
    display: flex;
    justify-content: center;
    background-color: ${props => props.second};
    padding: 0 24px;
`

const StyledFiltersContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 1560px;
    padding: 0;
    height: 71px;

    @media (max-width: 768px) {
        align-items: flex-start;
        flex-direction: column;
        padding: 16px 0;
        height: auto;
    }
`

const StyledFiltersContent = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
`

const StyledButton = styled.button`
    width: 146px;
    padding: 12px 48px 12px 48px;
    border-radius: 8px;
    border:none;
    color: white;
    background: #155DA4;
    font-weight: 600;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 100%;
        padding: 6px 0;
        border-radius: 4px;
    }
`

const StyledSpan = styled.span`
    font-size: 20px;
    margin-right: 40px;

    @media (max-width: 768px) {
        font-size: 14px;
        margin-right: 0;
    }
`

const Filters = () => {
    const {second, isDesktop} = useAppSelector(state => state.applicationAppearanceReducer);
    const {filterFormContent} = useAppSelector(state => state.filterFormContentReducer);
    const {setPage} = filterFormContentSlice.actions
    const dispatch = useAppDispatch();

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
        <StyledFilters second={second}>
            <StyledFiltersContainer>
                {isDesktop
                    ?
                    <>
                        <StyledFiltersContent>
                            <StyledSpan>Выбранные фильтры:</StyledSpan>
                            {filterFormContent.gender?.map(item =>
                                <ChosenFilters key={item}>{item}</ChosenFilters>
                            )}
                            {filterFormContent.stack?.map(item =>
                                <ChosenFilters key={item}>{item}</ChosenFilters>
                            )}
                            {filterFormContent.position?.map(item =>
                                <ChosenFilters key={item}>{item}</ChosenFilters>
                            )}
                        </StyledFiltersContent>
                    </>
                    :
                    <>
                        <StyledSpan>Выбранные фильтры:</StyledSpan>
                        <StyledFiltersContent style={{marginBottom: 16}}>
                            {filterFormContent.gender?.map(item =>
                                <ChosenFilters key={item}>{item}</ChosenFilters>
                            )}
                            {filterFormContent.stack?.map(item =>
                                <ChosenFilters key={item}>{item}</ChosenFilters>
                            )}
                            {filterFormContent.position?.map(item =>
                                <ChosenFilters key={item}>{item}</ChosenFilters>
                            )}
                        </StyledFiltersContent>
                    </>
                }
                <StyledButton onClick={handleSubmit}>Найти</StyledButton>
            </StyledFiltersContainer>
        </StyledFilters>
    );
};

export default Filters;