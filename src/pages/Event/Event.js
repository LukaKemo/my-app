import React, { useState, useEffect } from 'react';
import eventsMock from '../../lib/style/mock/events';
//scss
import './Event.scss';
//Components
import EventElement from '../../components/EventElement/EventElement';
import Title from '../../components/EventElement/EventElement';
import { Description, EventElementInfo } from '../../components/EventElement/EventElementStyle';
import Section from '../../components/Section/Section';
import { Content } from '../../components/Event/EventStyle';
import Figure from '../../components/EventElement/EventElement';
import Image from '../../components/EventElement/EventElement';

const Event = (props) => {
  const routeEventId = parseInt(props.match.params.id);
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState(null);
  
  useEffect(() => {
    setEvents(eventsMock);
  }, [event]);

  useEffect(() => {
    events && setEvent(...events.filter(event = event.id === routeEventId));
    }, [routeEventId]);

    return (
      <>
        {event && 
          <>
          <Title>{event && event.title}</Title>
          <Section withoutTopPadding={true}>
            <Figure>
              <Image src={event.ImageUrl} alt={event.imageAlt} />
            </Figure>
              <EventElement
                lokacija={event.location}
                datum={event.dateTime}
                slobodnaMjesta={event.availability}
                firma={event.company}
                buttonText="Prijavi se"
                description={event.description}
              />
          </Section>
        </>}
      </>
    )
}

export default Event;