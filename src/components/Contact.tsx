interface Props {
    text: string,
    link: string
}

export default function Contact({link, text}: Props) {
    return (
        <p><a href={link} target="_blank" className="hover:underline dark:text-gray-400 hover:text-gray-500 dark:hover:text-slate-50 text-slate-950">{text}</a></p>
    )
}