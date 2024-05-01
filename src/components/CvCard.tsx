import { useTranslation } from "react-i18next"

interface Props {
    title: string,
    icon?: string,
    company: string,
    type: string,
    date_start: Date,
    /**
     * Null if present
     */
    date_end?: Date,
    description?: React.ReactElement
}

export default function CvCard({ title, icon = "", company, type, date_start, date_end, description=undefined}: Props) {

    const { t, i18n } = useTranslation("common")
    i18n.loadNamespaces("common").then(() => {})
    

    return (
        <div className="flex flex-row space-x-4 my-6">
            <div className="min-w-24"><img src={icon} /></div>
            <div>
                <h3>{title}</h3>
                <div><span>{company}</span> {type !== "" ? (<>· <span>{type}</span></>) : (<></>)}</div>
                <div>{t(`month.${date_start.getMonth()}`)} {date_start.getFullYear()} - {date_end === undefined ? t(`date_present`) : `${t(`month.${date_end?.getMonth()}`)} ${date_end?.getFullYear()}`}</div>
                {description !== undefined ? <><div>{description}</div></> : <></> }
            </div>
            
        </div>
    )
}