import { redirect } from "@sveltejs/kit";

export function load({ cookies }) {
  const user_session = cookies.get('user_session');

  if (!user_session) {
    throw redirect(302, '/login');
  } else {
    throw redirect(302, '/home');
  }
}