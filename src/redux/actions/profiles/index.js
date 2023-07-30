import { actionTypes } from "../../constants/action-types";
import { toast } from "react-toastify";
export const getProfiles = () => {
    const authToken = localStorage.getItem('authToken')
    console.log('auth token is', authToken)
    return async function (dispatch) {
        try {
            const response = await fetch(`https://meet-date-ac403bfa9c3a.herokuapp.com/profiles`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `${authToken}`,
                },
            });
            const result = await response.json()
            console.log('*************',result )
            if (response.status >= 200 && response.status < 400) {
                dispatch({ type: actionTypes.ALLPROFILES, payload: result })
            }
            else {
                dispatch({ type: actionTypes.ALLPROFILESERR, payload: result })
            }
        } catch (err) {
            console.log('error')
        }
    }
  }

// export const likeUser = (data) => {
//     return async function (dispatch) {
//         try {
//             const response = await fetch(`http://127.0.0.1:3000/likes`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-type': 'application/json',
//                     'Accept': 'application/json',
//                     'Authorization': `Bearer ${authToken}`,
//                 },
//                 body: data
//             });
//             const result = await response.json()
//             console.log('*************',result )
//             if (response.status >= 200 && response.status < 400) {
//                 // dispatch({ type: actionTypes.ALLPROFILES, payload: result })
//                 toast.success("You liked new user")
//             }
//             else {
//                 toast.error("User not liked")
//             }
//         } catch (err) {
//             console.log('error')
//         }
//     }
// }

export const likeUser = (data) => {
    const authToken = localStorage.getItem('authToken')
    return async function (dispatch) {
      return new Promise(async (resolve) => {
          try {
            const response = await fetch(`https://meet-date-ac403bfa9c3a.herokuapp.com/likes`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `${authToken}`,
                },
                body: data
          });
          const result = await response.json()
          if (response.status >= 200 && response.status < 400){
            toast.success("You have liked new user")
            resolve(result);
          }
          else {
            toast.error(result.error)
            resolve({ error: true, message: 'An Error occured while adding profile' });
          }
        } catch (err) {
          resolve({ error: true, message: 'An Error occured while adding profile' });
        }
      });
    }
}
export const allLikedUser = () => {
    const authToken = localStorage.getItem('authToken')
    return async function (dispatch) {
        try {
            const response = await fetch(`https://meet-date-ac403bfa9c3a.herokuapp.com/likes/liked_users`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `${authToken}`,
                },
            });
            const result = await response.json()
            console.log('*************',result )
            if (response.status >= 200 && response.status < 400) {
                dispatch({ type: actionTypes.LIKEDUSERS, payload: result })
            }
            else {
                dispatch({ type: actionTypes.LIKEDUSERSERR, payload: result })
            }
        } catch (err) {
            console.log('error')
        }
    }
}
