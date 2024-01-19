import { useTranslation } from "react-i18next"


export default function Footer() {
    const { t, i18n } = useTranslation("common")
    i18n.loadNamespaces("common").then(() => {})
    
    return (
        <footer className='bg-slate-300 w-screen dark:bg-gray-900 text-black dark:text-white text-center p-4'>
          <p>{t('footer.title')}</p>
          <p><a className="hover:underline dark:text-gray-400 hover:text-gray-500 dark:hover:text-slate-50 text-slate-950" href="https://github.com/quentinlegot/quentinlegot.github.io" target="_blank">{t('footer.subtitle')}</a></p>
        </footer>
    )
}