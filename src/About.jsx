import React from 'react';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typed from "react-typed";
import Blogging from './Image/blogging.png'

function About() {

    const TypingText = [
        `Web Developer`,
        `Web Designer`,
        `SEO Executive`,
        `Digital marketeer`,
    ];

    return (
        <>
            <section className="AboutSection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 justify-content-center align-middle  align-self-lg-center">
                            <Bounce left cascade>
                                <div className="AboutHeading">
                                    <h5 className="mt-3 mb-3 mx-2 text-uppercase MainAboutHeading">About FreeLancer Ankit</h5>
                                    <h1>Grow Your Business With Experienced <span>
                                        <Typed strings={TypingText} typeSpeed={150} backSpeed={150} />
                                    </span> </h1>
                                    <h5 className="mt-3 mx-2">freelancer Ankit is a perfect place where I ensure small, medium, large and even start-ups to enjoy the budgeted SEO service and master offering effective software development solutions.</h5>
                                    <Button className="bg-white fw-bold mx-2 my-3" variant="contained" endIcon={<ArrowForwardIcon />}>Let's Start</Button>
                                    <Button className="bg-white fw-bold mx-2 my-3" variant="outlined" endIcon={<ArrowForwardIcon />}>Learn More</Button>
                                </div>
                               
                            </Bounce>
                        </div>
                        <div className="col-lg-6 text-center">
                            <Fade right>
                                <div className="AboutImage">
                                    <img src={Blogging} alt="AboutImage" width="100%" className="mt-5 mb-5 pt-lg-5 pb-lg-5" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;