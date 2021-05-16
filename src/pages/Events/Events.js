//scss
import './Events.scss';
import React, { useState, useEffect } from 'react';
import eventsMock from '../../lib/style/mock/events';
//Components
import Section from '../../components/Section/Section';
import { Grid } from '../../lib/style/generalStyles';
import EventCard from '../../components/EventCard/EventCard';
import SearchBar from '../../components/SearchBar/SearchBar';

//structure Events Page
const Events = (props) => {
    const [events, setEvents] = useState(null);    
    const [searchTerm, setSearchTerm] = useState(null);
    const searchHandler = value => {const searchResult = searchTerm.filter(event => event.title.toLowerCase().includes(value.toLowerCase()));
    setEvents(searchResult);
    }

    useEffect(() => {
      setSearchTerm(eventsMock)
        setTimeout(() => {
          setEvents(eventsMock);
        }, 3000);
      }, [events]);

  return (
    <>
        <Section title="Events">
            <SearchBar
                placeholder='Search events by title...'
                disabled={events ? false : true}
                onValueChange={searchHandler}
            />
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