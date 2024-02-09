import React, {FC, ReactNode, useEffect, useState} from 'react';
import styled from 'styled-components';

interface dropdownProps {
    title: React.RefObject<HTMLDivElement>;
    isOpen: boolean;
    children: ReactNode[];
    backgroundColor: string;
}

const StyledDropdown = styled.div<{ isOpen: boolean, top: number, right: number, background: string}>`
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    padding: 12px 0;
    border-top: 1px solid #155DA4;
    width: max-content;
    top: ${props => props.top + 31}px;
    right: ${props => props.right - 16}px;
    background-color: ${props => props.background};
    
    @media (max-width: 768px) {
        top: ${props => props.top + 23}px;
        right: auto;
    }
`

const Dropdown: FC<dropdownProps> = ({children, isOpen, title, backgroundColor}) => {
    const [posTop, setPosTop] = useState(0);
    const [posRight, setPosRight] = useState(0);

    const resizeHandler = () => {
        const rect = title?.current?.getBoundingClientRect();
        setPosTop(rect ? window.scrollY + rect?.top : 0);
        setPosRight(rect ? window.innerWidth - rect?.right : 0);
    }

    useEffect(() => {
        resizeHandler();
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return (
        <StyledDropdown
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