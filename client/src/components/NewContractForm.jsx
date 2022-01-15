import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import NewContractContext from '../context/NewContractContext';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const NewContractForm = () => {
  const {
    newContractInput,
    handleNewContractInputs,
    companiesList
  } = useContext(NewContractContext);

  const countries = {
    Brasil: [
      'Acre',
      'Alagoas',
      'Amapá',
      'Amazonas',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espírito Santo',
      'Goiás',
      'Maranhão',
      'Mato Grosso',
      'Mato Grosso do Sul',
      'Minas Gerais',
      'Pará',
      'Paraíba',
      'Paraná',
      'Pernambuco',
      'Piauí',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rio Grande do Sul',
      'Rondônia',
      'Roraima',
      'Santa Catarina',
      'São Paulo',
      'Sergipe',
      'Tocantins',
    ],
    'Estados Unidos': [
      'Alabama',
      'Alasca',
      'Arkansas',
      'Arizona',
      'Califórnia',
      'Cansas',
      'Carolina do Norte',
      'Carolina do Sul',
      'Colorado',
      'Conecticute',
      'Dacota do Norte',
      'Dacota do Sul',
      'Delaware',
      'Flórida',
      'Geórgia',
      'Havaí',
      'Idaho',
      'Ilha de Rodes',
      'Ilinóis',
      'Indiana',
      'Iowa',
      'Kentucky',
      'Luisiana',
      'Maine',
      'Marilândia',
      'Massachussets',
      'Michigan',
      'Minesota',
      'Missssípi',
      'Missúri',
      'Montana',
      'Nebrasca',
      'Nevada',
      'Nova Hampshire',
      'Nova Jérsei',
      'Nova Iorque',
      'Novo México',
      'Oklahoma',
      'Ohio',
      'Óregon',
      'Pensilvânia',
      'Tenessi',
      'Texas',
      'Utah',
      'Vermonte',
      'Virgínia',
      'Virgínia Ocidental',
      'Washington',
      'Wisconsin',
      'Wyoming',
    ],
  };

  const dueDays = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
  ];

  return (
    <Container>
      <Typography variant="h5" component="h1" my={ 2 }>
        Create Contract
      </Typography>
      <form
        autoComplete='off'
      >
        <Container sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          minWidth: "1000px",
        }}>
          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ flexGrow: 1 }}>
              <InputLabel id="country-label">Country</InputLabel>
              <Select
                labelId="country-label"
                name="country"
                label="Country"
                value={ newContractInput.country }
                size="small"
                sx={{ m: 1 }}
                onChange={ handleNewContractInputs }
                >
                  <MenuItem disabled value={''}></MenuItem>
                  {
                    Object.keys(countries).map((country) => (
                      <MenuItem key={ country } value={ country }>{ country }</MenuItem>
                    ))
                  }
              </Select>
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <InputLabel id="state-label">State</InputLabel>
              <Select
                labelId="state-label"
                name="state"
                label="State"
                value={ newContractInput.state }
                size="small"
                sx={{ m: 1 }}
                onChange={ handleNewContractInputs }
                disabled={ newContractInput.country === '' }
              >
                <MenuItem disabled value={''}></MenuItem>
                {
                  countries[newContractInput.country || 'Brasil'].map((state) => (
                    <MenuItem key={ state } value={ state }>{ state }</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <TextField
              type="text"
              name="city"
              label="City"
              variant="outlined"
              size="small"
              sx={{ m: 1, flexGrow: 1 }}
              value={ newContractInput.city }
              onChange={ handleNewContractInputs }
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
              value={ newContractInput.documentNumber }
              onChange={ handleNewContractInputs }
            />
            <TextField
              type="text"
              name="socialReason"
              label="Social Reason"
              variant="outlined"
              size="small"
              sx={{ m: 1, flexGrow: 1 }}
              value={ newContractInput.socialReason }
              onChange={ handleNewContractInputs }
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
              value={ newContractInput.adress }
              onChange={ handleNewContractInputs }
            />
            <TextField
              type="text"
              name="district"
              label="District"
              variant="outlined"
              size="small"
              sx={{ m: 1, flexGrow: 0.3 }}
              value={ newContractInput.district }
              onChange={ handleNewContractInputs }
            />
            <TextField
              type="number"
              name="number"
              label="Number"
              variant="outlined"
              size="small"
              sx={{ width: "120px",m: 1 }}
              value={ newContractInput.number }
              onChange={ handleNewContractInputs }
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
              value={ newContractInput.zipCode }
              onChange={ handleNewContractInputs }
            />
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              size="small"
              sx={{ m: 1, flexGrow: 1 }}
              value={ newContractInput.email }
              onChange={ handleNewContractInputs }
            />
            <TextField
              type="tel"
              name="phone"
              label="Phone"
              variant="outlined"
              size="small"
              sx={{ m: 1, flexGrow: 0.5 }}
              value={ newContractInput.phone }
              onChange={ handleNewContractInputs }
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
              value={ newContractInput.startsIn }
              onChange={ handleNewContractInputs }
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
              value={ newContractInput.endsIn }
              onChange={ handleNewContractInputs }
            />
            <FormControl sx={{ flexGrow: 1, minWidth: "260px" }}>
              <InputLabel id="dueDay-label">Due day</InputLabel>
              <Select
                labelId="dueDay-label"
                name="dueDay"
                label="Due Day"
                value={ newContractInput.dueDay }
                size="small"
                sx={{ m: 1}}
                onChange={ handleNewContractInputs }
                >
                <MenuItem disabled value={''}></MenuItem>
                {
                  dueDays.map((dueDay) => (
                    <MenuItem key={ dueDay } value={ dueDay }>{ dueDay }</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ flexGrow: 1 }}>
                <InputLabel id="company-label">Select a company</InputLabel>
                <Select
                  labelId="company-label"
                  name="company"
                  label="Select a company"
                  value={ newContractInput.company }
                  size="small"
                  sx={{ m: 1 }}
                  onChange={ handleNewContractInputs }
                  >
                  <MenuItem disabled value={''}></MenuItem>
                  { companiesList.map(({ name }) => (
                    <MenuItem key={ name } value={ name }>{ name }</MenuItem>
                  )) }
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
                value={ newContractInput.contractFile }
                onChange={ handleNewContractInputs }
              />
          </Box>
        </Container>
      </form>
    </Container>
  );
};

export default NewContractForm;
