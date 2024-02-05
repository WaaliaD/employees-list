import React from 'react';
import ChosenFilters from './ChosenFilters';
import styled from 'styled-components';
import {useAppDispatch, useAppSelector} from '../../../../hooks/redux';
import {fetchEmployees} from '../../../../store/reducers/ActionCreators';
import {filterFormContentSlice} from '../../../../store/reducers/FilterFormContentSlice';

const StyledFilters = styled.div<{ second: string }>`
    display: flex;
    justify-content: center;
    background-color: ${props => props.second};
    padding: 0 24px;
`

const StyledFiltersContainer = styled.div<{ big: boolean }>`
    display: flex;
    align-items: ${props => props.big ? 'center' : 'flex-start'};
    justify-content: space-between;
    flex-direction: ${props => props.big ? 'row' : 'column'};
    width: 1560px;
    padding: 13px 0;
`

const StyledFiltersContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
`

const StyledButton = styled.button<{ big: boolean }>`
    width: ${props => props.big ? '146px' : '100%'};
    padding: ${props => props.big ? '12px 48px 12px 48px' : '6px 0'};
    border-radius: 8px;
    gap: 10px;
    color: white;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    background: #155DA4;
    font-weight: 600;
`

const StyledSpan = styled.span<{ big: boolean }>`
    font-size: ${props => props.big ? '1rem' : '14px'};
    margin-right: ${props => props.big ? '40px' : '0'};
`

const Filters = () => {
    const {big} = useAppSelector(state => state.windowSizeReducer);
    const {second} = useAppSelector(state => state.themeReducer);
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
            <StyledFiltersContainer big={big}>
                {big
                    ?
                    <>
                        <StyledFiltersContent>
                            <StyledSpan big={big}>Выбранные фильтры:</StyledSpan>
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
                        <StyledButton big={big} onClick={handleSubmit}>Найти</StyledButton>
                    </>
                    :
                    <>
                        <StyledSpan big={big}>Выбранные фильтры:</StyledSpan>
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

                        <StyledButton big={big} onClick={handleSubmit}>Найти</StyledButton>
                    </>
                }

            </StyledFiltersContainer>
        </StyledFilters>
    );
};

export default Filters;