interface Props {
    title: string,
    content: string,
    gradient: string
}

export default function Card({title, content, gradient}: Props) {

    

    return (
        <div className={"basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 p-0.5 m-2 md:m-3 xl:m-4 rounded-md flex flex-col font-card " + gradient}>
            <div className="bg-black p-2 h-full md:p-3 xl:p-4 rounded-md">
                <div className="text-lg font-bold p-1">{title}</div>
                <div>{content}</div>
            </div>
        </div>
    )

}