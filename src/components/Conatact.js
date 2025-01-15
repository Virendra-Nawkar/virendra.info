import { useState } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg"
export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('SEND')
    const [status, setstatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = () => {

    }

    // code starrts here
    const [result, setResult] = useState("Send");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "7abee99c-d24f-4ed8-95c6-80d88adb9452");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-item-center">
                    <Col md={6}>
                        <img src={contactImg} alt="contactImg" />
                    </Col>

                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form onSubmit={onSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input name="name" type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input name="lastname" type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input name="email" type="email" value={formDetails.email} placeholder="Email ID" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input name="tel" type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea name="message" value={formDetails.phone} placeholder="Type message here" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    {/* <button type="submit"><span>{buttonText}</span></button> */}
                                    <button type="submit"><span>{result}</span></button>
                                </Col>
                                {/* <span>{result}</span> */}
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}