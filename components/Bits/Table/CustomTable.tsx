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
  ],
  {
    variants: {
      intent: {
        primary: ["text-black", "hover:enabled:bg-red-700"],
        secondary: ["text-color-blue-400", "hover:enabled:bg-blue-400", "hover:enabled:text-white"],
      },
      size: {
        full: ["text-lg", "py-2.5", "px-6", "w-full", "h-1/2"],
        small: ["text-lg", "py-2.5", "px-6",  "min-w-[900px]", "w-screen/2"],
      },

    },
    defaultVariants: {
      intent: "primary",
      size: "full",
    },
  }
)


export interface TableProps  {
  className?: String,
  size?: "small" | "full"
  columns?: GridColDef[],
  rows?: GridRowsProp
  intent?: "primary" | "secondary"
}

export function CustomTable({ className, intent, size, ...props }: TableProps) {
  if(!props.columns){
    props.columns = []
  }
  if(!props.rows){
    props.rows = []
  } 

  return (
    <a className={twMerge(customTable({ intent, size, className, }))} {...props}>
      <DataGrid
        rowHeight={30}
        className="w-full bg-white dark:text-white dark:bg-stone-800 rounded  border border-slate-300 dark:border-slate-900"
        columns={props.columns}
        rows={props.rows}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
      />
    </a>
  )
}
