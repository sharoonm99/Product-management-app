import { Box, Grid } from '@mui/material'
import Button from "../button/Button";
import React from 'react'
import { 
  TextField, 
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
          <Button/>
        </Stack>
      </Box>
    </Container>
    </div>
  )
}
