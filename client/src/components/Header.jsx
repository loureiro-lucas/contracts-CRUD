import React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = ({ pathname }) => {
  const history = useHistory();

  const username = localStorage.getItem("username");

  return (
    <AppBar
      position="static"
      sx={{ minWidth: "1048px" }}
    >
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Button
            type="button"
            variant="contained"
            sx={{ my: 2, mr: 2, color: '#1976D2', backgroundColor: 'white' }}
            onClick={ () => history.push('/contracts') }
            disabled={ pathname === '/contracts' }
          >
            Contracts
          </Button>
          <Button
            type="button"
            variant="contained"
            sx={{ my: 2, mr: 2, color: '#1976D2', backgroundColor: 'white' }}
            onClick={ () => history.push('/new-contract') }
            disabled={ pathname === '/new-contract' }
          >
            New Contract
          </Button>
        </Box>
        <Typography
          variant="h6"
          component="p"
        >
          Usuário: { username }
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
