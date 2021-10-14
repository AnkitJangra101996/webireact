import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ContactImage from './Image/business-3d-good-job-1.png';
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
function Contact() {
    return (
        <>
            <section className="ContactContainer mt-5 mb-5">
                <div className="container">
                    <div className="InnerContactContainer shadow-lg rounded-3">
                        <div className="row">
                            <div className="col-lg-8 pt-lg-5 pb-lg-5 px-5">
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '35ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="standard-basic" label="First Name" variant="standard" />
                                    <TextField id="standard-basic" label="Last Name" variant="standard" />
                                    <TextField id="standard-basic" label="Profession" variant="standard" />
                                    <TextField id="standard-basic" label="Company Name" variant="standard" />
                                    <TextField
                                        id="filled-textarea"
                                        label="Enter Message"
                                        placeholder="Placeholder"
                                        multiline
                                        variant="standard"
                                    />
                                </Box>
                                <br />
                                <Button variant="outlined" size="large" endIcon={<TelegramIcon />}>
                                    Send Message
                                </Button>
                            </div>
                            <div className="col-lg-4 pt-lg-5 pb-lg-5 text-center">
                                <img src={ContactImage} alt="ContactImage" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
