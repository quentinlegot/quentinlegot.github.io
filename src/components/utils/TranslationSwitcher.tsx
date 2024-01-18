import DropDown from "./DropDown";
import Language  from '../../assets/images/language.svg?react'
import { useTranslation } from "react-i18next";

interface Props {
    classes?: string
}

export default function TranslationSwitcher({classes = "" }: Props) {

    const { i18n } = useTranslation()

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