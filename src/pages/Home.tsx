import CvTitle from "../components/CvTitle";
import OB_company from "../assets/images/company/OB_company.jpg"
import greyc_company from "../assets/images/company/greyc_company.jpg"
import rennes_univ from "../assets/images/company/rennesuniv_formation.jpg"
import caen_univ from "../assets/images/company/univcaen_formation.jpg"
import { useTranslation } from "react-i18next";
import { Key, useEffect } from "react";
import List from "../components/utils/List";
import ListElement from "../components/utils/ListElement";
import Project from "../components/Project";

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
            {title: t('cv.experience.1.title'), icon: greyc_company, company: "Greyc", date_start: new Date('1 May 2022'), date_end: new Date('31 june 2022'), type: t('cv.experience.1.type'), description: <p>{t('cv.experience.1.description')}</p>}
        ]} />
        <CvTitle name={t('cv.section.formation')} cards={[
            { title: t('cv.formation.0.title'), icon: rennes_univ, company: "Université de Rennes", date_start: new Date('1 september 2022'), date_end: new Date('31 August 2024'), description: <p>{t('cv.formation.0.description')}</p>},
            { title: t("cv.formation.1.title"), icon: caen_univ, company: "Univerisité de Caen Normandie", date_start: new Date("1 september 2019"), date_end: new Date("31 june 2022")}
        ]} />
        <CvTitle name={t('cv.section.skills')} cards={[]}/>
        <List children={[...Array(3)].map((_x, i) => 
            <List 
                title={<ListElement name={t(`cv.skills.${i}.title`)} />} 
                key={i} 
                children={[...Array((t(`cv.skills.${i}.children`, {returnObjects: true}) as Array<string>).length)].map((_x, j) => <ListElement key={3 + 1 + i + j} name={t(`cv.skills.${i}.children.${j}`)} />)} />
        )} />
        <CvTitle name={t('cv.section.project')} cards={[]} />
        {(t("cv.projects", {returnObjects: true}) as Array<object>).map((_value: object, key: Key) => (
            <Project key={key} name={t(`cv.projects.${key}.name`)} languages={t(`cv.projects.${key}.languages`)} link={t(`cv.projects.${key}.link`)} year={Number(t(`cv.projects.${key}.year`))} description={t(`cv.projects.${key}.description`, {returnObjects: true})} />
        ))}
            
    </div>
    )
}