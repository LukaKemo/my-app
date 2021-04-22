import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import './EventElement.scss';

const links = {
    event: 'Prijavi se',
}

const EventElement = ({
    image,
    title,
    lokacija,
    datum,
    slobodnaMjesta,
    firma,
    buttonText
}) => {
    return (
        <div className="EventElement">
            <h2 className="EventElement-Title">{title}</h2>
            <div className="EventElement-Info">
                <figure className="EventElement-Info-Figure">
                    <img src={image} alt="UX/UI workshop" className="EventElement-Info-Figure-Image"></img>
                </figure>
                <div className="EventElement-Info-Content">
                    <div className="EventElement-Info-Content-Row">
                        <div className="EventElement-Info-Item">
                            <h3 className="EventElement-Info-ItemTitle">Lokacija</h3>
                            <p className="EventElement-Info-ItemValue">{lokacija}</p>
                        </div>
                        <div className="EventElement-Info-Item">
                            <h3 className="EventElement-Info-ItemTitle">Datum i vrijeme</h3>
                            <p className="EventElement-Info-ItemValue">{datum}</p>
                        </div>
                    </div>
                    <div className="EventElement-Info-Content-Row">
                        <div className="EventElement-Info-Item">
                            <h3 className="EventElement-Info-ItemTitle">Slobodna mjesta</h3>
                            <p className="EventElement-Info-ItemValue">{slobodnaMjesta}</p>
                        </div>
                        <div className="EventElement-Info-Item">
                            <h3 className="EventElement-Info-ItemTitle">Firma</h3>
                            <p className="EventElement-Info-ItemValue">{firma}</p>
                        </div>
                    </div>
                    <div className="EventElement-Info-Content-Row">
                    <Link text={buttonText} className="Button" to="/event">{links.event}</Link>
                    </div>
                </div>
            </div>
            <div className="EventElement-Description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, ex sit amet semper
                elementum, libero nisl condimentum dolor, a dictum risus lectus quis justo. Quisque consequat ut
                lorem vitae commodo. Nunc dictum quam dui, auctor fermentum libero viverra consequat. Pellentesque
                luctus posuere lacus non suscipit. Praesent scelerisque auctor lorem, vitae ultricies ligula
                imperdiet sed. Aliquam eu fringilla elit.
                Pellentesque semper eros at mattis ornare. Ut finibus venenatis turpis id ullamcorper. Donec sit
                amet magna faucibus, posuere lorem in, sollicitudin turpis. Duis pellentesque quam quam, eu tempus
                tortor pretium in. Sed efficitur pellentesque ante, eget semper purus interdum ac. Integer lacinia,
                velit dapibus congue consectetur, nisi justo consectetur felis, sit amet placerat lacus libero in
                dui. Quisque quis nisi felis.
            </div>
        </div>
    );
}

export default EventElement;
