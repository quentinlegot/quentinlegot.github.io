import { useEffect, useState } from "react"
import Light from "../../assets/images/light.svg?react"
import Dark from "../../assets/images/dark.svg?react"
import Auto from '../../assets/images/auto.svg?react'
import { Tooltip } from 'react-tooltip'
import { useTranslation } from "react-i18next"

export default function LightModeSwitcher() {

    const [darkMode, setDarkMode] = useState(2)

    const { t, i18n } = useTranslation("common")
    i18n.loadNamespaces("common").then(() => {})

    const changeMode = () => {
        switch(darkMode) {
            case 0:
                setDarkMode(1)
                break;
            case 1:
                setDarkMode(2)
                break;
            case 2: 
            default:
                setDarkMode(0)
                break;
        }
    }

    useEffect(() => {
        if (localStorage.theme === 'dark') {
            setDarkMode(1)
             // document.documentElement.classList.add('dark')
        } else if(!('theme' in localStorage)) {
            setDarkMode(2)
            // auto
            
        } else {
            setDarkMode(0)
            localStorage.theme = 'light'
            // document.documentElement.classList.remove('dark')
        }
    }, [])

    useEffect(() => {
        switch(darkMode) {
            case 0:
                document.documentElement.classList.remove('dark')
                localStorage.theme = 'light'
                break;
            case 1:
                document.documentElement.classList.add('dark')
                localStorage.theme = 'dark'
                break;
            case 2: 
            default:
                if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
                
                localStorage.removeItem('theme')
                break;
        }
    }, [darkMode])

    return (
        <div className="relative inline-block">
            <button data-tooltip-id="darkmode-tooltip" type="button" className="inline-flex w-fit justify-center rounded-md bg-slate-150 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-slate-200 active:bg-slate-300" onClick={changeMode}>
                {darkMode === 0 ? <Light /> : darkMode === 1 ? <Dark /> : <Auto />}
                
            </button>
            <Tooltip className="z-20" id="darkmode-tooltip" place="bottom" content={darkMode === 0 ? t('darkmode.light') : darkMode === 1 ? t('darkmode.dark') : t('darkmode.auto')}></Tooltip>
        </div>
    )

}