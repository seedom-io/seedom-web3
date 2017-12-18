const SET_ACCOUNT = 'seedom/blockchain/SET_ACCOUNT';
const LOAD_CONTRACT_ABI = 'seedom/blockchain/LOAD_CONTRACT_ABI';
const LOAD_CONTRACT_ABI_SUCCESS = 'seedom/blockchain/LOAD_CONTRACT_ABI_SUCCESS';
const LOAD_CONTRACT_ABI_FAIL = 'seedom/blockchain/LOAD_CONTRACT_ABI_FAIL';

const initialState = {
  account: '',
  abis: {
    seedom: ''
  }
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ACCOUNT:
      return {
        ...state,
        account: action.account
      };
    case LOAD_CONTRACT_ABI_SUCCESS:
      return {
        ...state,
        abis: {
          ...(state.abis),
          seedom: action.result.abi
        }
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

export function loadContractABI(contractName) {
  return {
    types: [LOAD_CONTRACT_ABI, LOAD_CONTRACT_ABI_SUCCESS, LOAD_CONTRACT_ABI_FAIL],
    promise: ({ client }) =>
      client.get(`/loadContractABI/${contractName}`)
  };
}
