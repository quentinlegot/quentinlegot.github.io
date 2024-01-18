interface Props {
    name: string
}


export default function ListElement({ name }: Props) {

    return (
        <li>{name}</li>
    )
}