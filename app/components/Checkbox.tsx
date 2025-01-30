"use client"

import React, { useState } from 'react';
import { check } from './Icons';

type Props = {
    name: string;
    id: number;
};

export default function Checkbox({ name, id }: Props) {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label htmlFor={String(id)} className="checkbox cursor-pointer">
            <input
                type="checkbox"
                name={name}
                id={String(id)}
                className="hidden"
                checked={isChecked}
                onChange={handleChange}
            />
            <span className={`relative block w-5 h-5 rounded border border-solid ${isChecked ? 'border-[#FF2021]' : 'border-[#282B34]'}`}>
                {isChecked && <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' dangerouslySetInnerHTML={{ __html: check }}></span>}
            </span>
        </label>
    );
}
