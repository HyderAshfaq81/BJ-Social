import { combineReducers } from "redux";
import { allProfiles, allLikedProfiles } from "./profileReducers";

export const reducers= combineReducers(
    {
      allProfiles: allProfiles,
      allLikedProfiles: allLikedProfiles,
    }
)
