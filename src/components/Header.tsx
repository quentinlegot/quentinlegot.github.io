import { useTranslation } from "react-i18next"
import TranslationSwitcher from "./utils/TranslationSwitcher"
import LightModeSwitcher from "./utils/LightModeSwitcher"


export default function Header() {
    const { t, i18n } = useTranslation("common")
    i18n.loadNamespaces("common").then(() => {})

    return (
    <header className='w-full bg-gradient-to-tr from-purple-500 to-pink-500 h-40 sm:h-40 md:h-64 lg:text-h72 xl:text-h80 flex flex-col justify-center items-center'>
        <div className="!fixed top-2 left-2 *:mr-2" >
            <TranslationSwitcher />
            <LightModeSwitcher />
        </div>
        <h1 className='text-white text-4xl xl:text-8xl lg:text-7xl md:text-5xl sm:text-3xl'>{t('header.title')}</h1>
    </header>
    )
}