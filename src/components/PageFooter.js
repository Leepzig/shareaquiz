import React from 'react'
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

const PageFooter = (props) => {


  return (
    <div>
      {/* testingfrom footer.js */}
       <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/"> 
        Squirrley Brackets Inc.
       </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </div>
  )
}

export default PageFooter
