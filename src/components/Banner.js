import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import Vir from "../assets/img/Vir.png";
import { useState, useEffect } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "React Developer", "MERN Stack Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]); // Add necessary dependencies to prevent infinite re-renders

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio - Desktop Site</span>
            <h1>
              {`Hi, I am Virendra`} <span className="wrap">{text}</span>
            </h1>
            <p>
              I am a passionate web developer with expertise in the MERN stack.
              I have honed my skills in building dynamic and responsive web
              applications. Currently, I am focused on creating innovative
              projects that solve real-world problems and enhance user
              experiences.
            </p>
            <button 
  id="btn-connect" 
  onClick={() => document.getElementById("connect").scrollIntoView({ behavior: "smooth" })}
>
  Let's Connect{" "}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-arrow-right-circle"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
    />
  </svg>
</button>

          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <img src={headerImg} alt="Header Img" /> */}
            <img src={Vir} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
