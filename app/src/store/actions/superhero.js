import statusMessage from './status';
import { getComicById } from '../../services/comics';


export default function getCurrentComic(comicId) {
  return dispatch => new Promise(async (resolve, reject) => {
    if (!comicId) {
      return statusMessage(dispatch, 'loading', false)
        .then(resolve(dispatch({ type: 'COMIC_RESET' })));
    }
    await statusMessage(dispatch, 'loading', true);
    return getComicById(comicId)
      .then(async (res) => {
        await statusMessage(dispatch, 'loading', false);
        return resolve(dispatch({
          type: 'CURRENT_COMIC_REPLACE',
          data: res.data,
        }));
      })
      .catch(async (err) => {
        await statusMessage(dispatch, 'loading', false);
        reject(err);
      });
  }).catch(async (err) => {
    await statusMessage(
      dispatch,
      'error',
      (err.response && err.response.message) || err.message,
    );
    await dispatch({ type: 'COMIC_RESET' });
    throw err.response.data.message;
  });
}
