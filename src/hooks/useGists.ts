import { useQuery } from "react-query"
import { getPublicGists } from "../services/gistService"

const useGists = () => {
  const { data, isLoading, error } = useQuery(
    "GET_PUBLIC_GISTS",
    getPublicGists
  )

  return {
    isLoading,
    gists: data?.data,
    error
  }
}

export default useGists
