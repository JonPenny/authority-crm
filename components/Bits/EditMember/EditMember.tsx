import { cva, type VariantProps } from "class-variance-authority"
import { Calendar } from "react-big-calendar"

import { twMerge } from "tailwind-merge"
import { JobTable } from "../Table/JobsTable"
import DynamicWidthInput from "./DynamicInput"

const editMember = cva(
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

export interface EditMemberProps  {
 
}

export function EditMember({ ...props }: EditMemberProps) {
  return (
    <div className="w-full"> 
      <div className="w-5/6 h-5/6 bg-background dark:darkBachround rounded border border-gray-400">
        <div> 
          <h2 className="text-l font-semibold whitespace-nowrap dark:text-white pt-4 px-4 bg-background dark:bg-darkBackground"> Team Member </h2>
        </div>

        <div className="px-5 py-2"> 
          <form> 
            <div className="rounded bg-white p-2"> 
                <div className="py-1 m-0"> 

                <DynamicWidthInput label="Name" placeholder="Bob Smith"/>
                <DynamicWidthInput label="Phone Number" placeholder="111-111-1111"/>
                <DynamicWidthInput label="Email" placeholder="bob@smith.com"/>
                <DynamicWidthInput label="Booked Hours" placeholder="20"/>

                <label className="inline-block w-32"> Crew </label>
                <select
                  id="dropdown"
                  className="bg-gray-300 px-2 mx-2 rounded placeholder-black focus:bg-background m-1 h-6  focus-selected:border-accent  border-gray-300"
                  >
                  <option value="Unassigned">Unassigned</option>
                  <option value="Marks">Mark's</option>
                  <option value="Jerrys">Jerry's</option>
                </select>
                </div>
            </div>
            <button className="rounded bg-secondary px-2 mt-5"> Update </button>

          </form>



        </div>
        <div className="m-4"> 
          <JobTable/>

        </div>
       




      </div>
    </div>

  )
}
