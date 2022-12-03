// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridRowId } from '@mui/x-data-grid'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import format from 'date-fns/format'
import DatePicker from 'react-datepicker'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, deleteInvoice } from 'src/store/apps/invoice'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'
import { ThemeColor } from 'src/@core/layouts/types'
import { InvoiceType } from 'src/types/apps/invoiceTypes'
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import TableHeader from 'src/views/apps/invoice/list/TableHeader'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

interface InvoiceStatusObj {
  [key: string]: {
    icon: string
    color: ThemeColor
  }
}

interface CustomInputProps {
  dates: Date[]
  label: string
  end: number | Date
  start: number | Date
  setDates?: (value: Date[]) => void
}

interface CellType {
  row: InvoiceType
}

// ** Styled component for the link in the dataTable
const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

// ** Vars
const invoiceStatusObj: InvoiceStatusObj = {
  // Sent: { color: 'secondary', icon: 'mdi:send' },
  // Paid: { color: 'success', icon: 'mdi:check' },
  // Draft: { color: 'primary', icon: 'mdi:content-save-outline' },
  // 'Partial Payment': { color: 'warning', icon: 'mdi:chart-pie' },
  // 'Past Due': { color: 'error', icon: 'mdi:information-outline' },
  // Downloaded: { color: 'info', icon: 'mdi:arrow-down' }
}

// ** renders client column
const renderClient = (row: InvoiceType) => {

}

const defaultColumns = [

  // {
  //   flex: 0.1,
  //   minWidth: 80,
  //   renderCell: ({ row }: CellType) => {
  //     const { dueDate, balance, invoiceStatus } = row

  //     const color = invoiceStatusObj[invoiceStatus] ? invoiceStatusObj[invoiceStatus].color : 'primary'

  //     return (
  //       <Tooltip
  //         title={
  //           <div>
  //             <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
  //               {invoiceStatus}
  //             </Typography>
  //             <br />
  //             <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
  //               Balance2:
  //             </Typography>{' '}
  //             {balance}
  //             <br />
  //             <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
  //               Due Date:
  //             </Typography>{' '}
  //             {dueDate}
  //           </div>
  //         }
  //       >
  //         <CustomAvatar>

  //         </CustomAvatar>
  //       </Tooltip>
  //     )
  //   }
  // },
  // {
  //   flex: 0.25,
  //   field: 'name',
  //   minWidth: 300,
  //   headerName: 'Client',
  //   renderCell: ({ row }: CellType) => {
  //     const { name, companyEmail } = row

  //     return (
  //       <Box sx={{ display: 'flex', alignItems: 'center' }}>
  //         {renderClient(row)}
  //         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  //           <Typography
  //             noWrap
  //             variant='body2'
  //             sx={{ color: 'text.primary', fontWeight: 500, lineHeight: '22px', letterSpacing: '.1px' }}
  //           >
  //             {name}
  //           </Typography>
  //           <Typography noWrap variant='caption'>
  //             {companyEmail}
  //           </Typography>
  //         </Box>
  //       </Box>
  //     )
  //   }
  // },
  // {
  //   flex: 0.1,
  //   minWidth: 90,
  //   field: 'total',
  //   headerName: 'Total',
  //   renderCell: ({ row }: CellType) => <Typography variant='body2'>{`$${row.total || 0}`}</Typography>
  // },
  // {
  //   flex: 0.15,
  //   minWidth: 125,
  //   field: 'issuedDate',
  //   headerName: 'Issued Date',
  //   renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.issuedDate}</Typography>
  // },
  // {
  //   flex: 0.1,
  //   minWidth: 90,
  //   field: 'balance',
  //   headerName: 'Balance',
  //   renderCell: ({ row }: CellType) => {
  //     return row.balance !== 0 ? (
  //       <Typography variant='body2' sx={{ color: 'text.primary' }}>
  //         {row.balance}
  //       </Typography>
  //     ) : (
  //       <CustomChip size='small' skin='light' color='success' label='Paid' />
  //     )
  //   }
  // }
]

/* eslint-disable */
const CustomInput = forwardRef((props: CustomInputProps, ref) => {
  const startDate = props.start !== null ? format(props.start, 'MM/dd/yyyy') : ''
  const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null

  const value = `${startDate}${endDate !== null ? endDate : ''}`
  props.start === null && props.dates.length && props.setDates ? props.setDates([]) : null
  const updatedProps = { ...props }
  delete updatedProps.setDates

  return <TextField fullWidth inputRef={ref} {...updatedProps} label={props.label || ''} value={value} />
})
/* eslint-enable */

const InvoiceList = () => {
  // ** State
  const [dates, setDates] = useState<Date[]>([])
  const [value, setValue] = useState<string>('')
  const [pageSize, setPageSize] = useState<number>(10)
  const [statusValue, setStatusValue] = useState<string>('')
  const [endDateRange, setEndDateRange] = useState<DateType>(null)
  const [selectedRows, setSelectedRows] = useState<GridRowId[]>([])
  const [startDateRange, setStartDateRange] = useState<DateType>(null)

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.invoice)

  useEffect(() => {
    dispatch(
      fetchData({
        dates,
        q: value,
        status: statusValue
      })
    )
  }, [dispatch, statusValue, value, dates])

  const handleFilter = (val: string) => {
    setValue(val)
  }

  const handleStatusValue = (e: SelectChangeEvent) => {
    setStatusValue(e.target.value)
  }

  const handleOnChangeRange = (dates: any) => {
    const [start, end] = dates
    if (start !== null && end !== null) {
      setDates(dates)
    }
    setStartDateRange(start)
    setEndDateRange(end)
  }

  const columns = [
    ...defaultColumns,
    {
      flex: 0.1,
      minWidth: 130,
      sortable: false,


      renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <OptionsMenu
            iconProps={{ fontSize: 20 }}
            iconButtonProps={{ size: 'small' }}
            menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
            options={[
              {
                text: 'Chia sẻ',
                href: `/apps/invoice/edit/${row.id}`,
                icon: <Icon icon='mdi-share' fontSize={20} />
              },
              {
                text: 'Nhận đường liên kết',
                href: `/apps/invoice/edit/${row.id}`,
                icon: <Icon icon='mdi-share-variant' fontSize={20} />
              },
              {
                text: 'Di chuyển tới',
                href: `/apps/invoice/edit/${row.id}`,
                icon: <Icon icon='mdi-cursor-move' fontSize={20} />
              },
              {
                text: 'Thêm vào thư mục yêu thích',
                href: `/apps/invoice/edit/${row.id}`,
                icon: <Icon icon='mdi-heart' fontSize={20} />
              },
              {
                text: 'Đổi tên',
                href: `/apps/invoice/edit/${row.id}`,
                icon: <Icon icon='mdi:pencil-outline' fontSize={20} />
              },
              {
                text: 'Tải xuống',
                icon: <Icon icon='mdi:download' fontSize={20} />
              },
              {
                text: 'Xóa',
                href: `/apps/invoice/edit/${row.id}`,
                icon: <Icon icon='mdi-delete' fontSize={20} />
              }
            ]}
          />
        </Box>
      )
    }
  ]

  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
      <TableHeader value={value} selectedRows={selectedRows} handleFilter={handleFilter} />
        <Grid >
          <Card>
            {/* <DataGrid
              autoHeight
              pagination
              rows={store.data}
              columns={columns}
              checkboxSelection
              disableSelectionOnClick
              pageSize={Number(pageSize)}
              rowsPerPageOptions={[10, 25, 50]}
              onSelectionModelChange={rows => setSelectedRows(rows)}
              onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            /> */}
            <Grid
            sx={{
              p: 5,
              pb: 3,
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '200px'
            }}
            >
              aaaaaaaaaaaaaaaaaaaa
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default InvoiceList
