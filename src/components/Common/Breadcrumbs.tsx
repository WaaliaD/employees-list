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

const BreadcrumbsContent = styled.div<{ big: boolean }>`
    display: flex;
    align-items: center;
    height: ${props => props.big ? '77px' : '44px'};
    width: 1560px;
    color: #B0B0B0;
    text-overflow: ellipsis;
`

const StyledSpan = styled.span<{ big: boolean }>`
    cursor: pointer;
    font-size: ${props => props.big ? '18px' : '12px'};
`

const Arrow = styled.img<{ big: boolean }>`
    margin: ${props => props.big ? '0 20px' : '0 15px'};
    height: ${props => props.big ? '12.67px' : '9.5px'};
    width: ${props => props.big ? '7.33px' : '5.5px'};
`

const Breadcrumbs = () => {
    const {employee} = useAppSelector(state => state.employeeByIdReducer);
    const {big} = useAppSelector(state => state.windowSizeReducer);

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
            <BreadcrumbsContent big={big}>
                <StyledSpan
                    big={big}
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
                                    <Arrow big={big} src={arrow} alt={'>'}/>
                                    <StyledSpan
                                        big={big}
                                        onClick={() => goToThePageByName(item)}
                                    >
                                        {big
                                            ? urlPathnameToBreadcrumbs.get(item)?.[0]
                                            : urlPathnameToBreadcrumbs.get(item)?.[1]
                                        }
                                    </StyledSpan>
                                </>
                            )
                        }
                        return (
                            <>
                                <Arrow big={big} src={arrow} alt={'>'}/>
                                <StyledSpan
                                    big={big}
                                    onClick={() => goToEmployeePageById(item)}
                                >
                                    {big
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