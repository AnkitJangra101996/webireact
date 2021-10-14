import { Button } from '@material-ui/core';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Fade from 'react-reveal/Fade';
import AboutImage from './Image/About1.png';


const Home = () => {

    const currentTime = new Date();

    const CurrentHours = currentTime.getHours();

    let Greeting = '';

    if (CurrentHours >= 1 && CurrentHours < 12) {
        Greeting = 'Good Morning';
    } else {
        Greeting = 'Good Evening';
    }

    return (
        <>
            <section className="homeSection justify-content-center align-middle">
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col">
                            <Fade left>
                                <div className="homeHeading justify-content-center align-middle">
                                    <h1 className="fw-bold mb-3">{Greeting},</h1>
                                    <h2 className="mb-4">Grow Your Business With <br /> <span className="">FreeLancer Ankit....</span> </h2>
                                    <p className="HomeHeadingPara mb-3 rounded">I CREATE THOUSAND OFF WEBSITE</p>
                                    <Button className="bg-white fw-bold " variant="contained" endIcon={<ArrowForwardIcon />} to="/services">Get Started</Button>
                                </div>
                            </Fade>
                        </div>
                        <div className="col mt-5">
                            <Fade right>
                                <img src={AboutImage} alt="HomeImage" width="100%" className="HomeImage" />
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
