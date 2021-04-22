import EventElement from '../../components/EventElement/EventElement';
import ImageDesign from '../../assets/images/design.jpg'
import './Event.scss';

function App() {
    return (
      <>
        <EventElement 
                        image={ImageDesign}
                        title="UX/UI design workshop"
                        lokacija="Hodnik FOI-a"
                        datum="14.10. (9:00-16:00h)"
                        slobodnaMjesta="15/60"
                        firma="Speck"
                        buttonText="Prijavi se"
                    />  
      </>
    );
  }
  
  export default App;