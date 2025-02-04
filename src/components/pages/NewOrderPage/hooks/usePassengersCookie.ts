import { useGetCookies } from 'cookies-next';

export default function usePassengersCookie() {
  const adult = useGetCookies();
  console.log(adult);

  return null;
}
