import { useTranslation } from "react-i18next"


export default function Footer() {
    const { t, i18n } = useTranslation("common")
    i18n.loadNamespaces("common").then(() => {})
    
    return (
        <footer className='bg-slate-300 w-screen dark:bg-gray-900 text-black dark:text-white text-center p-4'>
          {t('footer.title')}
        </footer>
    )
}