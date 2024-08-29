import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import './EventSection.css';
import calEvent from '/src/assets/img/characteristicsImg/calendarEmp.png'

type EventItem = {
    day: string;
    number: number;
    title: string;
    description: string;
};

type EventSectionProps = {
    sectionTitle: string;
    subtitle: string;
    events: EventItem[];
};

const EventSection: React.FC<EventSectionProps> = ({ sectionTitle, subtitle, events }) => {
    return (
        <Box className="event-section  h-auto flex items-center flex-col justify-center">
            {/* <Typography variant="h4" className="section-title mainFont">
                {sectionTitle}
            </Typography> */}
            <img src={sectionTitle} ></img>
            <br />
            <Typography variant="subtitle1"  sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '25px',
                        fontWeight: 500,
                        lineHeight: '37.5px',
                        letterSpacing: '-0.01em',
                        textAlign: 'center',
                        color: '#717177',
                    }}>
                {subtitle}
            </Typography>
            <br />
            {/* <Box className="calendar-container" borderBottom={1}>
                <Typography variant="button" className="calendar-button mainFont">
                    Hoy
                </Typography>
                <Box className="calendar-navigation">
                    <Typography variant="button" className="calendar-arrow">
                        &lt;
                    </Typography>
                    <Typography variant="button" className="calendar-arrow">
                        &gt;
                    </Typography>
                </Box>
                <Typography variant="h6" className="calendar-title mainFont">
                    Eventos
                </Typography>
            </Box>
            <Grid container spacing={2} className="events-grid">
                {events.map((event, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Paper className="event-paper">
                            <Typography variant="h6" className="event-day mainFont">
                                {event.day}
                            </Typography>
                            <Typography variant="h3" className="event-date mainFont">
                                {event.number}
                            </Typography>
                            <Typography variant="h6" className="event-title mainFont">
                                {event.title}
                            </Typography>
                            <Typography variant="body2" className="event-description mainFont">
                                {event.description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid> */}
            <br></br>
            <img src={calEvent} ></img>
        </Box>
    );
};

export default EventSection;
