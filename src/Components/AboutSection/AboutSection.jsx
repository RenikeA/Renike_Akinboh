import { Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import styles from "./AboutStyles.jsx";
import { useEffect } from "react";

function AboutSection() {
    const classes = styles();
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);
    return (
        <>
            {/* About Section */}
            <Container maxWidth="lg" id="about-section">
                <Grid
                    container
                    className={classes.root}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant="h3" className={classes.title}>
                            About <span className={classes.textColored}>Me</span>
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            A dedicated Mid-Level Backend Engineer from Lagos, Nigeria, I bring over 3 years of experience in crafting high-performance web applications within resilient microservices architectures. Specializing in Java, Spring Boot, and RESTful APIs, I excel at delivering scalable solutions that meet demanding performance requirements. My journey began with a solid foundation in both frontend and backend technologies, where I discovered my passion for optimizing performance, solving complex problems, and integrating third-party APIs seamlessly.
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            What I bring to the table:
                            <ul>
                                <li><b>Technical Expertise:</b> Proven proficiency in Java, SQL, and JavaScript, alongside deep experience with frameworks like Spring Boot, Spring MVC, and Hibernate. My technical acumen ensures the delivery of robust, scalable systems.</li>
                                <li><b>Project Leadership:</b> Demonstrated ability to navigate the complete project lifecycle, from ideation through deployment, ensuring that products align with business goals and deliver exceptional user experiences.</li>
                                <li><b>Performance Optimization:</b> Skilled in optimizing database queries and implementing comprehensive testing to enhance code reliability, ensuring that applications run smoothly and efficiently.</li>
                                <li><b>Team Collaboration:</b> A strong team player, I effectively collaborate within Agile and Scrum environments to deliver backend solutions that align with organizational goals.</li>
                                <li><b>Continuous Improvement:</b> Committed to staying ahead of industry trends by participating in conferences and educational programs, continuously enhancing skills to drive innovation.</li>
                                <li><b>Financial Solutions Expertise:</b> Extensive experience in developing secure and efficient fintech solutions, particularly in banking and finance, adhering to industry standards.</li>
                            </ul>
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            Driven by a passion for technology and problem-solving, I am focused on turning ideas into tangible, scalable solutions that meet the needs of diverse industries.
                        </Typography>
                    </Grid>

                </Grid>
                {!small && (<span className="scroll-btn">
                    <a href="#skills-section" onClick={e => {
                        let whereTo = document.getElementById("skills-section");
                        e.preventDefault();
                        whereTo && whereTo.scrollIntoView({ behavior: "smooth", block: "start" });
                    }} style={{
                        display: "flex", justifyContent: "center",
                    }}
                    >
                        <span className="mouse">
                            <span>
                            </span>
                        </span>
                    </a>
                </span>
                )}
            </Container>
        </>
    );
}

export default AboutSection;