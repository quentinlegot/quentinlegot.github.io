import { useTranslation } from "react-i18next"
import Contact from "./Contact"


const titleClasses = "text-black dark:text-white text-base sm:text-lg md:text-2xl text-center mt-5"
const contentClasses = "text-black dark:text-white p-5 text-sm sm:text-base md:text-lg"

export default function Sidebar() {
    const { t, i18n } = useTranslation("common")
    i18n.loadNamespaces("common").then(() => {})

    return (
        <div id='sidebar' className='bg-gray-100 dark:bg-gray-800 basis-full sm:basis-1/5 2xl:basis-1/6 min-h-fit'>
          <h2 className={titleClasses}>{t('sidebar.title')}</h2>
          <div className={contentClasses}>
            <p className='pb-3'>{t('sidebar.p1')}</p>
            <p>{t('sidebar.p2')}</p>
          </div>
          <h2 className={titleClasses}>Contact</h2>
          <div className={contentClasses}>
              <Contact link="https://github.com/quentinlegot" text="Github"/>
              <Contact link="https://www.linkedin.com/in/quentin-legot/" text="Linkedin" />
              <Contact link="mailto:quentinlegot@gmail.com" text="Email" />
          </div>
        </div>
    )
}