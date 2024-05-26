export const load = ({ event }) => {
    const user = event.locals.user;
  
    if (!user) {
      return {
        status: 401,
        error: new Error('Você precisa estar logado para acessar esta página'),
        redirect: '/login'
      };
    }
  
    return {
      status: 200,
      body: {
        user: event.locals.user
      }
    };
};