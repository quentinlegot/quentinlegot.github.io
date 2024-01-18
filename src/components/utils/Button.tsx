import React from "react"

interface Props {
    text?: string,
    icon?: React.ReactElement,
    callback?: () => void,
    selected?: boolean,
}

export default function Button({ text = "", icon = <></>, callback, selected=false}: Props) {
    
    return (
        <a href="#" onClick={callback} className={`text-gray-800 block px-4 py-2 text-sm hover:bg-zinc-200 hover:cursor-pointer active:bg-zinc-300 active:text-gray-900 ${selected ? "bg-stone-300" : ""}`}>
            <span>{text}</span>
            {React.cloneElement(icon, { className: `relative h-full w-full fill-dark disabled:text-light-700`})}
        </a>
    )
}