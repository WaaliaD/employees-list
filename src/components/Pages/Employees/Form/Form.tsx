import React from 'react';
import styled from 'styled-components';
import {Input} from 'antd';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {filterFormContentSlice} from 'store/reducers/FilterFormContentSlice';
import Selects from './Selects/Selects'

const StyledForm = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 24px;
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

const StyledH1 = styled.h1<{big: boolean}>`
    margin-bottom: ${props => props.big ? '28px' : '16px'};
    margin-top: 16px;
    margin-right: inherit;
`

const Form = () => {
    const {filterFormContent} = useAppSelector(state => state.filterFormContentReducer);
    const {big} = useAppSelector(state => state.windowSizeReducer);
    const {nameChanged} = filterFormContentSlice.actions;
    const dispatch = useAppDispatch();

    const handleChange = (value: string) => {
        dispatch(nameChanged(value));
    };

    return (
        <StyledForm>
            <StyledFormContainer>
                {big ?
                    <>
                        <StyledFormContent>
                            <StyledH1 big={big}>Список сотрудников</StyledH1>
                            <Selects />
                        </StyledFormContent>
                        <Input
                            placeholder="Поиск"
                            style={{marginBottom: 28}}
                            value={filterFormContent.name}
                            onChange={(event) => handleChange(event.target.value)}/>
                    </>
                    :
                    <>
                        <StyledH1 big={big}>Список сотрудников</StyledH1>
                        <Input
                            placeholder="Поиск"
                            style={{marginBottom: 12}}
                            value={filterFormContent.name}
                            onChange={(event) => handleChange(event.target.value)}/>
                        <Selects/>
                    </>
                }
            </StyledFormContainer>
        </StyledForm>
    );
};

export default Form;