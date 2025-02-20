import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { CustomTable } from './CustomTable';
import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { TableProps } from './CustomTable';

const customTable = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-xl",
    "text-center",
    "transition-colors",
    "delay-50",

  ],
  {
    variants: {
      intent: {
        primary: ["bg-background", "text-black", "hover:enabled:bg-red-700"],
        secondary: ["bg-white", "text-color-blue-400", "hover:enabled:bg-blue-400", "hover:enabled:text-white"],
      },
      size: {
        sm: [ "text-sm", "py-1.5", "px-4"],
        lg: ["h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
      },

    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)


export interface CustomerTableProps extends TableProps{

}

export function CustomerTable({ ...props }: CustomerTableProps) {

    const rows: GridRowsProp = props.rows ? props.rows : [
        { id: 1, col1: 'Bob', col2: '1212 Bob Ave', col3: 2, col4: "111-111-1111", col5: "Jan 2nd"},
        { id: 2, col1: 'Jerry', col2: '219 Jerry Ave', col3: 0, col4: "jerry@jerry.com", col5: "Jan 5th"},
        { id: 3, col1: 'Smith', col2: '8 Smith Street', col3: 0, col4: "222-222-2222", col5: "Jan 3rd"},
      ];

    const columns: GridColDef[] = props.columns ? props.columns : [
        { field: 'col1', headerName: 'Name', flex: 1},
        { field: 'col2', headerName: 'Address', flex: 1},
        { field: 'col3', headerName: 'Outstanding Issues',flex: 1},
        { field: 'col4', headerName: 'Preferred Contact', flex: 1},
        { field: 'col5', headerName: 'Next Service', flex: 1},

      ];


  return (
    <CustomTable {...props} rows={rows} columns={columns} ></CustomTable>
  )
}
