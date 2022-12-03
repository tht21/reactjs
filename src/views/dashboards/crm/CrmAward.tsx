// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
// import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Styled component for the trophy image
// const TrophyImg = styled('img')(({ theme }) => ({
//   right: 22,
//   bottom: 0,
//   width: 106,
//   position: 'absolute',
//   [theme.breakpoints.down('sm')]: {
//     width: 95
//   }
// }))

const CrmAward = () => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>
          Welcome back,
          <Box component='span' sx={{ fontWeight: 'bold' }}>
          Drew
          </Box>
          ! 🎉
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CrmAward
