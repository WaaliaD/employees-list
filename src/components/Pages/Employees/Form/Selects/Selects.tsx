import React from 'react';
import CustomSelect from './CustomSelect';
import {gender, position, stack} from '../../../../../utils/selectOptionsConsts'
import {useAppDispatch, useAppSelector} from '../../../../../hooks/redux';
import {filterFormContentSlice} from '../../../../../store/reducers/FilterFormContentSlice';
import styled from 'styled-components';

const Container = styled.div<{big: boolean}>`
    width: ${props => props.big ? '50%' : '100%'}; 
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    margin-bottom: ${props => props.big ? 0 : '16px'};
`

const Selects = () => {
    const {filterFormContent} = useAppSelector(state => state.filterFormContentReducer);
    const {big} = useAppSelector(state => state.windowSizeReducer);
    const {stackChanged, positionChanged, genderChanged} = filterFormContentSlice.actions;
    const dispatch = useAppDispatch();

    function onPositionChangeHandler(value: string[]) {
        dispatch(positionChanged(value))
    }

    function onGenderChangeHandler(value: string[]) {
        dispatch(genderChanged(value))
    }

    function onStackChangeHandler(value: string[]) {
        dispatch(stackChanged(value))
    }

    return (
        <Container big={big}>
            <CustomSelect
                value={filterFormContent.position}
                width={45}
                placeholder='Должность'
                onChange={onPositionChangeHandler}
                options={position}/>
            <CustomSelect
                value={filterFormContent.gender}
                width={25}
                placeholder='Пол'
                onChange={onGenderChangeHandler}
                options={gender}/>
            <CustomSelect
                value={filterFormContent.stack}
                width={25}
                placeholder='Стек'
                onChange={onStackChangeHandler}
                options={stack}/>
        </Container>
    );
};

export default Selects;