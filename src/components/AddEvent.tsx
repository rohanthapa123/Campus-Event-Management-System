import { Box, Typography } from '@mui/material'
import React, { useRef } from 'react'
import plusicon from "../assets/plusicon.jpg"
import { NavLink } from 'react-router-dom'
import { useInView } from 'framer-motion'
const AddEvent: React.FC = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Box ref={ref} sx={{
            height: "98%",
            width: "98%",
            backgroundColor: "rgba(1, 1, 1, 0.15)",
            borderRadius: "10px",
            margin: '5px',
            padding: '0px',
            minHeight: '250px',
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s ease-in-out",
        }}>
            <Box sx={{

                height: "100%",
                width: "100%",
                mixBlendMode: "multiply",
                position: "relative"
            }}>

                <NavLink style={{

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "90%"

                }} to={"/add-event"}>

                    <img width={"55%"} height={"85%"} src={plusicon} alt="plus" />
                    <Typography sx={{
                        position: "absolute",
                        bottom: '30px'
                    }}>Add New Event</Typography>
                </NavLink>
            </Box>
        </Box>
    )
}

export default AddEvent