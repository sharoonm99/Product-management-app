import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons() {
  return (
    <Stack direction="row">
      <Button variant="contained" sx={{borderRadius:"20px",bgcolor:"#EDA415"}}>
        Search
      </Button>
    </Stack>
  );
}
