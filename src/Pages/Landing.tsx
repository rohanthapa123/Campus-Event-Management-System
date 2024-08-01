import { Box, Grid, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import AddEvent from '../components/AddEvent';
import CardComponent from '../components/CardComponent';
import SkeletonComponent from '../components/Skeleton';

export interface dataType {
  createdAt: Date;
  "event-name": String;
  "event-task": String;
  "start-date": Date;
  "dead-line": Date;
  priority: String;
  status: Boolean;
  id: String;


}

const Landing: React.FC = () => {



  const { data: eventData, error, isLoading } = useQuery({
    queryKey: ['event-data'],
    queryFn: async () => {
      const response = await axios.get<dataType[]>("https://669b437b276e45187d34f77c.mockapi.io/api/projects/campus-event-management");
      return response.data;
    }
  })



















  if (error) {
    return <Typography variant='h1'>ERROR GETTING EVENTS DATA</Typography>
  }


  if (isLoading) {
    return <SkeletonComponent />
  }

  

  return (
    <Box sx={{
      minHeight: "80dvh",
      width: "100%",
      margin: "auto",
      
    }}>
      <Grid container spacing={2} sx={{
        margin: "auto",
        width: "100%"
      }} >

        {
          eventData?.map((event) => {
            return <Grid item xs={12} sm={6} lg={4} xl={3}>
              <CardComponent item={event} />
            </Grid>
          })
        }
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <AddEvent />
        </Grid>



      </Grid>
    </Box>
  )
}

export default Landing