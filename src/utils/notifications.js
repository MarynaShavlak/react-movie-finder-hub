import { toast } from 'react-toastify';

export function showFailureNotification() {
  return toast.error(
    'Sorry, there are no movies  matching your search query. Please, try again.'
  );
}

export function showInfoNotification() {
  return toast.info(
    "We're sorry, but you've reached the end of search results."
  );
}

export function showSuccessNotification(totalFoundMovies) {
  return toast.success(`Hooray! We found ${totalFoundMovies} movies.`);
}

export function showWarnNotification() {
  return toast.warn(
    `Sorry, you cannot make empty request. Please,write your request and try again`
  );
}
