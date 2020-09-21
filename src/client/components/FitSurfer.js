import React from 'react';
import {Accordion, Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import "../style.css"


const FitSurfer = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Our Policy
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            FitSurfer and FitSurfer Owner and Developer ("FitSurfer", "us ", "we", or "our") provides users with information, services, and tools through the FitSurfer mobile application ("Apps"), the iOS Charts application programming interface ("API"), and other websites, apps, and online services that link to this Privacy Policy (collectively, the "Services"). This Privacy Policy sets forth our policies with respect to how we collect, use, and share information through the Services. This Privacy Policy is incorporated by reference in the helpyoself.com End User Terms of Use, which govern your use of the Services.
                            By voluntarily providing us with Personal Data, as defined below, you are consenting to our use of it in accordance with this Privacy Policy. If you provide Personal Data through the Services, you acknowledge and agree that such Personal Data may be transferred from your current location to our offices and servers, or those of our affiliates or contractors, located in the United States and other countries. Those countries may have data protection laws that are different from those in your country of residence. If you would like us to cease using your Personal Data, you may delete your account by following the instructions provided in the "Data Retention and Deletion" section below or exercise the choices described in the "Your Choices and Access to Information" section below.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Information We Collect
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            We do not collect both Personal Data and Other Information in connection with the Services. "Personal Data" is information that relates to an identified or identifiable natural person, such as your name, email address, and similar information associated with your FitSurfer account (FitSurfer account functionality does not exist at this time). " Other Information" is any information that is not Personal Data, such as information about usage of the Services that does not identify you personally. If we combine Other Information with Personal Data, we will treat the combined information as Personal Data in accordance with this Privacy Policy.
                            <ListGroup className={"preListHeader"}>
                                We do not collect various types of Personal Data through our Services, including:
                                <ListGroupItem>
                                    <strong>Personal Data That You Do Not Provide Directly to Us -></strong> We do not collect Personal Data when you voluntarily choose to provide such information directly to us.
                                    <p className={"preListHeader"}>Such information may include, among other things:</p>
                                    <ul>
                                        <li>Name</li>
                                        <li>Email address</li>
                                        <li>Username and password</li>
                                        <li>Mailing address</li>
                                        <li>Phone number</li>
                                        <li>Gender</li>
                                        <li>Birth date</li>
                                        <li>Photograph</li>
                                        <li>Person characteristics, such as weight and height</li>
                                        <li>Payment card information</li>
                                    </ul>
                                </ListGroupItem>

                                <ListGroupItem>
                                    <strong>Activity Data -></strong> We do not collect information about your use of the Services and your fitness activities through our Apps and through the wearable devices or online services that you associate with our Apps.
                                    <p className={"preListHeader"}>Such information may include, for example:</p>
                                    <ul>
                                        <li>Type, duration, and frequency of fitness activities (including certain background activities if you permit us to do so by turning on “Location Services” or similar features)</li>
                                        <li>Distance, speed, pace, and step count</li>
                                        <li>Heart rate</li>
                                        <li>Calories burned</li>
                                        <li>Altitude</li>
                                        <li>Location</li>
                                        <li>Training goals</li>
                                        <li>Achievements</li>
                                        <li>Health-related information that you provide to us</li>
                                    </ul>
                                </ListGroupItem>

                                <ListGroupItem>
                                    <strong>Location Data -></strong> The Services include various location-based features, such as mapping your outdoor fitness activities and providing information, offers, and advertising based on your location.  We do not collect your location data and therefore will not use such data for any purposes.
                                </ListGroupItem>

                                <p>
                                    To learn more about how we use and share location data, please see "Our Use of Your Personal Data and Other Information" and "Our Disclosure of Your Personal Data and Other Information" below. If you would like to stop the collection of precise location information through our Apps, you can adjust your mobile device settings by following native iOS processes to relinquish permission to access location data.
                                </p>

                                <ListGroupItem>
                                    <strong>Contacts -></strong> : We do not collect information about contacts stored on your device, as well as friends you invite to the app, if you choose to share such information with us.
                                </ListGroupItem>

                            </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Our Use of Personal Data and Other Information
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            We do not use the Personal Data and Other Information.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            Our Disclosure of Personal Data and Other Information
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <p className={"preListHeader"}>
                                We may share your Personal Data and Other Information with third parties in the following circumstances:
                            </p>

                            <ListGroupItem>
                                <strong>Affiliates -></strong> We do not share information with other parties.
                            </ListGroupItem>

                            <ListGroupItem>
                                <strong>Service Providers, Agents, and Related Third Parties  -></strong> We also partner with third parties to engage in analytics and interest-based advertising services, as described below in the "Third-Party Analytics and Interest-Based Advertising" section.
                            </ListGroupItem>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>


            </Accordion>
        </div>
    );
};

export default FitSurfer;