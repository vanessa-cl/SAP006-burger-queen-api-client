import { differenceInMinutes, format } from "date-fns";

export const initialStatus = (status) => {
  if (status === 'pending') {
    return 'Pendente'
  } else {
    return 'Preparando'
  }
}

export const getTime = (dateString) => {
  const date = new Date(dateString);
  const dateNewFormat = format(date, "dd/MM/yyyy HH:mm");
  return dateNewFormat;
}

export const getInterval = (startDateString, endDateString) => {
  const start = new Date(startDateString);
  const end = new Date(endDateString);
  const preparedTime = differenceInMinutes(end, start);
  return preparedTime + ' min';
}