import seedomJSON from '../../../../seedom-solidity/build/abi/seedom.json';

const LOAD_CONTRACT = 'seedom/blockchain/LOAD_CONTRACT_ABI';

const initialState = {
  contract: '',
  contractLoaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_CONTRACT:
      return {
        ...state,
        contract: seedomJSON,
        contractLoaded: true
      };
    default:
      return state;
  }
}

export function loadContract() {
  return {
    type: LOAD_CONTRACT
  };
}
