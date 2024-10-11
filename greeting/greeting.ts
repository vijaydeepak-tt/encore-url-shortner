import { api } from 'encore.dev/api';

interface Response {
  data: string;
}

export const greeting = api(
  {
    method: 'GET',
    path: '/greeting',
    expose: true,
  },
  async (): Promise<Response> => {
    return {
      data: 'Welcome to Encore API!',
    };
  }
);

export const greetingUser = api(
  {
    method: 'GET',
    path: '/greeting/:user',
    expose: true,
  },
  async ({ user }: { user: string }): Promise<Response> => {
    return {
      data: `Hello ${user}! Welcome to Encore API.`,
    };
  }
);
