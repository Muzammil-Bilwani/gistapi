import { Octokit } from "@octokit/rest"
import { FC } from "react"
import { State } from "../../constants/Messages"
import { AlertIcon, InboxIcon } from "@primer/octicons-react"

type MessageProps = {
  message: string
  state: State
}

const ICON_MAP = {
  [State.ERROR]: <AlertIcon />,
  [State.NODATA]: <InboxIcon />
}

const Message: FC<MessageProps> = ({ message, state }) => {
  return (
    <div className="message">
      {ICON_MAP[state]}
      <p>{message}</p>
    </div>
  )
}

export default Message
