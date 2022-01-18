import React, {useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom'
import { logout } from '../../actions/sessionsAction';
import { useDispatch, useSelector } from 'react-redux';
import UserAvatar from './UserAvatar';
// TODO clean and DRY this code up
// TODO the code needs to be changed so that it's more easily scaleable
const userPages = [ {title:"Home", link:'/home'}, {title:'New Quiz', link:'/newquiz'}, {title: 'All Quizzes', link:'/quizzes'}];
const noUserPages = [ {title:"Home", link:'/home'}, {title:'New Account', link:'/newaccount'}, {title:'Login',link:'/login'}];

const Navbar = () => {
  const [pages, setPages] = useState(noUserPages)
  const user = useSelector(state => state.sessions.user)

  useEffect(() => {
   setPages(user.id ? userPages : noUserPages)
  }, [user])

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const dispatch = useDispatch()
  //moving anchorElUser state to UserAvatar componenet
  //moving handleOpenUserMenu to UserAvatar
  //moving handleCloseUserMenu to UserAvatar

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    dispatch(logout())
    setPages(noUserPages)
    handleCloseNavMenu(null)
  }

    return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Quizhare
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                {pages.map(page=> 
                <MenuItem id={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink to={page.link}>{page.title}</NavLink></Typography>
                </MenuItem>)}
                {user.id ? <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center" onClick={handleLogout}><NavLink to='/home'>Logout</NavLink></Typography>
                </MenuItem> : null}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Quizhare
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><NavLink to={page.link}>
                {page.title}
                </NavLink>
              </Button>
            ))}
            {user.id ? <Button
                key='logout'
                onClick={handleLogout}
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><NavLink to='/home'>
                Logout
                </NavLink>
              </Button> : null}
          </Box>
          {user.id ? <UserAvatar /> : false}
        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default Navbar
