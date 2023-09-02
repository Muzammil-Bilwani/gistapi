import "./gistList.css"
import Gist from "./Gist/Gist"
import Loading from "../common/Loading/Loading"
import { Messages, State } from "../constants/Messages"
import Message from "../common/Message/Message"
import React, { useContext } from "react"
import GistContext from "../../context/GistContext"
import { GistContextValue } from "../../context/GistProvider"

const GistList = () => {
  const { isLoading, gists, error } = useContext(
    GistContext
  ) as GistContextValue

  if (isLoading) return <Loading />

  if (error)
    return (
      <Message message={Messages.SOMETHING_WENT_WRONG} state={State.ERROR} />
    )

  if (gists?.length === 0) {
    return <Message message={Messages.GIST_NOT_FOUND} state={State.NODATA} />
  }

  return (
    <div className="container">
      {gists?.map((gist) => <Gist key={gist.id} gist={gist} />)}
    </div>
  )
}

export default GistList
