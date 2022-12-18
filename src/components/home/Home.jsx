import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Categories from '../category'
import Hero from '../Hero'
import Recents from '../recents'
import Rightbar from '../rightbar'

const Home = () => {
    return (
        <Box>
            <Hero/>
            <Container>
                <Categories/>
                <hr/>
                {/*<Stack direction={ 'row' } spacing={ 8 } mt={8}>*/}
                <Stack direction={{ xs: "column", md: "row" }} spacing={ 8 } mt={8}>

                    <Box flex={3} sx={{padding:'18px 100px 100px 100px'}} >
                        <Recents/>
                    </Box>

                    <Box flex={1}><Rightbar/></Box>

                </Stack>
            </Container>
        </Box>
    )
}

export default Home

