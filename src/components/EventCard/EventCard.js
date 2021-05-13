import React from 'react';
import { Button } from '../../lib/style/generalStyles';
//import
import {
    EventCard as EventCardWrapper,
    Title,
    Content,
    Row,
    Item,
    ItemTitle,
    ItemValue
} from './EventCardStyle';

//structure EventCard
const EventCard = ({
    title,
    lokacija,
    datum,
    slobodnaMjesta,
    firma,
    buttonText,
    route
}) => {
    return (
        <EventCardWrapper>
            <Title>{title}</Title>
            <Content>
                <Row>
                    <Item>
                        <ItemTitle>Lokacija</ItemTitle>
                        <ItemValue>{lokacija}</ItemValue>
                    </Item>
                    <Item>
                        <ItemTitle>Datum i vrijeme</ItemTitle>
                        <ItemValue>{datum}</ItemValue>
                    </Item>
                </Row>
                <Row>
                    <Item>
                        <ItemTitle>Slobodna mjesta</ItemTitle>
                        <ItemValue>{slobodnaMjesta}</ItemValue>
                    </Item>
                    <Item>
                        <ItemTitle>Firma</ItemTitle>
                        <ItemValue>{firma}</ItemValue>
                    </Item>
                </Row>
            </Content>
            <Button to={route}>{buttonText}</Button>
        </EventCardWrapper>
    );
}

export default EventCard;