//scss
import './Events.scss';
import React, { useState, useEffect } from 'react';
import eventsMock from '../../lib/style/mock/events';
//Components
import Section from '../../components/Section/Section';
import { Grid } from '../../lib/style/generalStyles';
import EventCard from '../../components/EventCard/EventCard';

//structure Events Page
const Events = (props) => {
    const [events, setEvents] = useState(null);    
    
    useEffect(() => {
        setTimeout(() => {
          setEvents(eventsMock);
        }, 1000);
      }, [events]);

  return (
    <>
        <Section title="Events">
            {events &&
                <Grid columns={3}>
                    {events.map(event => event &&
                        <EventCard
                            title={event.title}
                            lokacija={event.location}
                            datum={event.dateTime}
                            firma={event.company}
                            route={`/event/${event.id}`}
                            buttonText="Find out more"
                        />
                        )
                    }
                </Grid>
            }
        </Section>
    </>
  );}

export default Events;