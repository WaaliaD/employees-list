import React, {FC} from 'react';
import styled from 'styled-components';
import cross from '../images/cross.svg'
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {filterFormContentSlice} from '../store/reducers/FilterFormContentSlice';

const StyledSkills = styled.div`
    height: 25px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 24px;
`

interface SkillsProps {
    children: string
}

const ChosenFilters: FC<SkillsProps> = ({children}) => {
    const {filterFormContent} = useAppSelector(state => state.filterFormContentReducer);
    const dispatch = useAppDispatch();
    const {stackChanged, positionChanged, genderChanged} = filterFormContentSlice.actions

    function cancelSelection(children: string) {
        const filteredStack = filterFormContent.stack?.filter(item => item !== children);
        if(filteredStack !== filterFormContent.stack) dispatch(stackChanged(filteredStack));
        const filteredPosition = filterFormContent.position?.filter(item => item !== children);
        if(filteredPosition !== filterFormContent.position) dispatch(positionChanged(filteredPosition));
        const filteredGender = filterFormContent.gender?.filter(item => item !== children);
        if(filteredGender !== filterFormContent.gender) dispatch(genderChanged(filteredGender));
    }

    return (
        <StyledSkills onClick={() => cancelSelection(children)}>
            <img style={{marginRight: 10}} src={cross} alt="X"/>
            {children}
        </StyledSkills>
    );
};

export default ChosenFilters;