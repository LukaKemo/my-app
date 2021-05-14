import React, { useState, useEffect } from 'react';
import eventsMock from '../../lib/style/mock/events';
//scss
import './Event.scss';
//Components
import EventElement from '../../components/EventElement/EventElement';
import Section from '../../components/Section/Section';

const Event = (props) => {
  const routeEventId = parseInt(props.match.params.id);
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState(null);
  
  useEffect(() => {
    setEvents(eventsMock);
  }, []);

  useEffect(() => {
    events && setEvent(...events.filter(event => event.id === routeEventId));
    }, [events, routeEventId]);

    return (
      <>
        {event && 
          <>
          <Section title={event.title}>
            <EventElement
              imageUrl={event.imageUrl}
              lokacija={event.location}
              datum={event.dateTime}
              slobodnaMjesta={event.availability}
              firma={event.company}
              buttonText="Prijavi se"
              description={event.description}
              route="/event"
              hasButton={true}
            />
          </Section>
        </>}
      </>
  )
}

export default Event;