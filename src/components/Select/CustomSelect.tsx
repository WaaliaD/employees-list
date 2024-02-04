import React, {FC} from 'react';
import {Select} from 'antd';

interface CustomSelectProps {
    value: string[],
    width: number
    placeholder: string,
    onChange: (value: string[]) => void,
    options: {label: string, value: string}[],
}

const CustomSelect: FC<CustomSelectProps> = ({value, width, placeholder, onChange, options}) => {
    return (
        <Select
            value={value}
            maxTagCount={0}
            mode='multiple'
            allowClear
            style={{width: `${width}px`}}
            placeholder={placeholder}
            onChange={value => onChange(value)}
            options={options}
        />
    );
};

export default CustomSelect;