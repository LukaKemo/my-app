//route
import React from 'react';
import { Button } from '../../lib/style/generalStyles';

//import style components
import {
    Event as EventWrapper,
    Figure,
    Image,
    Title,
    Description
} from './EventStyle';

//main structure Event
const Event = ({
    image,
    title,
    description,
    route,
    imageAlt,
    buttonText
}) => {
    return (
        <EventWrapper>
            <Figure>
                <Image src={image} alt={imageAlt}/>
            </Figure>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Button to={route}>{buttonText}</Button>
        </EventWrapper>
    );
}

export default Event;