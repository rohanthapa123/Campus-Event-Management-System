import { Box, Button, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { dataType } from './Landing'
import { NavLink, useParams } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

const ViewEvent: React.FC = () => {

  const { id } = useParams();
  const { data: eventData, error, isLoading } = useQuery({
    queryKey: ["event-detail"],
    queryFn: async () => {
      const response = await axios.get<dataType>(`https://669b437b276e45187d34f77c.mockapi.io/api/projects/campus-event-management/${id}`);
      return response.data;
    }
  })

  if (error) {
    return <Typography variant='h1'>ERROR GETTING EVENTS DATA</Typography>
  }


  if (isLoading) {
    return <Typography sx={{ textAlign: "center" }} variant='h1'>Loading...</Typography>
  }

  return (
    <Box sx={{
      minHeight: "80dvh",
      padding: '50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Typography>
        <NavLink to={"/home"}>

          <IoMdArrowRoundBack size={50} />
        </NavLink>


      </Typography>
      <Typography sx={{
        color: "rgba(0,0,0,0.5)"
      }} variant='h5'>Start Date: {eventData?.['start-date'].toString().slice(0, 10)}</Typography>
      <Typography sx={{
        color: "rgba(0,0,0,0.5)"
      }} variant='h5'>Dead Line: {eventData?.['dead-line'].toString().slice(0, 10)}</Typography>
      <Typography variant='h4'>Event Name: {eventData?.['event-name']}</Typography>
      <Typography variant='h6'>Event Task: {eventData?.['event-task']}</Typography>
      <Typography variant='h5'>Priority: {eventData?.priority}</Typography>
      {
        eventData?.status ? <Button sx={{
          width: 'fit-content',
          marginTop: '10px',
        }} variant='contained'>Complete Event</Button> : <Button sx={{
          width: 'fit-content',
          marginTop: '10px',
          color: "red",

        }} variant='contained' disabled>Event Completed</Button>
      }

    </Box>
  )
}

export default ViewEvent