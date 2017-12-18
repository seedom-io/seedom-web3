const SET_TOTAL_PARTICIPANTS = 'seedom/SET_TOTAL_PARTICIPANTS';
const SET_VALUE_PER_ENTRY = 'seedom/SET_VALUE_PER_ENTRY';

const initialState = {
  totalParticipants: 0,
  valuePerEntry: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TOTAL_PARTICIPANTS:
      return {
        ...state,
        totalParticipants: Number(action.totalParticipants)
      };

    case SET_VALUE_PER_ENTRY:
      return {
        ...state,
        valuePerEntry: Number(action.valuePerEntry)
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

export function setValuePerEntry(valuePerEntry) {
  return {
    type: SET_VALUE_PER_ENTRY,
    valuePerEntry
  };
}

