import { Box, Container } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
    return (
        <Box sx={{
            minHeight: '100dvh',
            scrollbarWidth: "none", // For Firefox
            '&::-webkit-scrollbar': {
                display: 'none', // For WebKit-based browsers
            },
            msOverflowStyle: 'none', // For Internet Explorer and Edge

        }}>
            <>

                <Box>

                    <Navbar />
                </Box>
                <Box sx={{
                    backgroundColor: "rgba(1, 1, 1, 0.1)",
                    minHeight: '90dvh',

                }}>
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