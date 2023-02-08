import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';

const TaskBar=()=> {
  return (
    <>
      <AppBar color="primary" >
        <Toolbar variant="dense" >
          <Box sx={{ pr: 6 }} >
            <Link href="/" color="inherit">
              ChatGPT
            </Link>
          </Box>
          <Box sx={{ pr: 6 }}>
            <Link href="/finance" color="inherit">
              Finance
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default TaskBar
