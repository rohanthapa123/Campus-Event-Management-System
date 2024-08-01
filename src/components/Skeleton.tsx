import { Box, Grid, Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton"
import React from "react";

const SkeletonComponent: React.FC = () => {
    return <Box sx={{
        minHeight: "80dvh",
        width: "100%",
        margin: "auto",
    }}>
        <Grid container spacing={2} sx={{
            margin: "auto",
            width: "100%"
        }} >
            <Grid item xs={12} sm={6} lg={4} xl={3} >
                <Stack spacing={1}  >
                    <Skeleton animation="wave" variant={"text"} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3} >
                <Stack spacing={1}  >
                    <Skeleton animation="wave" variant={"text"} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3} >
                <Stack spacing={1}  >
                    <Skeleton animation="wave" variant={"text"} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3} >
                <Stack spacing={1}  >
                    <Skeleton animation="wave" variant={"text"} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3} >
                <Stack spacing={1}  >
                    <Skeleton animation="wave" variant={"text"} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3} >
                <Stack spacing={1}  >
                    <Skeleton animation="wave" variant={"text"} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3} >
                <Stack spacing={1}  >
                    <Skeleton animation="wave" variant={"text"} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                    <Skeleton animation="wave" variant={"rounded"} width={260} height={60} sx={{ fontSize: '1rem' }} />
                </Stack>
            </Grid>
            
        </Grid>





    </Box>

}
export default SkeletonComponent;