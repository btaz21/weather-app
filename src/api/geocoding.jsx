import axios from 'axios';
import { resolve } from './resolve.js';

export async function login(user, pass) {
  return await resolve(
    axios
      .post('http://some-api.com/auth', { user, pass })
      .then((res) => res.data)
  );
}

export async function getUser(id) {
  return await resolve(
    axios.get(`http://some-api.com/users/${id}`).then((res) => res.data)
  );
}
