import { actionTypes } from "../../constants/action-types";
import { toast } from "react-toastify";

export const userSignup = (data) => {
  return async function (dispatch) {
    return new Promise(async (resolve) => {
        try {
          const response = await fetch(`http://127.0.0.1:3000/signup`, {
              method: 'POST',
              headers: {
                  // 'Content-type': 'application/json',
                  'Accept': 'application/json',
              },
              body: data
        });
        const result = await response.json()
        console.log('resutl is', result )
        if (response.status >= 200 && response.status < 400){
          const authToken = response.headers.get('Authorization');
          localStorage.setItem('authToken', authToken)
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
