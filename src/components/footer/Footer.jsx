import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'

const SocialBox = styled( Box )( {
    display: 'flex',
    gap: 10,

} )

const Footer = () => {
    return (
        <Box sx={ { background: 'black', height: '300px' } }>
            <Stack direction={ { xs: 'row', md: 'row' } } p={ 7 }>
                <Box flex={ 1 }>
                    <Typography color={ 'white' } align={ 'center' }>
                        Contact Us
                    </Typography>
                    <Typography color={ 'white' } align={ 'center' }>
                        of squmare reptiles, with over 6,000 species,
                    </Typography>
                    <Typography color={ 'white' } align={ 'center' }>
                        continents except Antarctic
                    </Typography>
                    <Typography color={ 'white' } align={ 'center' }>
                        ranging acros
                    </Typography>
                </Box>

                <Box flex={ 1 }>
                    <Typography color={ 'white' } align={ 'center' }>
                        Data policy
                    </Typography>
                    <Typography color={ 'white' } align={ 'center' }>
                        cookies
                    </Typography>
                    <Typography color={ 'white' } align={ 'center' }>
                        Data Safety
                    </Typography>
                </Box>
                <Box flex={ 1 }>
                    <Typography color={ 'white' } align={ 'center' }>
                        Categories
                    </Typography>
                    <Typography color={ 'white' } variant={ 'body2' } align={ 'center' }>
                        Kids
                    </Typography>
                    <Typography color={ 'white' } variant={ 'body2' } align={ 'center' }>
                        Women
                    </Typography>
                    <Typography color={ 'white' } variant={ 'body2' } align={ 'center' }>
                        Men
                    </Typography>
                </Box>
                <Box>
                    <Typography color={ 'white' } align={ 'center' }>
                        Follow Us
                    </Typography>
                    <SocialBox>
                        <Facebook sx={ { color: 'lavender' } }/>
                        <Instagram sx={ { color: 'lavender' } }/>
                        <Twitter sx={ { color: 'lavender' } }/>
                    </SocialBox>
                </Box>
            </Stack>
        </Box>
    )
}

export default Footer
