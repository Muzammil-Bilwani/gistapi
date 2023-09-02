import dayjs from "dayjs"

export const DEBOUNCE_TIMEOUT = 500

export const formatDate = (date: string) => {
  return dayjs(date).format("DD/MM/YYYY")
}

export const debounceFunction = () => {
  let timeoutId: number | null = null
  return (callback: any) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(callback, DEBOUNCE_TIMEOUT)
  }
}

export const debounce = debounceFunction()
