import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"


const customTable = cva(
  [
    // "justify-center",
    // "inline-flex",
    // "items-center",
    // "rounded-xl",
    // "text-center",
    // "transition-colors",
    "delay-50",
    "min-w-[900px]",
    "w-screen/2"
  ],
  {
    variants: {
      intent: {
        primary: ["bg-background", "text-black", "hover:enabled:bg-red-700"],
        secondary: ["bg-white", "text-color-blue-400", "hover:enabled:bg-blue-400", "hover:enabled:text-white"],
      },
      size: {
        // sm: ["text-sm", "py-1.5", "px-4"],
        // lg: ["text-lg", "py-2.5", "px-6"],
      },

    },
    defaultVariants: {
      intent: "primary",
      // size: "lg",
    },
  }
)


export interface TableProps extends React.ButtonHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof customTable> {
  columns: GridColDef[],
  rows: GridRowsProp
}

export function CustomTable({ className, intent, size, ...props }: TableProps) {
  return (
    <a className={twMerge(customTable({ intent, size, className, }))} {...props}>
      <DataGrid
        className="w-full"
        columns={props.columns}
        rows={props.rows}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
      />
      {props.children}
    </a>
  )
}
