import fs from 'fs';
import request from 'request';

const url = 'http://api.mailerlite.com/api/v2';
const keyFile = '/run/secrets/mailerlite.key';
const participantGroupId = '9643116';
let key = null;

const initialize = () => {
  // check for a key in env
  if (process.env.MAILERLITE_KEY) {
    key = process.env.MAILERLITE_KEY;
    return true;
  }

  try {
    fs.accessSync(keyFile);
  } catch (error) {
    return false;
  }

  key = fs.readFileSync(keyFile, 'utf8');
  return true;
};

const makePostOptions = (path, form) => {
  return {
    method: 'POST',
    url: `${url}${path}`,
    headers: {
      'Content-Type': 'application/json',
      'X-MailerLite-ApiKey': key
    },
    form
  };
};

/*
const makeGetOptions = (path, qs) => {
  return {
    method: 'GET',
    url: `${url}${path}`,
    headers: {
      'X-MailerLite-ApiKey': key
    },
    qs
  };
};

const makeDelOptions = (path) => {
  return {
    method: 'DEL',
    url: `${url}${path}`,
    headers: {
      'X-MailerLite-ApiKey': key
    }
  };
};
*/

const makeRequest = (options) => {
  const promise = new Promise((accept, reject) => {
    const done = (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        const data = JSON.parse(body);
        if (data && data.error) {
          reject(data.error);
        } else {
          accept({
            response,
            body
          });
        }
      }
    };

    /* Send callback to request. */
    request(options, done);
  });

  /* Returns a promise. */
  return promise;
};

const post = (path, form) => {
  const options = makePostOptions(path, form);
  return makeRequest(options);
};

/*
const get = (path, qs) => {
  const options = makeGetOptions(path, qs);
  return makeRequest(options);
};

const del = (path) => {
  const options = makeDelOptions(path);
  return makeRequest(options);
};
*/

const addParticipant = (body) => {
  return post(`/groups/${participantGroupId}/subscribers`, {
    email: body.email,
    fields: {
      participant: body.participant,
      cause: body.cause,
      message: body.message
    },
    resubscribe: 1
  });
};

export {
  initialize,
  addParticipant
};
