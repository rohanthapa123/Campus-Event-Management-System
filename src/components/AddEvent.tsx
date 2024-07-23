import { Box, Typography } from '@mui/material'
import React from 'react'
import plusicon from "../assets/plusicon.jpg"
import { NavLink } from 'react-router-dom'
const AddEvent: React.FC = () => {
    return (
        <Box sx={{
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(1, 1, 1, 0.15)",
            borderRadius: "10px",
            margin: '5px',
            padding: '5px',
            minHeight: '250px',
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
                        bottom : '30px'
                    }}>Add New Event</Typography>
                </NavLink>
            </Box>
        </Box>
    )
}

export default AddEvent