import React from 'react';
import Header from '../../Header';
import Breadcrumbs from '../../Breadcrumbs';
import MainInfo from './ProfileCard/MainInfo';
import ProfileTitle from './ProfileCard/ProfileTitle';

const DefiniteEmployee = () => {
    return (
        <>
            <Header/>
            <Breadcrumbs/>
            <div style={{display: 'flex', justifyContent: 'center', padding: '0 24px'}}>
                <div style={{display: 'flex', flexDirection: 'column', width: 1560}}>
                    <ProfileTitle/>
                    <MainInfo/>
                </div>
            </div>
        </>
    );
};

export default DefiniteEmployee;