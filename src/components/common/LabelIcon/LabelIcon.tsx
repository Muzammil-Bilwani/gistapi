import { FC, ReactNode } from "react"

import "./labelIcon.css"

type LabelIconProps = {
  label: string
  icon: ReactNode
  url?: string
}

const LabelIcon: FC<LabelIconProps> = ({ label, icon, url }) => {
  return (
    <a href={url} target="__blank" className="labelIcon">
      {icon}
      <span>{label}</span>
    </a>
  )
}

export default LabelIcon
