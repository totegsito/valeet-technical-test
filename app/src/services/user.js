import client from './base';

export const createUser = body => client.post('register', body);

export default {
  createUser,
};
