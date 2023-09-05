import {login, register } from "../../API";


const handleLogin = async (formData: IUser): Promise<LoginDataType | undefined> => {
  try {
    const response = await login(formData);
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};


const handleSignUp = async ( formData: IUser): Promise<ApiDataType | undefined> => {
  try {
    const response = await register(formData);
    return response.data;
  } catch (err) {
    return Promise.reject(err); // Re-throw the error to be caught at the caller level
  }
};
export {handleSignUp,handleLogin }