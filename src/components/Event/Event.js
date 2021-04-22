import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import './Event.scss';

const links = {
    event: 'Find out more',
}
const Event = ({
    image,
    title,
    description,
    buttonText
}) => {
    return (
        <div className="Event">
            <figure className="Event-Figure">
                <img src={image} alt="Design" className="Event-Image"/>
            </figure>
            <h3 className="Event-Title">{title}</h3>
            <p className="Event-Description">{description}</p>
            <Link text={buttonText} className="Button" to="/event">{links.event}</Link>
        </div>
    );
}

export default Event;