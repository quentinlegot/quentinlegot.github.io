

interface Props {
    cards: Array<JSX.Element>,
}

export default function CardList({cards}: Props) {

    return <div className="flex flex-row justify-center flex-wrap auto-cols-fr mx-auto w-11/12 max-w-screen-2xl">
        {cards.map(child => child)}
    </div>

}