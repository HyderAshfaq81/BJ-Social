import { actionTypes } from "../../constants/action-types";
import { toast } from "react-toastify";


export const userSignup = (data) => {
  return async function (dispatch) {
    return new Promise(async (resolve) => {
        try {
          const response = await fetch(`https://meet-date-ac403bfa9c3a.herokuapp.com/signup`, {
              method: 'POST',
              headers: {
                  // 'Content-type': 'application/json',
                  'Accept': 'application/json',
              },
              body: data
        });
        const result = await response.json()
        console.log('resutl is', result )
        const authToken = response.headers.get('Authorization');
        console.log('token is is', authToken )
        if (response.status >= 200 && response.status < 400){
          // const authToken = response.headers.get('Authorization');
          // localStorage.setItem('authToken', authToken)
          toast.success(result.status?.message);
          resolve(result);
        }
        else {
          toast.error(result.status?.message)
          resolve({ error: true, message: 'An Error occured while adding profile' });
        }
      } catch (err) {
        resolve({ error: true, message: 'An Error occured while adding profile' });
      }
    });
  }
}

export const userLogin = (data) => {
  return async function (dispatch) {
    return new Promise(async (resolve) => {
        try {
          const response = await fetch(`https://meet-date-ac403bfa9c3a.herokuapp.com/login`, {
              method: 'POST',
              headers: {
                  // 'Content-type': 'application/json',
                  'Accept': 'application/json',
              },
              body: data
        });
        const result = await response.json()
        const authToken = response.headers.get('Authorization');
        console.log('resutl is', authToken )
        if (response.status >= 200 && response.status < 400){
          const authToken = response.headers.get('Authorization');
          console.log('resutl is', authToken )
          localStorage.setItem('authToken', authToken)
          toast.success(result.status?.message);
          resolve(result);
        }
        else {
          toast.error(result?.error)
          resolve({ error: true, message: 'An Error occured while login' });
        }
      } catch (err) {
        resolve({ error: true, message: 'An Error occured while login' });
      }
    });
  }
}
