// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import CrmAward from 'src/views/dashboards/crm/CrmAward'


const CrmDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6} className='match-height'>
        <Grid item xs={12} md={8}>
          <CrmAward />
        </Grid>

      </Grid>
    </ApexChartWrapper>
  )
}

export default CrmDashboard
