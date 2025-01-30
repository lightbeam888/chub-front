import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

type Props = {};
type Option = string;

export default function Dropdown({ }: Props) {
    const [dropdown, setDropdown] = useState(false);
    const dropdowns: Option[] = ['option 1', 'option 2', 'option 3'];

    const [selectGen, setSelectGen] = useState<Option>(dropdowns[0]);

    const changeDropdown = (selected: Option): void => {
        setSelectGen(selected);
        setDropdown(false);
    };

    return (
        <div className="relative z-10">
            <button className="btn min-w-[102px] flex0auto flex justify-center items-center gap-2 rounded-lg text-[14px] font-lufga font-medium text-[#FFF] leading-[160.714%] p-[11px_12px]" type="button" onClick={() => setDropdown(!dropdown)}>
                <span>{selectGen}</span>
                {!dropdown ? <FaAngleDown /> : <FaAngleUp />}
            </button>
            {dropdown && (
                <ul className="absolute w-full mt-1 bg-[#1E1E1E] rounded-md shadow-lg z-20 border border-[#115A13]">
                    {dropdowns.map((item, index) => (
                        <li key={index} className="px-4 py-2 text-[] hover:bg-[#1B1D22] cursor-pointer" onClick={() => changeDropdown(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
