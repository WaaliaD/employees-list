import React, {FC} from 'react';
import styled from 'styled-components';
import {useAppDispatch, useAppSelector} from '../../../../hooks/redux';
import {filterFormContentSlice} from '../../../../store/reducers/FilterFormContentSlice';

const StyledSkills = styled.div<{background: string, big: boolean}>`
    height: 25px;
    padding: 10px;
    background-color: ${props => props.background};
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: ${props => props.big ? '24px' : '16px'};
    margin-top: ${props => props.big ? 0 : '12px'};
`

interface SkillsProps {
    children: string
}

const ChosenFilters: FC<SkillsProps> = ({children}) => {
    const {background, textColor} = useAppSelector(state => state.themeReducer);
    const {filterFormContent} = useAppSelector(state => state.filterFormContentReducer);
    const {big} = useAppSelector(state => state.windowSizeReducer);
    const {stackChanged, positionChanged, genderChanged} = filterFormContentSlice.actions;
    const dispatch = useAppDispatch();

    function cancelSelection(children: string) {
        const filteredStack = filterFormContent.stack?.filter(item => item !== children);
        if(filteredStack !== filterFormContent.stack) dispatch(stackChanged(filteredStack));
        const filteredPosition = filterFormContent.position?.filter(item => item !== children);
        if(filteredPosition !== filterFormContent.position) dispatch(positionChanged(filteredPosition));
        const filteredGender = filterFormContent.gender?.filter(item => item !== children);
        if(filteredGender !== filterFormContent.gender) dispatch(genderChanged(filteredGender));
    }

    return (
        <StyledSkills onClick={() => cancelSelection(children)} background={background} big={big}>
            <svg style={{marginRight: 10}} width="10" height="10" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.67824 5.49992L9.85953 1.3187C10.0468 1.1314 10.0468 0.827767 9.85953 0.640471C9.67223
                0.453176 9.36859 0.453176 9.18129 0.640471L5 4.82169L0.818711 0.641111C0.631412 0.453815 0.327772
                0.453815 0.140474 0.641111C-0.0468245 0.828406 -0.0468245 1.13204 0.140474 1.31934L4.32176
                5.50056L0.141113 9.68114C-0.0461853 9.86844 -0.0461853 10.1721 0.141113 10.3594C0.235082 10.4527
                0.357177 10.5 0.479912 10.5C0.602646 10.5 0.725381 10.4533 0.818711 10.3594L5 6.17815L9.18129
                10.3594C9.27526 10.4527 9.39735 10.5 9.52009 10.5C9.64282 10.5 9.76556 10.4533 9.85889
                10.3594C10.0462 10.1721 10.0462 9.86844 9.85889 9.68114L5.67824 5.49992Z" fill={textColor}/>
            </svg>
            {children}
        </StyledSkills>
    );
};

export default ChosenFilters;