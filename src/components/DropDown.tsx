import { useState } from "react"
import Button from "./Button"

interface Props {
    icon?: React.ReactElement,
    text?: string,
    buttons: Array<{name: string, callback?: () => void, selected?: boolean}>,
    classes?: string,
}

export default function DropDown({ icon=<></>, text = "", buttons, classes = ""} : Props) {

    const [ open, setOpen ] = useState(false)

    return (
        <div className={`relative inline-block ${classes}`}>
                <button type="button" className="inline-flex w-fit justify-center rounded-md bg-slate-150 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-slate-200 active:bg-slate-300" onClick={() => setOpen(!open)} aria-expanded="true">
                    {icon}
                    <span className="">{text}</span>
                </button>
            <div className={`transition-all ease-out duration-250 absolute left-0 right-0 z-10 mt-2 w-fit overflow-hidden rounded-md bg-slate-50 ring-black ring-opacity-5 focus:outline-none shadow-lg ${open ? "h-fit py-2 ring-1" : "h-0 py-0 ring-0"}`}>
                {buttons.map(({name, callback, selected = false}) => (
                        <Button 
                        callback={callback}
                        text={name}
                        selected={selected}
                        />
                    ))}
            </div>
        </div>
    )
}