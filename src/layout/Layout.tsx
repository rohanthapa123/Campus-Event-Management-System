import { Box, Container } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
    return (
        <Box sx={{
            minHeight: '100dvh',

        }}>
            <>

                <Box>

                    <Navbar />
                </Box>
                <Box>
                    <Container sx={{
                        padding: '10px'
                    }
                    }>

                        <Outlet />
                    </Container>
                </Box>
            </>
        </Box>
    )
}

export default Layout