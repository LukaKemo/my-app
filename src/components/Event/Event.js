//scss
import './Event.scss';
import '../Button/Button';
//route
import React from 'react';
import { Link } from 'react-router-dom';

//linkovi
const links = {
    event: 'Find out more',
}

//main structure Event
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