import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Instagram, Mail, Linkedin } from 'react-feather';

class Team extends Component {
    render() {
        const teamData = {
            "team": {
                "leads": [
                    {
                        "name": "Hamed Bayat",
                        "position": "JD/MBA, Senior Director",
                        "image": "../assets/images/team/Director.jpg",
                        "email": "",
                        "social": {
                            "instagram": {
                                "handle": "@hmbayat",
                                "link": "https://www.instagram.com/hmbayat/"
                            }
                        }
                    },
                    {
                        "name": "Rafi Baig",
                        "position": "Co-Founder",
                        "image": "../assets/images/team/Rafi.jpg",
                        "email": "rafi@stoyc.com",
                        "social": {
                            "instagram": {
                                "handle": "@rafisbaig",
                                "link":"https://www.instagram.com/rafisbaig/"
                            },

                            
                            "linkedin": {
                                "handle": "rafi-baig-972293217",
                                "link": "https://www.linkedin.com/in/rafi-baig-972293217/"
                            }
                        }
                    },
                    {
                        "name": "Miles Iwanchuk",
                        "position": "Co-Founder",
                        "image": "../assets/images/team/MilesIwanchuk.jpg",
                        "email": "miles@stoyc.com",
                        "social": {
                            "instagram": {
                                "handle": "@milesiwanchuk",
                                "link": "https://www.instagram.com/milesiwanchuk/"
                            },


                            "linkedin": {
                                "handle": "miles-iwanchuk",
                                "link": "https://www.linkedin.com/in/miles-iwanchuk/"
                            }
                        }
                    },
                    {
                        "name": "Niloofar Falahian",
                        "position": "Director of Content Creation",
                        "image": "../assets/images/team/Team1.jpg",
                        "email": "niloo@stoyc.com",
                        "social": {
                            "instagram": {
                                "handle": "@niloo.f_",
                                "link": "https://www.instagram.com/niloo.f_/"
                            },


                        }
                    }
                ]
            }
        };

        return (
            <>
                <Row className="justify-content-center">
                    <Col className="col-lg-7">
                        <div className="heading  mb-50">
                            <h2 className="mb-4 text-uppercase text-center">Team Leads</h2>

                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center position-relative ">
                    {teamData.team.leads.map((lead, index) => (
                        <div className="col-xs-6 col-sm-6 col-md-3" key={index}>
                            <div className="team-block mb-5 mb-lg-0">
                                <img src={lead.image} alt={lead.name} className="img-fluid w-100" />
                                <p className="social-profile">
                                    <a href="mailto:'{lead.email}'" rel="noreferrer">
                                        {lead.email && ( <Mail /> ) }
                                        <span className="ml-2 font-weight-bold">{lead.email}</span>
                                    </a>
                                    <a href={lead.social.instagram.link} className="instagram" target="_blank" rel="noreferrer">
                                        <Instagram/>
                                        <span className="ml-2 font-weight-bold">{lead.social.instagram.handle}</span>
                                    </a>
                                    {lead.social.linkedin && <a href={lead.social.linkedin.link} rel="noreferrer"> <Linkedin/> <span className="ml-2 font-weight-bold">{lead.social.linkedin.handle}</span> </a>}
                                </p>
                            </div>
                            <h4 className="mt-4 team-name font-weight-bold">{lead.name}</h4>
                            <p className="team-position">{lead.position}</p>
                           
                        </div>

                       
                    ))}
                </Row>

             
            </>
        );
    }
}

export default Team;