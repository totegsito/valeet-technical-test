import client from './base';

export const signIn = body => client.post('signin', body);
export const createUser = body => client.post('signup', body);

export default {
  signIn,
  createUser,
};
