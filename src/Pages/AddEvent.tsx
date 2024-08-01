import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

interface EventFormValues {
  "event-name": string;
  "event-task": string;
  "start-date": string;
  "dead-line": string;
  priority: string;
  status: string;
}

const AddEvent: React.FC = () => {
  const queryClient = useQueryClient();

  const eventSchema = Yup.object({
    "event-name": Yup.string().required("Event name is required").min(2, "Event name must be at least 2 characters"),
    "event-task": Yup.string().required("Event Task is required").min(5, "Event Task must be at least 5 characters"),
    "start-date": Yup.date().required("Task Start date is required").max(new Date(), "Start date can't be in the future"),
    "dead-line": Yup.date().required("Task deadline is required").min(new Date() , "Dead line cannot be min past"),
    priority: Yup.string().required("Event priority is required"),
    status: Yup.string().required("Event status is required"),
  });

  const postEvent = async (newEvent: EventFormValues) => {
    await axios.post("https://669b437b276e45187d34f77c.mockapi.io/api/projects/campus-event-management", newEvent);
  };

  const mutation = useMutation({
    mutationFn: postEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['event-data'] });
    },
  });

  const formik = useFormik({
    initialValues: {
      "event-name": "",
      "event-task": "",
      "start-date": "",
      "dead-line": "",
      priority: "",
      status: "",
    },
    validationSchema: eventSchema,
    onSubmit: (values, { setSubmitting }) => {
      
      mutation.mutate(values, {
        onSuccess: () => {
          setSubmitting(false);
          alert('Event added successfully');
          
        },
        onError: (error) => {
          setSubmitting(false);
          alert('Error adding event: ' + error);
        },
      });
    },
    enableReinitialize: true,
  });

  return (
    <Box sx={{
      margin: "auto",
      width: "80%",
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="event-name"
              name="event-name"
              label="Event Name"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values["event-name"]}
              error={formik.touched["event-name"] && Boolean(formik.errors["event-name"])}
              helperText={formik.touched["event-name"] && formik.errors["event-name"]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="event-task"
              name='event-task'
              label="Event Task"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values["event-task"]}
              error={formik.touched["event-task"] && Boolean(formik.errors["event-task"])}
              helperText={formik.touched["event-task"] && formik.errors["event-task"]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="start-date"
              name='start-date'
              label="Start Date"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values["start-date"]}
              error={formik.touched["start-date"] && Boolean(formik.errors["start-date"])}
              helperText={formik.touched["start-date"] && formik.errors["start-date"]}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="dead-line"
              label="Deadline"
              type="date"
              name='dead-line'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values["dead-line"]}
              error={formik.touched["dead-line"] && Boolean(formik.errors["dead-line"])}
              helperText={formik.touched["dead-line"] && formik.errors["dead-line"]}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="priority-label">Priority</InputLabel>
              <Select
                labelId="priority-label"
                id="priority"
                label="Priority"
                name='priority'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.priority}
                error={formik.touched.priority && Boolean(formik.errors.priority)}
              >
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </Select>
              <FormHelperText sx={{ color: "red" }} id="priority-helper-text">
                {formik.touched.priority && formik.errors.priority}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                label="Status"
                name='status'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.status}
                error={formik.touched.status && Boolean(formik.errors.status)}
              >
                <MenuItem value="true">Completed</MenuItem>
                <MenuItem value="false">Pending</MenuItem>
              </Select>
              <FormHelperText sx={{ color: "red" }} id="status-helper-text">
                {formik.touched.status && formik.errors.status}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth type='submit'>
              Add Event
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddEvent;
