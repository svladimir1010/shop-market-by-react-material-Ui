import { Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import kidsImage from '../../static/kids.jpg'
import menImage from '../../static/men.jpg'
import womenImage from '../../static/women.jpg'

const StyledBox = styled( Box )( {
    height: 200,
    width: '100%',
    cursor: 'pointer',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
} )

const StyledTypography = styled( Typography )( {
    margin: '25% 50px 25% 50Px',
    background: 'white',
    opacity: '.8',
} )
const Categories = () => {
    return <Box>
        <Stack direction={{xs: 'column', sm: 'row'}} spacing={{xs:1,sm:2, md:4}} mt={4}>
            <StyledBox sx={ { backgroundImage: `url(${ kidsImage })` } }>
                <StyledTypography align="center" variant="h3">
                    Kids
                </StyledTypography>
            </StyledBox>
            <StyledBox sx={ { backgroundImage: `url(${ menImage })` } }>
                <StyledTypography align="center" variant="h3">
                    Men
                </StyledTypography>
            </StyledBox>
            <StyledBox sx={ { backgroundImage: `url(${ womenImage })` } }>
                <StyledTypography align="center" variant="h3">
                    Women
                </StyledTypography>
            </StyledBox>

        </Stack>

    </Box>

}

export default Categories
