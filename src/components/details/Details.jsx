import { Box, CardMedia, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import postImage from '../../static/image3.jpg'
import detailsImage from '../../static/image5.jpg'
import Rightbar from '../rightbar'

const Details = () => {
    return (
        <Box>
            <Box sx={ {
                backgroundImage: `url(${ detailsImage })`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '250px',

            } }>
                <Typography variant="h2"
                            align="center"
                            color="black"
                            sx={ { fontWeight: 900, padding: 10 } }>
                    Clicked Post Title
                </Typography>
            </Box>
            <Container>
                <hr/>
                <Stack direction={ { xs: 'column', md: 'row' } }
                       spacing={ { xs: 1, sm: 2, md: 8 } }
                       mt={ 8 }
                >
                    <Box flex={ 3 } sx={ { padding: '18px 100px 100px 100px' } }>
                        <Typography m={ 4 }
                                    align="center"
                                    color={ 'gray' }
                                    variant="body1"
                                    sx={ { fontWeight: 900 } }
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been
                            the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of
                            type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but
                            a

                        </Typography>
                        <CardMedia
                            component="img"
                            height="300px"
                            image={ postImage }
                            alt="green iguana"
                        />

                        <Typography variant="h4" align="center" mt={ 2 }>
                            wait for it wait
                        </Typography>

                        <Typography m={ 4 }
                                    color={ 'gray' }
                                    variant="body1"
                                    sx={ { fontWeight: 900 } }
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.

                        </Typography>
                    </Box>
                    <Box flex={ 1 }>
                        <Rightbar/>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default Details
