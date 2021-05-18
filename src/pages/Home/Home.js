import React, { useState, useEffect } from 'react';
import eventsMock from '../../lib/style/mock/events';
import { 
  colors
} from '../../lib/style/theme';

//scss
import './Home.scss';
//Components
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import { Grid } from '../../lib/style/generalStyles';
import Event from '../../components/Event/Event';
import Loading from '../../components/Loader/Loader';
//structure Home Page
const Home = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEvents(eventsMock);
    }, 1000);
  }, [events]);

  return (
    <>
      <Hero />                
        <Section title="Featured events">
        <Loading />
          {events &&
            <Grid columns={3}>
              {events.map(event => event.isFeatured &&
                <Event
                  key={event.id}
                  buttonText="Find out more"
                  image={event.imageUrl}
                  route={`/event/${event.id}`}
                  title={event.title}
                  description={event.shortDescription}
                  imgAlt={event.imageAlt}
                />
                )
              }
            </Grid>
          }
        </Section>
    </>
  )
};

export default Home;
