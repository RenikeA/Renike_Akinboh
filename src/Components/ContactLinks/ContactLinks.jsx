import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Phone from '@mui/icons-material/Phone';
import styles from "./ContactLinksStyles";
import { Typography, Button } from "@mui/material";
import Resume from "../../Assets/Temitope_Akinboh_Resume.pdf";

const ContactLinks = () => {
    const classes = styles();
    return (
        <>
            <Typography variant="h5" className={classes.title}>
                Primary
            </Typography>
            <a href="mailto:atinukerenike@gmail.com">
                <EmailIcon fontSize="large" className={classes.email} />
            </a>
            <a href="tel:+2348149561764">
                <Phone fontSize="large" className={classes.phone} />
            </a>
            <Typography variant="h5" className={classes.title} mt={2}>
                Social
            </Typography>
            <a href="https://github.com/RenikeA">
                <GitHubIcon fontSize="large" className={classes.github} />
            </a>
            <a href="https://www.linkedin.com/in/temitope-akinboh-336b52227/">
                <LinkedInIcon fontSize="large" className={classes.linkedin} />
            </a>
            <a href="https://twitter.com/smirley_barbie">
                <TwitterIcon fontSize="large" className={classes.twitter} />
            </a>
            <a href="https://www.instagram.com/akshatvg">
                <InstagramIcon fontSize="large" className={classes.instagram} />
            </a>
            <Typography variant="h5" className={classes.title} mt={2} mb={2}>
                Resume
            </Typography>
            <Button variant="contained" href={Resume} className={classes.themeBtn} download>Download Resume</Button>
        </>
    );
};

export default ContactLinks;