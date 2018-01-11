import seedomJSON from '../../../../seedom-solidity/build/abi/seedom.json';

const LOAD_CONTRACT = 'seedom/blockchain/LOAD_CONTRACT_ABI';
const SET_PARTICIPANT = 'seedom/blockchain/SET_PARTICIPANT';

const initialState = {
  contract: '',
  contractLoaded: false,
  participant: {
    entries: 0,
    hashedRandom: '',
  },
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_CONTRACT:
      return {
        ...state,
        contract: seedomJSON,
        contractLoaded: true
      };

    case SET_PARTICIPANT:
      return {
        ...state,
        participant: {
          entries: Number(action.participant._entries),
          hashedRandom: action.participant._hashedRandom
        }
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

export function setParticipant({ participant }) {
  return {
    type: SET_PARTICIPANT,
    participant
  };
}
