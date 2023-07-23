import { actionTypes } from "../constants/action-types";

const initialState ={
  loading: true,
  profiles: [],
  likedProfiles: [],
}


export const allProfiles = (state = initialState, { type, payload }) => {
  switch (type) {
        case actionTypes.ALLPROFILES:
          return {
              ...state, profiles: payload
          };
        case actionTypes.ALLPROFILESERR:
          return {
            ...state
          }
        default:
          return { ...state }
  }
}


export const allLikedProfiles = (state = initialState, { type, payload }) => {
  switch (type) {
        case actionTypes.LIKEDUSERS:
          return {
              ...state, likedProfiles: payload
          };
        case actionTypes.LIKEDUSERSERR:
          return {
            ...state
          }
        default:
          return { ...state }
  }
}
