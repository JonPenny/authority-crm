import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { BaseView } from "../BaseView/BaseView"
import { CustomerTable } from "components/Bits/Table/CustomerTable"
import { JobTable } from "components/Bits/Table/JobsTable"

import { EmployeeTable } from "components/Bits/Table/EmployeeTable"

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-xl",
    "text-center",
    "border",
    "transition-colors",
    "delay-50",
    "hover:cursor-pointer	"
  ],
  {
    variants: {
      intent: {
        primary: ["bg-primary", "font-semibold", "text-white"],
        secondary: ["bg-accent", "font-semibold", "text-white"],
        tertiary: ["bg-transparent", "border-primary", "text-primary", "hover:bg-primary", "hover:text-white", "hover:enabled:text-white"],
      },
      size: {
        sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
        lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)


enum Direction {
    "primary", "secondary", "tertiary"
  }

export interface employeeViewProps {
//   underline?: boolean
   className: string
   intent:  "primary" |"secondary" | "tertiary"
}

export function EmployeeView({ className, intent, ...props }: employeeViewProps) {
  return (
      <BaseView title="Service Team"> 
        <EmployeeTable/>
      </BaseView>


   
  )
}
