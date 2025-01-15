import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';
// import colors from '../assets/img/colors.png';
// import colors1 from '../assets/img/colors1.png';
// import colors2 from '../assets/img/colors2.png';
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='Skills' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>
                I have experience in a variety of programming languages and technologies, including JavaScript, React, Node.js, and Python. I am proficient in front-end development with a strong understanding of HTML, CSS, and modern JavaScript frameworks. Additionally, I have experience with back-end development, working with databases such as MongoDB and SQL. My skills also include version control with Git, and I am familiar with agile development methodologies.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Carousel
                responsive={responsive}
                className="skill-slider"
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
              >
                <div className='item' key='web-development'>
                  <img src={meter1} alt="Web Development" />
                  <h5>Web Development</h5>
                </div>
                <div className='item' key='react'>
                  <img src={meter2} alt="React" />
                  <h5>React</h5>
                </div>
                <div className='item' key='express'>
                  <img src={meter3} alt="Express" />
                  <h5>Express</h5>
                </div>
                <div className='item' key='dsa'>
                  <img src={meter1} alt="DSA Problem Solving" />
                  <h5>DSA Problem Solving</h5>
                </div>
              </Carousel>

      <img src={colorSharp} alt="" className='background-image-left' />
    </section>
  )
}