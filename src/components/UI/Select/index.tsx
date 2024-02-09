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

const StyledImg = styled.img<{isOpen: boolean}>`
    width: 16.66px;
    height: 7.1px;
    margin-left: 12px;
    rotate: ${props => props.isOpen ? '180deg' : '0deg'};

    @media (max-width: 768px) {
        width: 10px;
        height: 5px;
        margin-left: 8px;
    }
`

const Select: FC<SelectProps> = ({
        options,
        placeholder,
        handler,
        values,
        secondColor,
        backgroundColor,
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
                <StyledImg src={thumbnail} alt="^" isOpen={isOpen}/>
            </Title>
            <Dropdown
                title={ref}
                isOpen={isOpen}
                backgroundColor={backgroundColor}
            >
                {options.map(item =>
                    <DropdownItem
                        isMultiply={isMultiply}
                        key={item.value}
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