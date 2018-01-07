const SET_ACCOUNT = 'app/blockchain/SET_ACCOUNT';

const initialState = {
  account: '',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ACCOUNT:
      return {
        ...state,
        account: action.account
      };
    default:
      return state;
  }
}

export function setAccount(account) {
  return {
    type: SET_ACCOUNT,
    account
  };
}
