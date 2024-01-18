interface Props {
    title?: JSX.Element,
    children: Array<JSX.Element>,
}


export default function List({ title, children }: Props) {
    
    return (
        <>
            {title}
            <ul className="list-disc pl-10">
                {children.map((child) => child)}
            </ul>
        </>
    )
}