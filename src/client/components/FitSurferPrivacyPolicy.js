import React from 'react';
import {Accordion, Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import "../style.css"

const FitSurferPrivacyPolicy = () => {
    return (
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

                            <p className={"preListHeader"}>
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
                            <strong>Service Providers, Agents, and Related Third Parties  -></strong> We utilize trend analysis provided through the App Store Connect application.
                        </ListGroupItem>

                        <ListGroupItem>
                            <strong>Location Sharing  -></strong> We do not share location information.
                        </ListGroupItem>

                        <ListGroupItem>
                            <strong>Your sharing of Information through the Services or Third-Party Services.  -></strong> We allow you to share information about your fitness activities and other actions with other users of the Services. We also enable you to share such information with users of third-party services, such as through your social media accounts. Please note that any Personal Data you provide to be displayed in your publicly-available online profile will be displayed for others to see. We cannot and will not be responsible for what third parties do with any Personal Data that you choose to make publicly available. As such, we advise that you exercise great care in determining what information you choose to make publicly available through the Services or on third-party services. Please see the "Your Choices and Access to Information" section below to learn how to adjust your sharing preferences through the Services.
                        </ListGroupItem>

                        <ListGroupItem>
                            <strong>Legal Requirements -> </strong> We may also disclose your Personal Data, or Other Information if required to do so by law or in the good faith belief that such action is necessary to (i) comply with a legal obligation such as a judicial or governmental subpoena or warrant, (ii) protect and defend our rights or property, (iii) act in urgent circumstances to investigate or protect the personal safety of users of the Services or the public, or (iv) protect against legal liability, prevent suspected fraud, or establish, protect, or exercise our legal rights.
                        </ListGroupItem>

                        <ListGroupItem>
                            <strong>Financing, Business Transfers, and Similar Transactions -> </strong>As we develop our business, we might sell or buy businesses or assets. In the event of a sale, merger, reorganization, dissolution or similar event relating to all or a portion of our business or assets, Personal Data or Other Information may be part of the transferred assets. We also may share Personal Data or Other Information to facilitate the potential or actual financing, securitization, insuring, merger, acquisition, sale, assignment, bankruptcy, or other disposal of all or part of our business or assets.
                        </ListGroupItem>

                        <ListGroupItem>
                            <strong>De-Identified or Aggregated Information -> </strong>We may disclose aggregate or de-identified information to third parties.
                        </ListGroupItem>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                        Third-Party Analytics and Interest-Based Advertising
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>

                        <ListGroupItem>
                            <strong>Analytics -></strong> Trend analysis on sales are provided through App Store Connect. No other third parties are used to perform analytics.
                        </ListGroupItem>

                        <ListGroupItem>
                            <strong>Online Interest-Based Advertising -> </strong> : No online Interest-Based advertising is implemented.
                        </ListGroupItem>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                        Your Choices and Access to Information
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                    <Card.Body>

                        <p className={"preListHeader"}>We do not provide users with a variety of choices regarding how we or third parties collect, use, and share information, including as follows: </p>

                        <ul>
                            <li>
                                <strong>
                                    You can update or change certain information associated with your usage of FitSurfer through Settings and limited ways within the app.
                                </strong>
                            </li>
                        </ul>

                        <p className={"preListHeader"}>If you are a California resident under 18 years of age and a registered user of our Services, you may request that we remove content and information that you post on our Services. To obtain removal of such content and information, please send us an email at <a href="mailto:fitsurferapp@gmail.com@">fitsurferapp@gmail.com</a> with a short description of the content or information you would like to have removed. Please note that such a request does not necessarily ensure complete or comprehensive removal of content posted by you, since the content and information may remain in our databases, may remain visible in a manner that does not identify you, or may have been re-posted by another user. </p>

                        <p className={"preListHeader"}>Users may have additional rights to access, review, correct, delete, or inquire about information that we hold about them. To make such a request, please send us an email at <a href="mailto:fitsurferapp@gmail.com">fitsurferapp@gmail.com</a>. Please note that we may need to verify your identity or request additional information from you before we are able to comply with your request.</p>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="6">
                        Data Retention
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                    <Card.Body>

                        <p className={"preListHeader"}>We retain information for as long as reasonably necessary to deliver our Services to you or to fulfill the purposes described in this Policy.</p>

                        <p className={"preListHeader"}>Because our users may take extended breaks from fitness activities and may use our Apps on various devices, we do not delete information automatically based on account inactivity or when you uninstall our Apps from one of your devices. However, we provide you with the ability to delete information associated with your account, as follows:</p>

                        <ul>
                            <li>
                                <strong>
                                    You may remove a specific fitness activity by using Apple’s native delete function for table views in the Activity app.
                                </strong>
                            </li>
                            <li>
                                <strong>
                                    You may delete the FitSurfer app at any time following Apple’s native app deletion process.
                                </strong>
                            </li>
                        </ul>

                        <p className={"preListHeader"}>If you choose to delete your FitSurfer account, we will make our best effort to delete all information associated with your account, including your profile information, historical fitness activities, historical location information, and third-party authorizations, if any, for services connected to your account (e.g., Facebook, Twitter, Fitbit, and Garmin).</p>

                        <p className={"preListHeader"}>In limited circumstances, we may retain information for a longer period of time as required by law. However, since we currently do not collect and retain Activity Data, it follows that your Activity Data is maintained within your device and wherever else you choose to share your Activity Data.</p>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="7">
                        Security
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                    <Card.Body>

                        <p className={"preListHeader"}>We implement reasonable administrative, technical, and physical measures to protect the Personal Data provided via the Services from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, no Internet or e-mail transmission is ever fully secure or error free. Therefore, you should take special care in deciding what information you send to us via e-mail or the Internet.</p>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="8">
                        Data Integrity
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="8">
                    <Card.Body>

                        <p className={"preListHeader"}>We process Personal Data for our legitimate business purposes and in accordance with this Policy or any applicable service-specific privacy notice. We take reasonable steps to ensure that the Personal Data we process is accurate, complete, and current, but we depend on our users to update or correct their Personal Data whenever necessary.</p>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="9">
                        Health Information
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="9">
                    <Card.Body>

                        <p className={"preListHeader"}>We do not use information collected through the Services to infer health information that we consider sensitive, such as a user's past, present or potential future health or medical condition or treatment, including but not limited to genetic, genomic, and family medical history. We may, however, infer a user's potential interest in certain non-sensitive health and wellness categories, such as exercise and fitness activities, endurance activities, distance running, diet and weight loss, nutrition, healthy living, or physical and massage therapy. We may use this non-sensitive health and wellness information for the purpose of delivering more relevant content, services, offers, and advertising to our users.</p>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="10">
                        Children
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="10">
                    <Card.Body>

                        <p className={"preListHeader"}>We do not knowingly collect Personal Data from children under the age of 13 and do not target our Services to children under 13. If you are under 13, please do not submit any Personal Data through the Services. We encourage parents and legal guardians to monitor their children's Internet usage and to help enforce our Privacy Policy by instructing their children to never provide Personal Data through any of our Services without their permission. If you have reason to believe that a child under the age of 13 has provided Personal Data to us, please contact us, and we will endeavor to delete that information from our databases.</p>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="11">
                        Links to Other Websites or Services
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="11">
                    <Card.Body>

                        <p className={"preListHeader"}>This Privacy Policy applies only to information collected through the Services. The Services may contain references or links to other websites or services not operated or controlled by us (the "Third Party Services"). The policies and procedures we described here do not apply to the Third Party Services. The links from the Services do not imply our review or endorsement of the Third Party Services. We suggest contacting those sites directly for information on their privacy policies.</p>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="12">
                        Changes to Our Privacy Policy
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="12">
                    <Card.Body>

                        <p className={"preListHeader"}>Our Services may change from time to time. As a result, we may need to change this Privacy Policy. We reserve the right to update or modify this Privacy Policy at any time and from time to time without prior notice. We will post any revised Privacy Policy on our website with an "effective date" indicating when the changes will take effect. We encourage you to review this Privacy Policy periodically, and especially before you provide any Personal Data. Your continued use of the Services after a revised Privacy Policy becomes effective shall indicate your agreement with the terms of such revised Privacy Policy.</p>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="13">
                        Contact Us
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="13">
                    <Card.Body>

                        <p className={"preListHeader"}>If you have any questions or concerns about this Privacy Policy or our information collection, use, and sharing practices, please feel free to contact us at any time at <a href={"mailto:fitsurferapp@gmail.com"}>fitsurferapp@gmail.com</a>.</p>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    );
};

export default FitSurferPrivacyPolicy;