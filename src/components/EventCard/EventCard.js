import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import './EventCard.scss';

const links = {
    event: 'Find out more',
}

const EventCard = ({
    title,
    lokacija,
    datum,
    slobodnaMjesta,
    firma,
    buttonText
}) => {
    return (
        <div className="EventCard">
            <h2 className="EventCard-Title">{title}</h2>
            <div className="EventCard-Content">
                <div className="EventCard-Content-Row">
                    <div className="EventCard-Item">
                        <h3 className="EventCard-ItemTitle">Lokacija</h3>
                        <p className="EventCard-ItemValue">{lokacija}</p>
                    </div>
                    <div className="EventCard-Item">
                        <h3 className="EventCard-ItemTitle">Datum i vrijeme</h3>
                        <p className="EventCard-ItemValue">{datum}</p>
                    </div>
                </div>
                <div className="EventCard-Content-Row">
                    <div className="EventCard-Item">
                        <h3 className="EventCard-ItemTitle">Slobodna mjesta</h3>
                        <p className="EventCard-ItemValue">{slobodnaMjesta}</p>
                    </div>
                    <div className="EventCard-Item">
                        <h3 className="EventCard-ItemTitle">Firma</h3>
                        <p className="EventCard-ItemValue">{firma}</p>
                    </div>
                </div>
            </div>
            <Link text={buttonText} className="Button" to="/event">{links.event}</Link>
        </div>
    );
}

export default EventCard;