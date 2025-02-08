import {http, HttpResponse} from 'msw';
import {data} from './data';

const baseUrl = 'https://api.example.com';

export const handlers = [
  http.get(`${baseUrl}/users`, async ({ request }) => {
    const url = new URL(request.url);

    return HttpResponse.json(data.users);
  }),
]
