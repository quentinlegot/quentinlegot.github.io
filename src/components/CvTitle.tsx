import CvCard from "./CvCard"

interface Props {
    name: string,
    cards: Array<{ title: string, icon?: string, company: string, type?: string, date_start: Date, date_end: Date, description?: React.ReactElement}>
}

export default function CvTitle({ name, cards } : Props) {
    return (
        <div>
            <h2 className="text-2xl mb-4 mt-6">{name}</h2>
            {cards.map(({title, icon = "", company, type = "", date_start, date_end, description=undefined}, key) => (
                <CvCard title={title} icon={icon} company={company} date_start={date_start} date_end={date_end} type={type} description={description} key={key} />
            ))}
        </div>
    )
}
