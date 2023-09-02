import { FC } from "react"
import Octicon from "octicons-react-ts"

import "./labelIcon.css"

type LabelIconProps = {
  label: string
  iconName: string
  url?: string
}

const LabelIcon: FC<LabelIconProps> = ({ label, iconName, url }) => {
  return (
    <a href={url} target="__blank" className="labelIcon">
      <Octicon class={["icon"]} name={iconName} />
      <span>{label}</span>
    </a>
  )
}

export default LabelIcon
