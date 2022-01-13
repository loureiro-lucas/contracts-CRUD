import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const NewContractForm = () => {
  return (
    <Container>
      <Typography variant="h5" component="h1" my={ 2 }>
        Create Contract
      </Typography>
      <form
        onSubmit=''
        autoComplete='off'
      >
        <Container sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          minWidth: "800px",
        }}>
          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ flexGrow: 1 }}>
              <InputLabel id="country-label">Country</InputLabel>
              <Select
                labelId="country-label"
                name="country"
                label="Country"
                value=''
                size="small"
                sx={{ m: 1 }}
                onChange=''
                >
                <MenuItem disabled value={''}></MenuItem>
                <MenuItem value='brasil'>Brasil</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <InputLabel id="state-label">State</InputLabel>
              <Select
                labelId="state-label"
                name="state"
                label="State"
                value=''
                size="small"
                sx={{ m: 1 }}
                onChange=''
                >
                <MenuItem disabled value={''}></MenuItem>
                <MenuItem value='MG'>Minas Gerais</MenuItem>
              </Select>
            </FormControl>
            <TextField
              type="text"
              name="city"
              label="City"
              variant="outlined"
              size="small"
              sx={{ m: 1, flexGrow: 1 }}
              value=''
              onChange=''
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <TextField
              type="number"
              name="documentNumber"
              label="Document Number"
              variant="outlined"
              size="small"
              sx={{ m: 1, flexGrow: 0.3 }}
              value=''
              onChange=''
            />
            <TextField
              type="text"
              name="socialReason"
              label="Social Reason"
              variant="outlined"
              size="small"
              sx={{ m: 1, flexGrow: 1 }}
              value=''
              onChange=''
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <TextField
              type="text"
              name="adress"
              label="Adress"
              variant="outlined"
              size="small"
              sx={{ m: 1, flexGrow: 1 }}
              value=''
              onChange=''
            />
            <TextField
              type="text"
              name="district"
              label="District"
              variant="outlined"
              size="small"
              sx={{ m: 1, flexGrow: 0.3 }}
              value=''
              onChange=''
            />
            <TextField
              type="number"
              name="number"
              label="Number"
              variant="outlined"
              size="small"
              sx={{ width: "120px",m: 1 }}
              value=''
              onChange=''
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <TextField
              type="number"
              name="zipCode"
              label="Zip Code"
              variant="outlined"
              size="small"
              sx={{ m: 1, flexGrow: 0.5 }}
              value=''
              onChange=''
            />
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              size="small"
              sx={{ m: 1, flexGrow: 1 }}
              value=''
              onChange=''
            />
            <TextField
              type="tel"
              name="phone"
              label="Phone"
              variant="outlined"
              size="small"
              sx={{ m: 1, flexGrow: 0.5 }}
              // value=''
              onChange=''
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <TextField
              type="date"
              name="startsIn"
              label="Contract starts in"
              variant="outlined"
              size="small"
              sx={{ m: 1, flexGrow: 1 }}
              InputLabelProps={{
                shrink: true,
              }}
              // value=''
              onChange=''
            />
            <TextField
              type="date"
              name="endsIn"
              label="Contract ends in"
              variant="outlined"
              size="small"
              sx={{ m: 1, flexGrow: 1 }}
              InputLabelProps={{
                shrink: true,
              }}
              // value=''
              onChange=''
            />
            <FormControl sx={{ flexGrow: 1 }}>
              <InputLabel id="dueDay-label">Due day</InputLabel>
              <Select
                labelId="dueDay-label"
                name="dueDay"
                label="Due Day"
                value=''
                size="small"
                sx={{ m: 1}}
                onChange=''
                >
                <MenuItem disabled value={''}></MenuItem>
                <MenuItem value='1'>1</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ flexGrow: 1 }}>
                <InputLabel id="company-label">Due day</InputLabel>
                <Select
                  labelId="company-label"
                  name="company"
                  label="Select a company"
                  value=''
                  size="small"
                  sx={{ m: 1 }}
                  onChange=''
                  >
                  <MenuItem disabled value={''}></MenuItem>
                  <MenuItem value='company1'>Company 1</MenuItem>
                </Select>
              </FormControl>
              <TextField
                type="file"
                name="contractFile"
                label="Upload the contract"
                variant="outlined"
                size="small"
                sx={{ m: 1, flexGrow: 1 }}
                InputLabelProps={{
                  shrink: true,
                }}
                // value=''
                onChange=''
              />
          </Box>
        </Container>
      </form>
    </Container>
  );
};

export default NewContractForm;
