import { useTranslation } from "react-i18next"
import TranslationSwitcher from "./TranslationSwitcher"


export default function Header() {
    const { t, i18n } = useTranslation("common")
    i18n.loadNamespaces("common").then(() => {})

    return (
    <header className='w-full bg-gradient-to-tr from-purple-500 to-pink-500 h-40 sm:h-40 md:h-64 lg:text-h72 xl:text-h80 flex flex-col justify-center items-center'>
        <TranslationSwitcher i18n={i18n} classes="!absolute top-2 left-2" />
        <h1 className='text-white text-4xl xl:text-8xl lg:text-7xl md:text-5xl sm:text-3xl'>{t('header.title')}</h1>
    </header>
    )
}