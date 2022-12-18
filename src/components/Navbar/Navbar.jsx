import { Facebook, Instagram, Menu as MenuIcon, Twitter } from '@mui/icons-material'
import { AppBar, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const Navbar = () => {

    const StyledToolbar = styled( Toolbar )( {
        display: 'flex',
        justifyContent: 'space-between',
        background: 'black',
    } )

    const SocialBox = styled( Box )( {
        display: 'flex',
        gap: 10,

    } )

    const MenuBox = styled( Box )( {
        display: 'flex',
        gap: 30,
        // flex: 1,
    } )

    const SearchBox = styled( Box )( {
        display: 'flex',
        gap: 5,
        alignItems: 'center',
    } )

    const MenuItems = [
        { name: 'Home', Link: '/' },
        { name: 'Product', Link: '#' },
        { name: 'Portfolio', Link: '#' },
        { name: 'Blog', Link: '#' },
        { name: 'Contact Us', Link: '#' },
    ]

    const [ open, setOpen ] = useState( false )

    return (
        <div>
            <AppBar sx={{background: 'black'}} position='static'>
                <StyledToolbar>
                    <SocialBox>
                        <Facebook sx={ { color: 'lavender' } }/>
                        <Instagram sx={ { color: 'lavender' } }/>
                        <Twitter sx={ { color: 'lavender' } }/>
                    </SocialBox>
                    <MenuBox sx={ { display: { xs: 'none', sm: 'none', md: 'flex' } } }>
                        { MenuItems.map( menu =>
                            <Typography key={ menu.name }
                                        sx={ { cursor: 'pointer', color: 'lavender', fontSize: '14px' } }>
                                { menu.name }
                            </Typography> ) }
                    </MenuBox>
                    <SearchBox sx={ { width: { xs: '60%', sm: '50%', md: '35%', lg: '20%', xl: '20%' } } }>
                        <InputBase placeholder="Search..." sx={ {
                            background: '#303030',
                            width: '100%',
                            color: 'white',
                            borderRadius: '4px',
                            padding: '2px'
                        } }
                        />
                        <MenuIcon sx={ {
                            color: 'white',
                            marginLeft: '40px',
                            display: { xs: 'block', sm: 'block', md: 'none' }
                        } }
                                  onClick={ ()=> setOpen(!open)}
                        />
                    </SearchBox>
                </StyledToolbar>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={ open }
                    onClose={ () => setOpen( !open ) }
                    anchorOrigin={ {
                        vertical: 'top',
                        horizontal: 'right',
                    } }
                    transformOrigin={ {
                        vertical: 'top',
                        horizontal: 'left',
                    } }
                >
                    <box sx={ {  width: '40px', height: '90vh' } }>
                        { MenuItems.map( menu => <MenuItem
                            key={ menu.name }
                            sx={ {
                                // color: 'black',
                                background: 'white',
                                cursor: 'pointer',
                                // color: 'white',
                                fontSize: '14px'
                            } }>
                            { menu.name }
                        </MenuItem> ) }
                    </box>
                </Menu>
            </AppBar>
        </div>
    )
}

export default Navbar
