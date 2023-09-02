import { Octokit } from "@octokit/rest"
import { FC } from "react"
import Octicon from "octicons-react-ts"
import { State } from "../../constants/Messages"

type MessageProps = {
  message: string
  state: State
}

const ICON_MAP = {
  [State.ERROR]: "alert",
  [State.NODATA]: "info"
}

const Message: FC<MessageProps> = ({ message, state }) => {
  return (
    <div className="message">
      <Octicon name={ICON_MAP[state]} />
      <p>{message}</p>
    </div>
  )
}

export default Message
