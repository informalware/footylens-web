import { render } from '@testing-library/svelte';
import { backend_address } from "$lib/consts";
import { expect, describe, it } from "vitest";
import UserAside from './user-aside.svelte';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mock = new MockAdapter(axios);

mock.onGet(backend_address + `/users/1/followers`).reply(200, {
  followers: { length: 5 },
});
mock.onGet(backend_address + `/users/1/follows`).reply(200, {
  follows: { length: 3 },
});
mock.onGet(backend_address + `/users/1/teams`).reply(200, {
  follows: { length: 2 },
});

describe('UserAside', () => {
  it('renderiza informações do usuário', async () => {
    const { findByText } = render(UserAside, {
      props: {
        user: {
          id: '1',
          display: 'Nome do Usuário',
          username: 'usuario',
          bio: 'Uma breve biografia.',
        },
      },
    });

    expect(await findByText('Nome do Usuário')).not.toBeNull();;
    expect(await findByText('@usuario')).not.toBeNull();;
    expect(await findByText('Uma breve biografia.')).not.toBeNull();;
    expect(await findByText('Seguidores: 5')).not.toBeNull();;
    expect(await findByText('Seguindo: 3')).not.toBeNull();;
    expect(await findByText('Times seguidos: 2')).not.toBeNull();;
  });
});