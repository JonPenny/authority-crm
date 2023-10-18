import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { BaseView } from "../BaseView/BaseView"
import 'react-big-calendar/lib/css/react-big-calendar.css';
import GoogleMapReact from 'google-map-react';
import { JobTable } from "components/Bits/Table/JobsTable";
import Toggle from 'react-toggle'
import 'react-toggle/style.css'; // Import the default styles

import { useState } from "react";
import { CustomerTable } from "components/Bits/Table/CustomerTable";

const map = cva(
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

export interface mapViewProps {
//   underline?: boolean
   className: string
   intent:  "primary" |"secondary" | "tertiary"
}

export function MapView({ className, intent, ...props }: mapViewProps) {
  const [toggleState, setToggleState] = useState(false)

  const handleToggle = (state:boolean) => {
    setToggleState(!state)
  }

  const defaultProps = {
    center: {
      lat: 45.324835889116656, 
      lng: -75.786924053219
    },
    zoom: 11
  };

  const customerTitleStyle = toggleState ? "text-gray-400  dark:bg-black" : "text-black";
  const jobsTitleStyle = !toggleState ? "text-gray-400" : "text-black";

  const span_classes = " cursor-pointer"

  return (
      <BaseView title="Service Map"> 

      <div className="pt-4">
      <label> 
        <span className={customerTitleStyle + span_classes} onClick={() => handleToggle(true)}> Customers </span> <span onClick={() => handleToggle(false)} className={jobsTitleStyle  + span_classes + " px-5"}> Jobs </span>
      </label>

      {toggleState ? <JobTable/> : <CustomerTable></CustomerTable>}
        <div className="w-full h-[100vh] ">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
          
          </GoogleMapReact>
        </div>
      </div>

      </BaseView>




   
  )
}
