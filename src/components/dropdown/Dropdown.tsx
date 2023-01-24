import React, {useRef} from "react";
import {
    DetailedHTMLProps,
    forwardRef,
    HTMLAttributes,
    useState,
} from "react";
import {Button} from "../button";
import {useOnClickOutside} from "../../utils/useOnClickOutside";

export interface optionList {
    optionName: string;
    handler?: () => void;
    imageUrl: string;
}

export type DropdownProps = {
    dropdownLabel: string;
    className?: string;
    contentList: optionList[];
    rounded?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;


export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
    ({ dropdownLabel, contentList, className = "", rounded = false }) => {
        const [open, setOpen] = useState<boolean>(false);
        const topRounding = rounded ? "rounded-t-md" : "";

        const ref = useRef<HTMLDivElement>(null);

        useOnClickOutside(ref, () => {
            setOpen(false);
        });

        return (
            <div
                className={`${topRounding} ${className} text-white relative inline-block`}
                ref={ref}
            >
                <Button
                    name={"buttonConnect"}
                    className="
         w-full md:py-2 md:text-sm"
                    variant="custom"
                    scale="lg"
                    isDisabled={false}
                    onClick={()=>setOpen((prev) => !prev)}
                    customButtonClass={"bg-black-800 text-light-high"}
                >
                    {dropdownLabel}
                </Button>
                <div
                    className={`absolute opacity-0 px-4 py-3 transition-opacity transform ease duration-200 bg-dropDown left-0 right-0 ${
                        open ? "visible translate-y-0 opacity-100" : "invisible"
                    } text-light-high rounded-md`}
                >
                    {contentList.map((item: any, index: number) => (
                        <div key={index}>
                            <div
                                className="px-4 py-2 flex items-center md:py-3"
                                onClick={item.handler}
                            >
                                {item.imageUrl ? (
                                    <img
                                        src={item.imageUrl}
                                        alt={"logo"}
                                        className="w-[20px] h-[20px]"
                                    />
                                ) : null}
                                <span className="ml-4 text-light-high text-sm font-medium leading-normal md:text-xsm md:ml-2">
                                    {item.optionName}
                                </span>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        );
    }
);
