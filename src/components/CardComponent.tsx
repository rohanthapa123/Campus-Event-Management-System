import { Box, Button, CardActions, CardContent, Typography } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { dataType } from '../Pages/Landing'

interface CardComponentProps {
    item: dataType
}

const CardComponent: React.FC<CardComponentProps> = ({ item }) => {

    const queryClient = useQueryClient();

    const deleteEvent = async (id: String) => {
        await axios.delete(`https://669b437b276e45187d34f77c.mockapi.io/api/projects/campus-event-management/${id}`)
    }

    const mutation = useMutation({
        mutationFn: () => deleteEvent(item.id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['event-data'] })
        }
    })



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
                        {item['start-date'].toString().slice(1, 10)} <Typography sx={{
                            display: "inline",
                            fontWeight: "500",
                            color: "black"
                        }}>TO</Typography> {item['dead-line'].toString().slice(1, 10)}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {item['event-name']}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Proiority : {item.priority}
                    </Typography>
                    <Typography sx={{
                        minHeight: '50px',
                        overflow: "hidden",
                        wordWrap: "break-word"
                    }} variant="body2">
                        {item['event-task']}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: { sm: "80%", md: "100%" }
                }}>
                    <NavLink to={`/view-event-detail/${item.id}`}>

                        <Button size="small" variant='contained'>View Details</Button>
                    </NavLink>
                    <Button
                        onClick={() => mutation.mutate()}
                        disabled={mutation.isPending}


                        sx={{
                            backgroundColor: "red",
                        }} size='small' variant="contained">{
                            mutation.isPending ? "Deleting..." : "Delete"
                        }</Button>
                </CardActions>
            </Box>
        </React.Fragment >
    )
}

export default CardComponent