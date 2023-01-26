import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';

export default function TaskBar() {
  return (
    <>
      <AppBar color="primary">
        <Toolbar variant="dense">
          <Box sx={{ pr: 6 }}>
            <Link href="/" color="inherit">
              Home
            </Link>
          </Box>
          <Box sx={{ pr: 6 }}>
            <Link href="/about" color="inherit">
              Calendar
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
