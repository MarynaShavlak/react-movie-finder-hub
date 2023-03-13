import { parseISO, formatDistanceToNow } from 'date-fns';

export function getReviewDate(date) {
  const parsedDate = parseISO(date);
  const hours = pad(parsedDate.getHours());
  const minutes = pad(parsedDate.getMinutes());

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const data = parsedDate.toLocaleString('en-US', options);
  return `${data} ${hours}:${minutes}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

export function getLastTimeUpdatedDate(date) {
  const data = parseISO(date);
  return formatDistanceToNow(data);
}
