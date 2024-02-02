import { useTranslation } from "react-i18next"

interface Props {
    name: string,
    languages: string,
    year: number,
    link: string,
    description: Array<string>
}

export default function Project({ name, languages, year, link, description }: Props) {

    const { t, i18n } = useTranslation("common")
    i18n.loadNamespaces("common").then(() => {})

    return (
        <div>
            <div><h3 className="inline-block text-xl">{name}</h3> | <span>{languages}</span></div>
            <div className="text-sm">{year}</div>
            <div>{t('link_repo')} <a href={link} rel="noopener noreferrer" className="hover:underline dark:text-gray-400 hover:text-gray-500 dark:hover:text-slate-50 text-slate-950" target="_blank">{link}</a></div>
            <ul className="pl-10 py-3">
                {description.map((paragraph, key) => {
                    return <li key={key} className="list-disc">{paragraph}</li>
                })}
            </ul>
        </div>
    )

}