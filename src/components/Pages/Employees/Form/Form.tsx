import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {filterFormContentSlice} from 'store/reducers/FilterFormContentSlice';
import Selects from './Selects/Selects'
import Input from 'components/UI/Input'

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

const StyledH1 = styled.h1`
    margin-bottom: 28px;
    margin-top: 16px;
    margin-right: inherit;

    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
`

const Form = () => {
    const {filterFormContent} = useAppSelector(state => state.filterFormContentReducer);
    const {background, textColor} = useAppSelector(state => state.themeReducer);
    const {isDesktop} = useAppSelector(state => state.windowSizeReducer);
    const {nameChanged} = filterFormContentSlice.actions;
    const dispatch = useAppDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(nameChanged(event.target.value));
    };

    return (
        <StyledForm>
            <StyledFormContainer>
                {isDesktop ?
                    <>
                        <StyledFormContent>
                            <StyledH1>Список сотрудников</StyledH1>
                            <Selects />
                        </StyledFormContent>
                        <Input
                            textColor={textColor}
                            background={background}
                            onChange={handleChange}
                            placeholder={"Поиск"}
                            value={filterFormContent.name}
                        />
                    </>
                    :
                    <>
                        <StyledH1>Список сотрудников</StyledH1>
                        <Input
                            textColor={textColor}
                            background={background}
                            onChange={handleChange}
                            placeholder={"Поиск"}
                            value={filterFormContent.name}
                        />
                        <Selects/>
                    </>
                }
            </StyledFormContainer>
        </StyledForm>
    );
};

export default Form;