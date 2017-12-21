const SET_PARTICIPANT = 'seedom/SET_PARTICIPANT';
const SET_TOTAL_PARTICIPANTS = 'seedom/SET_TOTAL_PARTICIPANTS';
const SET_RAISER = 'seedom/SET_RAISER';

const initialState = {
  participant: {
    entries: 0,
    hashedRandom: '',
    random: ''
  },
  totalParticipants: 0,
  raiser: {
    valuePerEntry: 0
  }
};

function epochToDate(seconds) {
  return new Date(seconds * 1000);
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TOTAL_PARTICIPANTS:
      return {
        ...state,
        totalParticipants: Number(action.totalParticipants)
      };

    case SET_PARTICIPANT:
      return {
        ...state,
        participant: {
          entries: Number(action.participant._entries),
          hashedRandom: action.participant._hashedRandom,
          random: action.participant._random,
        }
      };

    case SET_RAISER:
      return {
        ...state,
        raiser: {
          endTime: epochToDate(action.raiser._endTime),
          expireTime: epochToDate(action.raiser._expireTime),
          kickoffTime: epochToDate(action.raiser._kickoffTime),
          revealTime: epochToDate(action.raiser._revealTime),
          valuePerEntry: Number(action.raiser._valuePerEntry)
        }
      };
    default:
      return state;
  }
}

export function setTotalParticipants(totalParticipants) {
  return {
    type: SET_TOTAL_PARTICIPANTS,
    totalParticipants
  };
}

export function setRaiser(raiser) {
  return {
    type: SET_RAISER,
    raiser
  };
}

export function setParticipant(participant) {
  return {
    type: SET_PARTICIPANT,
    participant
  };
}
