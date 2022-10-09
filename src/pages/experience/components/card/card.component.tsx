import { useEffect } from 'react'
import './card.css'
import Experience from '../../../../models/experience';

interface CardProps {
    data: Experience;
}

export default function Card({ data }: CardProps) {

    return (
        <div className="scene scene--card">
            <div className="card" onClick={(ev) => { ev.currentTarget.classList.toggle('is-flipped') }}>
                <div className="card__face card__face--front"><img src={`./src/assets/images/${data.logo}`} /></div>
                <div className="card__face card__face--back">
                    <div className='card_content'>
                        <h2 className='companyName'>{data.companyName}</h2><br />
                        <span className='rol'>{data.positionRole}</span><br />
                        <span className='date'>{data.start_at} - {data.end_at}</span><br />
                        <p className='description'>{data.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}