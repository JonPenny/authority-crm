import { cva, type VariantProps } from "class-variance-authority"
import { CustomTable } from "components/Bits/Table/CustomTable"
import { twMerge } from "tailwind-merge"
import { BaseView } from "../BaseView/BaseView"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { JobTable } from "components/Bits/Table/JobsTable"


const scheduler = cva(
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
        primary: [ "font-semibold", "text-white"],
        secondary: [, "font-semibold", "text-white"],
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

export interface schedulerViewProps {
//   underline?: boolean
   className: string
   intent:  "primary" |"secondary" | "tertiary"
}

export function SchedulerView({ className, intent, ...props }: schedulerViewProps) {
  const localizer = momentLocalizer(moment)
  return (
      <BaseView title="Service Scheduling"> 
        <div className="pb-10"> 
          <div > 
            <JobTable intent="secondary"/>
          </div>
          <div className="bg-white border border-slate-300 rounded p-2" >
            <Calendar
            className=""
              localizer={localizer}
              events={[]}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </div>
       
        </div>
      </BaseView>


   
  )
}
