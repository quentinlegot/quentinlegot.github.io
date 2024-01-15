import { i18n } from "i18next";
import DropDown from "./DropDown";
import Language  from '../assets/images/language.svg?react'

interface Props {
    i18n: i18n,
    classes?: string
}

export default function TranslationSwitcher({ i18n, classes = "" }: Props) {

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang).then(() => {})
    }

    return (
        <DropDown classes={classes} icon={<Language />} buttons={[
            {
                name: "English",
                callback: () => {changeLanguage("en")},
                selected: i18n.language === "en"
            },
            {
                name: "Français",
                callback: () => {changeLanguage("fr")},
                selected: i18n.language === "fr"
            }
        ]} />

    )

}