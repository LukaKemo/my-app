//route
import React from 'react';
import { ButtonRegular } from '../../lib/style/generalStyles';

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
            <ButtonRegular to={route}>{buttonText}</ButtonRegular>
        </EventWrapper>
    );
}

export default Event;