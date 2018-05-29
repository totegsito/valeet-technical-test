import statusMessage from './status';
import ErrorMessages from '../../constants/errors';
import { createUser, signIn } from '../../services/user';
import { setAuthenticationHeader } from '../../services/base';

export function signUp(formData) {
  const {
    password,
    username,
    confirmPassword,
  } = formData;

  return dispatch => new Promise(async (resolve, reject) => {
    // Validation checks
    if (!username) return reject(new Error(ErrorMessages.missingUsername));
    if (!password) return reject(new Error(ErrorMessages.missingPassword));
    if (!confirmPassword) return reject(new Error(ErrorMessages.missingPassword));
    if (password !== confirmPassword) return reject(new Error(ErrorMessages.passwordsDontMatch));
    await statusMessage(dispatch, 'loading', true);

    return createUser({ username, password })
      .catch(reject)
      .then(() => statusMessage(dispatch, 'loading', false)
        .catch(reject)
        .then(() => statusMessage(dispatch, 'success', 'User created successfully'))
        .catch(reject)
        .then(resolve));
  }).catch(async (err) => { await statusMessage(dispatch, 'error', err.message); throw err.message; });
}


export function login(formData) {
  const {
    username,
    password,
  } = formData;

  return dispatch => new Promise(async (resolve, reject) => {
    try {
      await statusMessage(dispatch, 'loading', true);

      // Validation checks
      if (!username) return reject(new Error(ErrorMessages.missingEmail));
      if (!password) return reject(new Error(ErrorMessages.missingPassword));

      return signIn({ username, password })
        .then(async (res) => {
          await statusMessage(dispatch, 'loading', false);
          setAuthenticationHeader(res.data.token);
          return resolve(dispatch({
            type: 'USER_LOGIN',
            data: { ...res.data, username },
          }));
        })
        .catch(reject);
    } catch (ex) {
      await statusMessage(dispatch, 'error', ex.message);
      throw ex;
    }
  }).catch(async (err) => { await statusMessage(dispatch, 'error', err.message); });
}


export function logout() {
  return dispatch => new Promise(async (resolve) => {
    await statusMessage(dispatch, 'loading', true);
    dispatch({ type: 'USER_RESET' });
    setTimeout(resolve, 1000); // Resolve after 1s so that user sees a message
    await statusMessage(dispatch, 'loading', false);
  }).catch(async (err) => {
    await statusMessage(dispatch, 'error', (err.response && err.response.data && err.response.data.message) || err.message);
    throw err.message;
  });
}


export default {
  login,
  signUp,
};
