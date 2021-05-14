import React from 'react';
import Button from '../Button/Button';

//import
import {
    EventElement as EventElementWrapper,
    Title,
    EventElementInfo,
    Figure,
    Image,
    Content,
    Row,
    Item,
    ItemTitle,
    ItemValue,
    Description
} from './EventElementStyle';

//structure EventElement
const EventElement = ({
    imageUrl,
    title,
    lokacija,
    datum,
    slobodnaMjesta,
    firma,
    buttonText,
    imageAlt,
    route
}) => {
    return (
        <EventElementWrapper>
            <Title>{title}</Title>
            <EventElementInfo>
                <Figure>
                    <Image src={imageUrl} alt={imageAlt} />
                </Figure>
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
                    <Row>
                    <Button text={buttonText} route={route} />
                    </Row>
                </Content>
            </EventElementInfo>
            <Description>
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
            </Description>
        </EventElementWrapper>
    );
}

export default EventElement;
