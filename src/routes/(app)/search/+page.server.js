import { redirect } from '@sveltejs/kit';

export function load({ request }) {
  const cookies = request.headers.cookie;
  const logged = cookies && new URLSearchParams(cookies).get('user_session');

  if (!logged) {
    throw redirect(302, '/login');
  }

  return {
    status: 200,
    body: { logged }
  };
}