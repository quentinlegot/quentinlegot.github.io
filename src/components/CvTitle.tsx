import CvCard from "./CvCard"

interface Props {
    name: string,
    cards: Array<{ title: string, icon?: string, company: string, type?: string, date_start: Date, date_end?: Date, description?: React.ReactElement}>
}

export default function CvTitle({ name, cards } : Props) {
    return (
        <div className="flex flex-col auto-cols-fr mx-auto justify-center w-11/12 max-w-screen-2xl">
            <h2 className="text-3xl md:text-3xl font-bold mb-4 mt-6">{name}</h2>
            {cards.map(({title, icon = "", company, type = "", date_start, date_end, description=undefined}, key) => (
                <CvCard title={title} icon={icon} company={company} date_start={date_start} date_end={date_end} type={type} description={description} key={key} />
            ))}
        </div>
    )
}
