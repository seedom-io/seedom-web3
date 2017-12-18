const SET_TOTAL_PARTICIPANTS = 'seedom/SET_TOTAL_PARTICIPANTS';

const initialState = {
  totalParticipants: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TOTAL_PARTICIPANTS:
      return {
        ...state,
        totalParticipants: Number(action.totalParticipants)
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
