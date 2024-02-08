import React, {useEffect} from 'react';
import {fetchEmployeeById} from 'store/reducers/ActionCreators';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from 'hooks/redux';
import ProfileCard from './ProfileCard/ProfileCard';

const DefiniteEmployee = () => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const id = Number(params.id)

    useEffect(() => {
        if (id) {
            dispatch(fetchEmployeeById(id))
        }
    }, []);

    return (
        <div style={{display: 'flex', justifyContent: 'center', padding: '0 24px'}}>
            <ProfileCard/>
        </div>
    );
};

export default DefiniteEmployee;