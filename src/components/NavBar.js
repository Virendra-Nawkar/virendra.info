import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import NavIcon1 from '../assets/img/nav-icon1.svg';
import NavIcon2 from '../assets/img/nav-icon2.svg';
import NavIcon3 from '../assets/img/nav-icon3.svg';
import Git from "../assets/img/github.svg"


export const NavBar = () => {
  const [activelink, setActivelink] = useState(`home`);
  const [scrolled, setscrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setscrolled(true)
      } else {
        setscrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdatActiveLink = (value) => {
    setActivelink(value)
  }

  return (

    // org code but not using anymore
    //   <Navbar expand="lg" className= {scrolled ? 'scrolled' : ''}>
    //   <Container id='vir'>
    //     <Navbar.Brand href="#home">
    //       <img src={logo} alt="Logo" />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav">
    //       <span className="navbar-toggler-icon"></span>
    //     </Navbar.Toggle>
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home" className={activelink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdatActiveLink('home')}>Home</Nav.Link>
    //         <Nav.Link href="#skills" className={activelink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdatActiveLink('skills')}>Skills</Nav.Link>
    //         <Nav.Link href="#projects" className={activelink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdatActiveLink('projects')}>Projects</Nav.Link>
    //       </Nav>
    //       <span className="navbar-text">
    //           <div className='social-icon'>
    //               <a href="#"> <img src={NavIcon1} alt="" /> </a>
    //               <a href="#"> <img src={NavIcon2} alt="" /> </a>
    //               <a href="#"> <img src={NavIcon3} alt="" /> </a>
    //           </div>
    //           <button className='vvd' onClick={()=>console.log("Connect")}> <span>Let's Connect</span> </button>
    //       </span>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img id='virpages' src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="nav-links-wrapper">
            <Nav className="me-auto mx-auto">
              <Nav.Link
                href="#home"
                className={activelink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdatActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activelink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdatActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activelink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdatActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
          </div>
          <span className="navbar-text">
            <div className="social-icon">
              <a target='_blank' href="https://www.linkedin.com/in/virendra-nawkar-7ab464246/">
                <img src={NavIcon1} alt="" />
              </a>
              <a target='_blank' href="https://www.facebook.com/virendra9623/">
                <img src={NavIcon2} alt="" />
              </a>

              {/* <a href="#">
                <img src={Git}   alt="" />
              </a> */}


              <a target='_blank' href="https://www.instagram.com/virendra_nawkar/">
                <img src={NavIcon3} alt="" />
              </a>
            </div>
            {/* <button href="#connect" className="vvd">
              <span >Let's Connect</span>
            </button> */}
            <button
              onClick={() => document.getElementById("connect").scrollIntoView({ behavior: "smooth" })}
              className="vvd"
            >
              <span>Let's Connect</span>
            </button>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}