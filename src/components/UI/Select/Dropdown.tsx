import React, {FC, ReactNode, useEffect, useState} from 'react';
import styled from 'styled-components';

interface dropdownProps {
    title: React.RefObject<HTMLDivElement>;
    isOpen: boolean;
    children: ReactNode[];
    backgroundColor: string;
    isDesktop: boolean;
}

const StyledDropdown = styled.div<{ isOpen: boolean, top: number, right: number, background: string, isDesktop: boolean}>`
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    padding: 12px 0;
    border-top: 1px solid #155DA4;
    width: max-content;
    top: ${props => props.isDesktop ? `${props.top + 31}px` : `${props.top + 23}px`};
    right: ${props => props.isDesktop ? `${props.right - 16}px` : 'auto'};
    background-color: ${props => props.background};
`

const Dropdown: FC<dropdownProps> = ({children, isOpen, title, backgroundColor, isDesktop}) => {
    const [posTop, setPosTop] = useState(0);
    const [posRight, setPosRight] = useState(0);

    const resizeHandler = () => {
        const rect = title?.current?.getBoundingClientRect();
        setPosTop(rect ? rect?.top : 0);
        setPosRight(rect ? window.innerWidth - rect?.right : 0);
    }

    useEffect(() => {
        resizeHandler();
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return (
        <StyledDropdown
            isDesktop={isDesktop}
            isOpen={isOpen}
            top={posTop}
            right={posRight}
            background={backgroundColor}
        >
            {children}
        </StyledDropdown>
    )
};

export default Dropdown;