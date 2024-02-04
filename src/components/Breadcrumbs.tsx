import React from 'react';
import arrow from '../images/arrow.svg';
import styled from 'styled-components';

const StyledBreadcrumbs = styled.div`
    display: flex;
    justify-content: center;
`

const BreadcrumbsContent = styled.div`
    display: flex;
    align-items: center;
    padding: 28px 0;
    width: 1560px;
`

const Breadcrumbs = () => {
    const url = new URL(window.location.href);

    return (
        <StyledBreadcrumbs>
            <BreadcrumbsContent>
                <span>Главная</span>
                <img style={{margin: 20}} src={arrow} alt={'>'}/>
                <span>Список сотрудников</span>
                {url.pathname.split('/').filter(x => !!x && x !== 'employees').map(item =>
                    <>
                        <img style={{margin: 20}} src={arrow} alt={'>'}/>
                        <span>{item}</span>
                    </>
                )}
            </BreadcrumbsContent>
        </StyledBreadcrumbs>
    );
};

export default Breadcrumbs;