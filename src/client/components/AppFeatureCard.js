import React, {useEffect, useState} from 'react';
import {Accordion, Button, Card, Image} from 'react-bootstrap';

const AppFeatureCard = (props) => {

    const [eventKey, setEventKey] = useState(0);
    const [headline, setHeadline] = useState("");
    const [content, setContent] = useState("");
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        setEventKey(props.eventKey);
        setHeadline(props.headline);
        setContent(props.content);
    });

    return (

        <div>

            <Card>
                <Card.Header className={"appFeatureHeadline"}>

                    <Accordion.Toggle className={""} style={{textDecorationColor: "black"}} as={Button} onClick={() => setIsCollapsed(!isCollapsed) } variant="link" eventKey={eventKey}>
                        {headline}
                    </Accordion.Toggle>

                    <Accordion.Toggle className={""} as={Button} onClick={() => toggleHeadingHandler() } variant="link" eventKey={eventKey}>

                        <Image id={"plus" + eventKey} className={"transition-featuresPlusSign plusSign"} src={require("../assets/images/plus22.5px.png")} alt={""}/>

                    </Accordion.Toggle>

                </Card.Header>

                <Accordion.Collapse eventKey={eventKey}>

                    <Card.Body>
                        {content}
                    </Card.Body>

                </Accordion.Collapse>

            </Card>

        </div>

    );

    function toggleHeadingHandler() {

        const ele = document.getElementById("plus" + eventKey);

        if (!isCollapsed) {
            ele.style.setProperty("transform", "rotate(-0.125turn)");
        } else {
            ele.style.setProperty("transform", "rotate(0turn)");
        }

        setIsCollapsed(!isCollapsed);
    }

};

export default AppFeatureCard