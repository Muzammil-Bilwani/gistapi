import { useMutation, useQuery } from "react-query"
import { getPublicGists, getGistForUser } from "../services/gistService"
import React, { useState } from "react"
import { GistProvider } from "./GistContext"

type GistProviderProps = {
  children: React.ReactNode
}

export type GistContextValue = {
  // Using any here, because octokit is not typed

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  gists: any[]
  isLoading: boolean
  error: unknown
  onChange: (text: string) => void
}

export const GistContainer = ({ children }: GistProviderProps) => {
  const [gists, setGists] = useState<unknown>([])
  const [enablePublicGists, setEnablePublicGists] = useState<boolean>(true)

  const onChange = (text: string) => {
    if (text) {
      setEnablePublicGists(false)
      getUserGists(text).then((data) => {
        setGists(data?.data)
      })
    } else {
      setEnablePublicGists(true)
    }
  }

  const { isLoading, error } = useQuery("GET_PUBLIC_GISTS", getPublicGists, {
    retry: false,
    enabled: enablePublicGists,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setGists(data?.data)
    }
  })

  const { mutateAsync: getUserGists, isLoading: userGistsLoading } =
    useMutation(getGistForUser)

  return (
    <GistProvider
      value={{
        gists,
        isLoading: isLoading || userGistsLoading,
        error,
        onChange
      }}
    >
      {children}
    </GistProvider>
  )
}
