import CvTitle from "../components/CvTitle";
import OB_company from "../assets/images/company/OB_company.jpg"
import greyc_company from "../assets/images/company/greyc_company.jpg"
import rennes_univ from "../assets/images/company/rennesuniv_formation.jpg"
import caen_univ from "../assets/images/company/univcaen_formation.jpg"
import { useTranslation } from "react-i18next";
import { Key, useEffect } from "react";
import Project from "../components/Project";
import CardList from "../components/utils/CardList";
import Card from "../components/utils/Card";

export default function Home() {
    const { t, i18n } = useTranslation("home")
    i18n.loadNamespaces("home").then(() => {})

    const gradient = [
        "bg-gradient-to-r from-cyan-500 to-blue-500",
        "bg-gradient-to-r from-sky-500 to-indigo-500",
        "bg-gradient-to-r from-violet-500 to-fuchsia-500",
        "bg-gradient-to-r from-purple-500 to-pink-500"
    ];

    useEffect(() => {
        document.title = t('title')
    }, [t])

    return (
    <div>
        <CvTitle name={t('cv.section.experience')} cards={[
            {title: t('cv.experience.0.title'), icon: OB_company, company: "Orange Business", date_start: new Date('16 September 2024'), type: t('cv.experience.0.type'), description:(<p>{t('cv.experience.0.description')}</p>)},
            {title: t('cv.experience.1.title'), icon: OB_company, company: "Orange Business", date_start: new Date('4 March 2024'), date_end: new Date("31 august 2024"), type: t('cv.experience.1.type'), description:(<p>{t('cv.experience.1.description')}</p>)},
            {title: t('cv.experience.2.title'), icon: OB_company, company: "Orange Business", date_start: new Date('1 May 2023'), date_end: new Date("31 august 2023"), type: t('cv.experience.2.type'), description: <p>{t('cv.experience.2.description')}</p>},
            {title: t('cv.experience.3.title'), icon: greyc_company, company: "Greyc", date_start: new Date('1 May 2022'), date_end: new Date('31 june 2022'), type: t('cv.experience.3.type'), description: <p>{t('cv.experience.3.description')}</p>}
        ]} />
        <CvTitle name={t('cv.section.formation')} cards={[
            { title: t('cv.formation.0.title'), icon: rennes_univ, company: "Université de Rennes", date_start: new Date('1 september 2022'), date_end: new Date('31 August 2024'), description: <p>{t('cv.formation.0.description')}</p>},
            { title: t("cv.formation.1.title"), icon: caen_univ, company: "Université de Caen Normandie", date_start: new Date("1 september 2019"), date_end: new Date("31 june 2022")}
        ]} />
        <CvTitle name={t('cv.section.skills')} cards={[]}/>

        <CardList cards={(t("cv.skills", {returnObjects: true}) as Array<object>).map((_value: object, key: number) => (
            <Card key={key} title={t(`cv.skills.${key}.title`)} content={t(`cv.skills.${key}.content`)} gradient={gradient[key % 4]} />
        ))} />
        
        <CvTitle name={t('cv.section.project')} cards={[]} />
        <div className="flex flex-col auto-cols-fr mx-auto justify-center w-11/12 max-w-screen-2xl">
        {(t("cv.projects", {returnObjects: true}) as Array<object>).map((_value: object, key: Key) => (
            <Project key={key} name={t(`cv.projects.${key}.name`)} languages={t(`cv.projects.${key}.languages`)} link={t(`cv.projects.${key}.link`)} year={Number(t(`cv.projects.${key}.year`))} description={t(`cv.projects.${key}.description`, {returnObjects: true})} />
        ))}
        </div>
        
            
    </div>
    )
}