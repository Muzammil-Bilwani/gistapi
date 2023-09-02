/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react"

import "./gist.css"
import LabelIcon from "../../common/LabelIcon/LabelIcon"
import { formatDate } from "../../../services/helper"
import {
  CodeIcon,
  RepoForkedIcon,
  CommentIcon,
  FileIcon,
  StarFillIcon
} from "@primer/octicons-react"

type GistProps = {
  // Using any here, because octokit is not typed
  gist: any
}

const Gist: FC<GistProps> = ({ gist }) => {
  const fileCount = Object.keys(gist.files).length

  return (
    <div className="gist" key={gist.id}>
      <div className="header">
        <div className="userInfo">
          <img className="avatar" src={gist.owner.avatar_url} alt="avatar" />
          <p className="username">{gist.owner.login}</p>
        </div>
        <div className="links">
          <LabelIcon icon={<CodeIcon />} label={`${fileCount} Files`} />
          <LabelIcon
            url={gist.forks_url}
            icon={<RepoForkedIcon />}
            label="Forks"
          />
          <LabelIcon
            url={gist.comments_url}
            icon={<CommentIcon />}
            label={`${gist.comments} Comments`}
          />
          <LabelIcon url={gist.starUrl} icon={<StarFillIcon />} label="Stars" />
        </div>
      </div>
      <div>
        <p className="dates">
          Created at: {formatDate(gist.created_at)} Updated at:{" "}
          {formatDate(gist.updated_at)}
        </p>
      </div>
      <div>
        <h3 className="desc">{gist.description}</h3>
      </div>
      <div className="files">
        {Object.keys(gist.files).map((file: any) => (
          <LabelIcon
            key={file}
            url={file.raw_url}
            icon={<FileIcon />}
            label={file}
          />
        ))}
      </div>
    </div>
  )
}

export default Gist
