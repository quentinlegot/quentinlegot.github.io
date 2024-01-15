import { useTranslation } from "react-i18next"

export default function Sidebar() {
    const { t, i18n } = useTranslation("home")
    i18n.loadNamespaces("home").then(() => {})

    return (
        <div id='sidebar' className='bg-gray-100 dark:bg-gray-800 basis-1/5 2xl:basis-1/6 min-h-fit'>
          <h2 className='text-black dark:text-white text-base sm:text-lg md:text-xl xl:text-2xl text-center mt-5'>{t('sidebar.title')}</h2>
          <div className='text-black dark:text-white p-5 text-sm sm:text-base md:text-lg xl:text-xl'>
            <p className='pb-3'>{t('sidebar.p1')}</p>
            <p>{t('sidebar.p2')}</p>
          </div>
        </div>
    )
}