import { ContentWrapper } from "../../components/content/content.component";
import Card from "./components/card/card.component";
import './experience.css'
import Experience from '../../models/experience';

export default function ExperiencePage() {

    const exp1: Experience = {
        companyName: 'OV Loop',
        description: 'Backend developer description',
        end_at: 'Current',
        start_at: '02-02-2018',
        logo: 'ov.jpeg',
        positionRole: 'Backend developer '
    }

    const exp2: Experience = {
        companyName: 'La voz del interior',
        description: 'Fullstack developer',
        end_at: 'Current',
        start_at: '02-02-2018',
        logo: 'lvi.jpg',
        positionRole: 'Backend developer '
    }

    const exp3: Experience = {
        companyName: 'Webee',
        description: 'Fullstack developer',
        end_at: '02-02-2015',
        start_at: '02-02-2018',
        logo: 'webee.png',
        positionRole: 'Fullstack developer'
    }

    const exp4: Experience = {
        companyName: 'Elipsys',
        description: 'Android developer',
        end_at: 'Current',
        start_at: '02-02-2018',
        logo: 'ellipsys.jpeg',
        positionRole: 'Android developer'
    }

    const exp5: Experience = {
        companyName: 'Freelance',
        description: 'Web / Mobile developer',
        end_at: 'Current',
        start_at: '02-02-2018',
        logo: 'freelance.png',
        positionRole: 'Web developer'
    }


    const exp6: Experience = {
        companyName: 'Ellecktra',
        description: 'Web developer',
        end_at: 'Current',
        start_at: '02-02-2018',
        logo: 'ellecktra.png',
        positionRole: 'Web developer'
    }

    const exp7: Experience = {
        companyName: 'Oh!STUDIO',
        description: 'Android developer',
        end_at: 'Current',
        start_at: '02-02-2018',
        logo: 'ohstudio.png',
        positionRole: 'Fullstack Jr developer'
    }


    
    return (
        <div id="experience" className="page hide">
            <ContentWrapper>

                <div className="cards">
                    <Card data={exp1} />
                    <Card data={exp2} />
                    <Card data={exp3} />
                    <Card data={exp4} />
                    <Card data={exp5} />
                    <Card data={exp6} />
                    <Card data={exp7} />
                </div>

            </ContentWrapper>
        </div>
    )
}