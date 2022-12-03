// ** MUI Import
import { useTheme } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const FallbackSpinner = ({ sx }: { sx?: BoxProps['sx'] }) => {
  // ** Hook
  const theme = useTheme()

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
     <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="512" height="512" rx="80" fill="white"/>
<path d="M92.0024 52C163.441 52 180.995 98.492 180.995 161.404V210.065C210.234 175.366 220.481 163.203 249.719 128.504C311.434 55.2536 321.241 52 420.354 52L252.19 245.598C305.38 317.076 358.572 388.55 411.764 460.025C356.166 460.025 290.089 441.687 258.836 399.727L180.995 295.222V460.025C119.895 460.025 92.0024 384.049 92.0024 329.976C92.0024 205.458 92.0024 176.518 92.0024 52Z" fill="url(#paint0_linear_86_217)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M192.568 196.329C243.038 156.758 338.106 89.469 347.163 136.261L420.355 52C321.241 52 311.435 55.2536 249.717 128.501C224.695 158.2 213.581 171.39 192.568 196.329Z" fill="#FCE2A6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M92.0908 295.222C92.0908 295.222 129.839 207.865 181.084 377.625V295.222C181.084 295.222 104.415 198.503 92.0908 295.222Z" fill="url(#paint1_linear_86_217)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M411.761 460.025C411.761 460.025 185.323 392.472 215.355 169.283C205.484 180.998 195.612 192.713 180.993 210.063C180.993 210.063 115.373 264.856 92 175.583V295.222C104.324 198.503 180.993 295.222 180.993 295.222L258.831 399.727C290.087 441.687 356.163 460.025 411.761 460.025Z" fill="url(#paint2_linear_86_217)"/>
<defs>
<linearGradient id="paint0_linear_86_217" x1="177.837" y1="256.013" x2="284.982" y2="256.013" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF74A6"/>
<stop offset="1" stop-color="#FFC371"/>
</linearGradient>
<linearGradient id="paint1_linear_86_217" x1="123.898" y1="297.258" x2="233.005" y2="359.065" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF74A6"/>
<stop offset="1" stop-color="#FFC371"/>
</linearGradient>
<linearGradient id="paint2_linear_86_217" x1="293.216" y1="376.749" x2="119.831" y2="196.561" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF74A6"/>
<stop offset="1" stop-color="#FFC371"/>
</linearGradient>
</defs>
</svg>

      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </Box>
  )
}

export default FallbackSpinner
