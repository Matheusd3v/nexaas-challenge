import magnifier from "../../../assets/Shape.png"
import { MagnifierIcon } from "./style"

export const Magnifier = ({ height=20, width=20 }) => {
  return (
    <MagnifierIcon 
        src={magnifier} 
        alt="magnifier" 
        height={height}
        width={width}
    />
  )
}
