import React from 'react';
import {Space} from 'antd';
import CustomSelect from './CustomSelect';
import {gender, position, stack} from '../../../../../utils/selectOptionsConsts'
import {useAppDispatch, useAppSelector} from '../../../../../hooks/redux';
import {filterFormContentSlice} from '../../../../../store/reducers/FilterFormContentSlice';

const Selects = () => {
    const dispatch = useAppDispatch();
    const {stackChanged, positionChanged, genderChanged} = filterFormContentSlice.actions
    const {filterFormContent} = useAppSelector(state => state.filterFormContentReducer);

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
        <Space>
            <CustomSelect
                value={filterFormContent.position}
                width={240}
                placeholder='Должность'
                onChange={onPositionChangeHandler}
                options={position}/>
            <CustomSelect
                value={filterFormContent.gender}
                width={130}
                placeholder='Пол'
                onChange={onGenderChangeHandler}
                options={gender}/>
            <CustomSelect
                value={filterFormContent.stack}
                width={120}
                placeholder='Стек'
                onChange={onStackChangeHandler}
                options={stack}/>
        </Space>
    );
};

export default Selects;