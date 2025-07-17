import { Box, Grid } from '@mui/material'
import React from 'react'
import { 
  TextField, 
  Button, 
  Typography, 
  Container,  
  Stack 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


export default function Navbar() {
  return (
    <div>
        <Grid 
           sx={{
            bgcolor:'#003F62',
            height:'100px',            
            }}>

        </Grid>


          <Container maxWidth="sm">
      <Box 
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4
        }}
      >
        <Stack direction="row" spacing={2} sx={{ width: '100%'}}>
          <TextField
            fullWidth
            placeholder="Search any things"
            variant="outlined"
            InputProps={{
              style: {
                      borderRadius: "20px"
                    }
              // startAdornment: <SearchIcon color="action" />,
            }}
          />
          <Button 
            sx={{ 
              width:"132px",
              height:"56px" ,
              borderRadius: "20px",
              marginLeft:"-130px",
              bgcolor:'#EDA415'}}
          >
            Search
          </Button>
        </Stack>
      </Box>
    </Container>
    </div>
  )
}
