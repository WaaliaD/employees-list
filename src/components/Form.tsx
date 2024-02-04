import React from 'react';
import styled from 'styled-components';
import {Input} from 'antd';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {filterFormContentSlice} from '../store/reducers/FilterFormContentSlice';
import Selects from './Select/Selects'

const StyledForm = styled.div`
    display: flex;
    justify-content: center;
`

const StyledFormContainer = styled.div`
    width: 1560px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StyledFormContent = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledH1 = styled.h1`
    margin-bottom: 28px;
    margin-top: 16px;
    margin-right: inherit;
`

const Form = () => {
    const dispatch = useAppDispatch();
    const {filterFormContent} = useAppSelector(state => state.filterFormContentReducer);
    const {nameChanged} = filterFormContentSlice.actions

    const handleChange = (value: string) => {
        dispatch(nameChanged(value));
    };

    return (
        <StyledForm>
            <StyledFormContainer>
                <StyledFormContent>
                    <StyledH1>Список сотрудников</StyledH1>
                    <Selects/>
                </StyledFormContent>
                <Input
                    placeholder="Поиск"
                    style={{marginBottom: 28}}
                    value={filterFormContent.name}
                    onChange={(event) => handleChange(event.target.value)}/>
            </StyledFormContainer>
        </StyledForm>
    );
};

export default Form;