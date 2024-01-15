
interface Props {
    content: React.ReactElement
}

export default function MainContent({ content } : Props) {
    return (
        <main className='basis-4/5 2xl:basis-5/6 text-black dark:text-white'>{content}</main>
    )
}