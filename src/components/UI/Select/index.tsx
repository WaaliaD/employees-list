import React, {FC, useEffect, useRef, useState} from 'react';
import thumbnail from 'utils/images/selectThumbnail.svg'
import DropdownItem from './DropdownItem';
import styled from 'styled-components';
import Dropdown from './Dropdown';

interface SelectProps {
    options: { label: string, value: string }[];
    placeholder: string;
    handler: (value: string[]) => void;
    values: string[];
    backgroundColor: string;
    secondColor: string;
    isDesktop: boolean;
    isMultiply?: boolean;
}

const Container = styled.div`
    user-select: none;
`

const Title = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const StyledImg = styled.img<{ isOpen: boolean, isDesktop: boolean }>`
    width: ${props => props.isDesktop ? '16.66px' : '10px'};
    height: ${props => props.isDesktop ? '7.1px' : '5px'};
    margin-left: ${props => props.isDesktop ? '12px' : '8px'};
    rotate: ${props => props.isOpen ? '180deg' : '0deg'};
`

const Select: FC<SelectProps> = ({
        options,
        placeholder,
        handler,
        values,
        secondColor,
        backgroundColor,
        isDesktop,
        isMultiply = false,
    }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const wrapRef = useRef<HTMLDivElement>(null);

    function handleClock(event: MouseEvent) {
        if(!(wrapRef.current && wrapRef.current.contains(event.target as Node))) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClock);

        return () => document.removeEventListener('mousedown', handleClock);
    }, []);

    return (
        <Container ref={wrapRef}>
            <Title ref={ref} onClick={() => setIsOpen(prevState => !prevState)}>
                <span>{placeholder}</span>
                <StyledImg src={thumbnail} alt="^" isOpen={isOpen} isDesktop={isDesktop}/>
            </Title>
            <Dropdown
                isDesktop={isDesktop}
                title={ref}
                isOpen={isOpen}
                backgroundColor={backgroundColor}
            >
                {options.map(item =>
                    <DropdownItem
                        isMultiply={isMultiply}
                        key={item.value}
                        isDesktop={isDesktop}
                        handler={handler}
                        item={item}
                        values={values}
                        backgroundColor={backgroundColor}
                        secondColor={secondColor}
                    />
                )}
            </Dropdown>
        </Container>
    );
};

export default Select;