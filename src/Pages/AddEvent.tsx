import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const AddEvent: React.FC = () => {

  let eventSchema = Yup.object({
    "event-name": Yup.string().required("Event name is required").min(2, "Event name must be atleast 2 character"),
    "event-task": Yup.string().required("Event Task is Required").min(5, "Event Task must be 5 character"),
    "start-date": Yup.date().required("Task Start date is required").max(new Date),
    "dead-line": Yup.date().required("Task deadline is required."),
    "priority": Yup.string().required("Event priority is required"),
    "status": Yup.boolean().required("Event status is required"),

  })

  const formik = useFormik({
    initialValues: {
      "event-name": "",
      'event-task': "",
      'start-date': "",
      "dead-line": "",
      priority: "",
      status: ""
    },
    validationSchema: eventSchema,
    onSubmit: (values) => {
      // e.preventDefault();
      console.log(values)
      alert("submitted");
    },
    enableReinitialize: true,
  })

  return (
    <Box sx={{
      margin: "auto ",
      width: "80%",
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"

    }}>
      <FormControl onSubmit={formik.handleSubmit} component="form" sx={{
        width: "100%",

      }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="event-name" name='event-name' label="Event Name" variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched['event-name'] && Boolean(formik.errors['event-name'])}
              helperText={formik.touched['event-name'] && formik.errors['event-name']}
            />

          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="event-task" name='event-task' label="Event Task" variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched['event-task'] && Boolean(formik.errors['event-task'])}
              helperText={formik.touched['event-task'] && formik.errors['event-task']}
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
              error={formik.touched['start-date'] && Boolean(formik.errors['start-date'])}
              helperText={formik.touched['start-date'] && formik.errors['start-date']}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />

          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="deadline"
              label="Deadline"
              type="date"
              name='dead-line'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched['dead-line'] && Boolean(formik.errors['dead-line'])}
              helperText={formik.touched['dead-line'] && formik.errors['dead-line']}
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
                error={formik.touched.priority && Boolean(formik.errors.priority)}

                defaultValue=""
              >
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </Select>
              <FormHelperText sx={{
                color: "red"
              }} id="priority-helper-text">


                {formik.touched['priority'] && formik.errors['priority']}

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
                error={formik.touched.status && Boolean(formik.errors.status)}
                defaultValue=""
              >
                <MenuItem value={"true"}>Completed</MenuItem>
                <MenuItem value={"false"}>Pending</MenuItem>
              </Select>
              <FormHelperText sx={{
                color: "red"
              }} id="status-helper-text">
                {formik.touched['status'] && formik.errors['status']}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth type='submit'>
              Add Event
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};

export default AddEvent;
