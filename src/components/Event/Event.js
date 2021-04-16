import React from 'react';
import Button from '../Button/Button';
import './Event.scss';

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
            <Button text={buttonText}/>
        </div>
    );
}

export default Event;