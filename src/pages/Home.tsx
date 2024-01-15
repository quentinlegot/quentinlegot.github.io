import CvTitle from "../components/Cvtitle";
import OB_company from "../assets/images/OB_company.jpg"
import greyc_company from "../assets/images/greyc_company.jpg"
import rennes_univ from "../assets/images/rennesuniv_formation.jpg"
import caen_univ from "../assets/images/univcaen_formation.jpg"
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Home() {
    const { t, i18n } = useTranslation("home")
    i18n.loadNamespaces("home").then(() => {})


    useEffect(() => {
        document.title = t('title')
    }, [t])

    return (
    <div>
        <CvTitle name={t('cv.section.experience')} cards={[
            {title: t('cv.experience.0.title'), icon: OB_company, company: "Orange Business", date_start: new Date('1 May 2023'), date_end: new Date("31 august 2023"), type: t('cv.experience.0.type'), description:(<p>{t('cv.experience.0.description')}</p>)},
            {title: t('cv.experience.1.title'), icon: greyc_company, company: "Grec", date_start: new Date('1 May 2022'), date_end: new Date('31 june 2022'), type: t('cv.experience.1.type'), description: <p>{t('cv.experience.1.description')}</p>}
        ]} />
        <CvTitle name={t('cv.section.formation')} cards={[
            { title: t('cv.formation.0.title'), icon: rennes_univ, company: "Université de Rennes", date_start: new Date('1 september 2022'), date_end: new Date('31 August 2024'), description: <p>{t('cv.formation.0.description')}</p>},
            { title: t("cv.formation.0.title"), icon: caen_univ, company: "Univerisité de Caen Normandie", date_start: new Date("1 september 2019"), date_end: new Date("31 june 2022")}
        ]} />
    </div>
    )
}