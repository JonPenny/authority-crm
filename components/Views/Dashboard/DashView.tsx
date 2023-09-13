import { cva, type VariantProps } from "class-variance-authority"
import { CustomTable } from "components/Bits/Table/CustomTable"
import llogo from "../../../images/LLlogo.png"
import { twMerge } from "tailwind-merge"
import { BaseView } from "../BaseView/BaseView"
import { CustomerTable } from "components/Bits/Table/CustomerTable"

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

export interface dashViewProps {
//   underline?: boolean
   className: string
   intent:  "primary" |"secondary" | "tertiary"
}

export function DashView({ className, intent, ...props }: dashViewProps) {
    console.log(llogo)
  return (
      <BaseView title="Service Dashboard"> 
        <CustomerTable/>
        <CustomerTable/>
      </BaseView>


   
  )
}
