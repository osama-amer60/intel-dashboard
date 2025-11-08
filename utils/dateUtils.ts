import { format, parseISO } from "date-fns"

export const formatDate = (dateString: string): string => {
  try {
    const date = parseISO(dateString)
    return format(date, "dd MMM yyyy")
  } catch (error) {
    console.error("Invalid date string:", dateString, error)
    return dateString
  }
}
