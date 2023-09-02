import "./gistList.css"
import Gist from "./Gist/Gist"
import Loading from "../common/Loading/Loading"
import useGists from "../../hooks/useGists"
import { Messages, State } from "../constants/Messages"
import Message from "../common/Message/Message"

const GistList = () => {
  const { isLoading, error, gists } = useGists()

  return isLoading ? (
    <Loading />
  ) : error ? (
    <Message message={Messages.SOMETHING_WENT_WRONG} state={State.ERROR} />
  ) : (
    <div className="container">
      {gists?.map((gist) => <Gist key={gist.id} gist={gist} />)}
    </div>
  )
}

export default GistList
