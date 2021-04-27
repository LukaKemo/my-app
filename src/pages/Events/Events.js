//scss
import './Events.scss';

//Components
import Section from '../../components/Section/Section';
import { Grid } from '../../lib/style/generalStyles';
import EventCard from '../../components/EventCard/EventCard';

//structure Events Page
function App() {
  return (
    <>
        <Section title="Events">
        <Grid columns={3}>
          <EventCard 
                        title="UX/UI design workshop"
                        lokacija="Hodnik FOI-a"
                        datum="14.10. (9:00-16:00h)"
                        slobodnaMjesta="15/60"
                        firma="Speck"
                        buttonText="Find out more"
                    />
                    <EventCard
                        title="UX/UI design workshop"
                        lokacija="Hodnik FOI-a"
                        datum="14.10. (9:00-16:00h)"
                        slobodnaMjesta="15/60"
                        firma="Speck"
                        buttonText="Find out more"
                    />
                    <EventCard
                        title="UX/UI design workshop"
                        lokacija="Hodnik FOI-a"
                        datum="14.10. (9:00-16:00h)"
                        slobodnaMjesta="15/60"
                        firma="Speck"
                        buttonText="Find out more"
                    />
                    <EventCard
                        title="UX/UI design workshop"
                        lokacija="Hodnik FOI-a"
                        datum="14.10. (9:00-16:00h)"
                        slobodnaMjesta="15/60"
                        firma="Speck"
                        buttonText="Find out more"
                    />
                    <EventCard
                        title="UX/UI design workshop"
                        lokacija="Hodnik FOI-a"
                        datum="14.10. (9:00-16:00h)"
                        slobodnaMjesta="15/60"
                        firma="Speck"
                        buttonText="Find out more"
                    />
                    <EventCard
                        title="UX/UI design workshop"
                        lokacija="Hodnik FOI-a"
                        datum="14.10. (9:00-16:00h)"
                        slobodnaMjesta="15/60"
                        firma="Speck"
                        buttonText="Find out more"
                    />
                    <EventCard
                        title="UX/UI design workshop"
                        lokacija="Hodnik FOI-a"
                        datum="14.10. (9:00-16:00h)"
                        slobodnaMjesta="15/60"
                        firma="Speck"
                        buttonText="Find out more"
                    />
                    <EventCard
                        title="UX/UI design workshop"
                        lokacija="Hodnik FOI-a"
                        datum="14.10. (9:00-16:00h)"
                        slobodnaMjesta="15/60"
                        firma="Speck"
                        buttonText="Find out more"
                    />
                </Grid>
        </Section>
    </>
  );
}

export default App;