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

const StyledFiltersContainer = styled.div<{ isDesktop: boolean }>`
    display: flex;
    align-items: ${props => props.isDesktop ? 'center' : 'flex-start'};
    justify-content: space-between;
    flex-direction: ${props => props.isDesktop ? 'row' : 'column'};
    width: 1560px;
    padding: ${props => props.isDesktop ? '0' : '16px 0'};
    height: ${props => props.isDesktop ? '71px' : 'auto'};
`

const StyledFiltersContent = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
`

const StyledButton = styled.button<{ isDesktop: boolean }>`
    width: ${props => props.isDesktop ? '146px' : '100%'};
    padding: ${props => props.isDesktop ? '12px 48px 12px 48px' : '6px 0'};
    border-radius: ${props => props.isDesktop ? '8px' : '4px'};
    border:none;
    color: white;
    background: #155DA4;
    font-weight: 600;
    cursor: pointer;
`

const StyledSpan = styled.span<{ isDesktop: boolean }>`
    font-size: ${props => props.isDesktop ? '20px' : '14px'};
    margin-right: ${props => props.isDesktop ? '40px' : '0'};
`

const Filters = () => {
    const {isDesktop} = useAppSelector(state => state.windowSizeReducer);
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
            <StyledFiltersContainer isDesktop={isDesktop}>
                {isDesktop
                    ?
                    <>
                        <StyledFiltersContent>
                            <StyledSpan isDesktop={isDesktop}>Выбранные фильтры:</StyledSpan>
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
                        <StyledSpan isDesktop={isDesktop}>Выбранные фильтры:</StyledSpan>
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
                <StyledButton isDesktop={isDesktop} onClick={handleSubmit}>Найти</StyledButton>
            </StyledFiltersContainer>
        </StyledFilters>
    );
};

export default Filters;