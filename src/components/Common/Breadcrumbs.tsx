import React from 'react';
import arrow from 'utils/images/arrow.svg';
import styled from 'styled-components';
import {useAppSelector} from 'hooks/redux';
import {useNavigate} from 'react-router-dom'
import {urlPathnameToBreadcrumbs} from 'utils/consts/urlPathnameToBreadcrumbs';

const StyledBreadcrumbs = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 24px;
`

const BreadcrumbsContent = styled.div<{ isDesktop: boolean }>`
    display: flex;
    align-items: center;
    height: ${props => props.isDesktop ? '77px' : '44px'};
    width: 1560px;
    color: #B0B0B0;
    text-overflow: ellipsis;
`

const StyledSpan = styled.span<{ isDesktop: boolean }>`
    cursor: pointer;
    font-size: ${props => props.isDesktop ? '18px' : '12px'};
`

const Arrow = styled.img<{ isDesktop: boolean }>`
    margin: ${props => props.isDesktop ? '0 20.33px' : '0 15.25px'};
    height: ${props => props.isDesktop ? '12.67px' : '9.5px'};
    width: ${props => props.isDesktop ? '7.33px' : '5.5px'};
`

const Breadcrumbs = () => {
    const {employee} = useAppSelector(state => state.employeeByIdReducer);
    const {isDesktop} = useAppSelector(state => state.windowSizeReducer);

    const currentUrl = window.location;
    let params = currentUrl.pathname.split('/');

    const router = useNavigate();

    function goToMain() {
        router(`/`)
    }

    function goToThePageByName(page: string) {
        router(`/${page}`)
    }

    function goToEmployeePageById(id: string) {
        router(`/employees/${id}`)
    }

    return (
        <StyledBreadcrumbs>
            <BreadcrumbsContent isDesktop={isDesktop}>
                <StyledSpan
                    isDesktop={isDesktop}
                    onClick={goToMain}
                >
                    Главная
                </StyledSpan>
                {params
                    .filter(item => urlPathnameToBreadcrumbs.has(item) || !!Number(item))
                    .map(item => {
                        if (urlPathnameToBreadcrumbs.has(item)) {
                            return (
                                <>
                                    <Arrow key={item} isDesktop={isDesktop} src={arrow} alt={'>'}/>
                                    <StyledSpan
                                        isDesktop={isDesktop}
                                        onClick={() => goToThePageByName(item)}
                                    >
                                        {isDesktop
                                            ? urlPathnameToBreadcrumbs.get(item)?.[0]
                                            : urlPathnameToBreadcrumbs.get(item)?.[1]
                                        }
                                    </StyledSpan>
                                </>
                            )
                        }
                        return (
                            <>
                                <Arrow key={item} isDesktop={isDesktop} src={arrow} alt={'>'}/>
                                <StyledSpan
                                    isDesktop={isDesktop}
                                    onClick={() => goToEmployeePageById(item)}
                                >
                                    {isDesktop
                                        ? employee.name
                                        : employee.name &&
                                        employee.name.split(' ')[0]
                                        + ' '
                                        + employee.name.split(' ')[1][0]
                                        + '. '
                                        + employee.name.split(' ')[2][0]
                                        + '.'
                                    }
                                </StyledSpan>
                            </>
                        )
                    })
                }
            </BreadcrumbsContent>
        </StyledBreadcrumbs>
    );
};

export default Breadcrumbs;