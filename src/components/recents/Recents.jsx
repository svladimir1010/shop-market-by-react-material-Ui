import { Box, Grid } from '@mui/material'
import React from 'react'
import postImage1 from '../../static/image1.jpg'
import postImage2 from '../../static/image2.jpg'
import cardImage from '../../static/image3.jpg'
import postImage3 from '../../static/image3.jpg'
import postImage4 from '../../static/image4.jpg'
import Card from '../card'

const Recents = () => {
    return (
        <Box>
            <Grid container xs={12} rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 1 } }>
                {/*<Grid item md={ 6 } xs={ 12 }>*/ }
                <Grid item>
                    <Card cardImage={ cardImage }/>
                </Grid>
                <Grid item md={ 6 } xs={ 12 }>
                    <Card cardImage={ postImage1 }/>
                </Grid>
                <Grid item md={ 6 } xs={ 12 }>
                    <Card cardImage={ postImage2 }/>
                </Grid>
                <Grid item md={ 6 } xs={ 12 }>
                    <Card cardImage={ postImage3 }/>
                </Grid>
                <Grid item md={ 6 } xs={ 12 }>
                    <Card cardImage={ postImage4 }/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Recents
