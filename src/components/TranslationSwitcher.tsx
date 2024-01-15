import { i18n } from "i18next";


interface Props {
    i18n: i18n
}

export default function TranslationSwitcher({ i18n }: Props) {

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang).then(() => {})
    }

    return (
        <div>
            <span onClick={() => changeLanguage("en")}>English</span> <span onClick={() => changeLanguage("fr")}>French</span>
        </div>
    )

}