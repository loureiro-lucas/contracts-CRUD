import React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = ({ pathname }) => {
  const history = useHistory();

  return (
    <AppBar
      position="static"
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
            onClick={ () => history.push('/new-contract') }
            disabled={ pathname === '/new-contract' }
          >
            New Contract
          </Button>
          <Button
            type="button"
            variant="contained"
            sx={{ my: 2, mr: 2, color: '#1976D2', backgroundColor: 'white' }}
            onClick={ () => history.push('/contracts') }
            disabled={ pathname === '/contracts' }
          >
            Contracts
          </Button>
        </Box>
        <Typography
          variant="h6"
          component="p"
        >
          Usuário: email
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
