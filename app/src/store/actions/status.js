export const resetStatus = type =>
  dispatch => new Promise((resolve, reject) => {
    // Validate types
    const allowed = ['error', 'success'];
    if (!allowed.includes(type)) {
      return reject(new Error('Type should be one of success or error'));
    }

    return resolve(dispatch({
      type: 'STATUS_REPLACE',
      [type]: null,
    }));
  });

/**
  * Show Status
  */
export default function (dispatch, type, val) {
  return new Promise((resolve, reject) => {
    // Validate types
    const allowed = ['error', 'success', 'loading'];
    if (!allowed.includes(type)) {
      return reject(new Error('Type should be one of success or error'));
    }

    // Set some defaults for convenience
    let message = val;
    if (!val) {
      if (type === 'success') message = 'Success';
      if (type === 'error') message = 'Sorry, an error occurred';
      if (type === 'loading' && val !== false) message = true;
    }

    return resolve(dispatch({
      type: 'STATUS_REPLACE',
      [type]: message,
    }));
  });
}
