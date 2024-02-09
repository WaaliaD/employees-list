import React from 'react';
import {gender, position, stack} from 'utils/consts/selectOptions'
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {filterFormContentSlice} from 'store/reducers/FilterFormContentSlice';
import styled from 'styled-components';
import Select from 'components/UI/Select';

const Container = styled.div<{isDesktop: boolean}>`
    width: ${props => props.isDesktop ? '475px' : '100%'}; 
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    margin-bottom: ${props => props.isDesktop ? 0 : '16px'};
`

const Selects = () => {
    const {isDesktop} = useAppSelector(state => state.windowSizeReducer);
    const {filterFormContent} = useAppSelector(state => state.filterFormContentReducer);
    const {background, second} = useAppSelector(state => state.themeReducer);
    const {positionChanged, genderChanged, stackChanged} = filterFormContentSlice.actions;
    const dispatch = useAppDispatch();

    function positionDispatch(content: string[]) {
        dispatch(positionChanged(content))
    }

    function genderDispatch(content: string[]) {
        dispatch(genderChanged(content))
    }

    function stackDispatch(content: string[]) {
        dispatch(stackChanged(content))
    }

    return (
        <Container isDesktop={isDesktop}>
            <Select
                isDesktop={isDesktop}
                backgroundColor={background}
                secondColor={second}
                handler={positionDispatch}
                options={position}
                placeholder={'Должность'}
                values={filterFormContent.position}
            />
            <Select
                isDesktop={isDesktop}
                backgroundColor={background}
                secondColor={second}
                handler={genderDispatch}
                options={gender}
                placeholder={'Пол'}
                values={filterFormContent.gender}
            />
            <Select
                isMultiply={true}
                isDesktop={isDesktop}
                backgroundColor={background}
                secondColor={second}
                handler={stackDispatch}
                options={stack}
                placeholder={'Стек технологий'}
                values={filterFormContent.stack}
            />
        </Container>
    );
};

export default Selects;