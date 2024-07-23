import { Box, Button, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { dataType } from '../Pages/Landing'

interface CardComponentProps{
    item: dataType
}

const CardComponent: React.FC<CardComponentProps> = ({ item }) => {
    return (
        <React.Fragment>
            <Box sx={{
                backgroundColor: "rgba(1, 1, 1, 0.15)",
                borderRadius: "10px",
                margin: '5px',
                padding: '5px',
                minHeight: '250px',
            }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {item['start-date'].toString().slice(1 , 10)} <Typography sx={{
                            display: "inline",
                            fontWeight: "500",
                            color: "black"
                        }}>TO</Typography> {item['dead-line'].toString().slice(1 , 10)} 
                    </Typography>
                    <Typography variant="h5" component="div">
                        {item['event-name']}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Proiority : {item.priority}
                    </Typography>
                    <Typography sx={{
                        minHeight : '50px',
                        overflow : "hidden",
                        wordWrap: "break-word"
                    }} variant="body2">
                        {item['event-task']}
                    </Typography>
                </CardContent>
                <CardActions>
                    <NavLink to={`/view-event-detail/${item.id}`}>

                        <Button size="small">View Details</Button>
                    </NavLink>
                </CardActions>
            </Box>
        </React.Fragment>
    )
}

export default CardComponent