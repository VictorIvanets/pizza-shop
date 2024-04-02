import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
import { LoginResponse } from '../pages/Auth.interface';
import axios from 'axios';
import { PREFIX } from '../pages/API';
import { Profile } from './user.interface';
import { RootState } from './store';

export const JWT_PER_STATE = 'userData'; 

export interface UserState{
    jwt: string | null,
    loginErrorMass?: string,
    profile?: Profile;
    registerErrorMass?: string
}

export interface UserPERSate{
    jwt: string | null
}


const initialState: UserState = {
    jwt: loadState<UserPERSate>(JWT_PER_STATE)?.jwt ?? null
};


export const login = createAsyncThunk('auth/login', 
async(params: {email: string, password: string})=>{


    const {data} = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
        email: params.email, 
        password: params.password
    });
    return data;

    
}
);



export const register = createAsyncThunk('auth/register', 
async(params: {email: string, password: string, name: string, phone: string, address: string})=>{


    const {data} = await axios.post<LoginResponse>(`${PREFIX}/auth/register`, {
        email: params.email, 
        password: params.password,
        name: params.name,
        phone: params.phone,
        address: params.address
    });
    return data;
}
);






export const getProfile = createAsyncThunk<Profile, void, {state: RootState}>('user/getProfile', 
async(_, thunkApi)=>{

    const jwt = thunkApi.getState().user.jwt;
    const {data} = await axios.get<Profile>(`${PREFIX}/user/profile`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    });
    return data;

    
}
);










export const userSlice = createSlice({
name: 'user',
initialState,
reducers: {

    logout: (state) =>{
        state.jwt = null;
    },
    clearLoginError: (state) =>{
        state.loginErrorMass = undefined;
    },
    clearRegisterError: (state) =>{
        state.registerErrorMass = undefined;
    }
},

extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, actions)=>{
        state.jwt = actions.payload.access_token;
    });

    builder.addCase(login.rejected, (state, action)=>{
        state.loginErrorMass = action.error.message;

    });

    builder.addCase(getProfile.fulfilled, (state, action)=>{
        state.profile = action.payload;

    });

    builder.addCase(register.fulfilled, (state, actions)=>{
        state.jwt = actions.payload.access_token;
    });

    builder.addCase(register.rejected, (state, action)=>{
        state.registerErrorMass = action.error.message;

    });
    
    
}

});

export default userSlice.reducer;
export const userActions = userSlice.actions;




// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { loadState } from './storage';
// import { LoginResponse } from '../pages/Auth.interface';
// import axios, { AxiosError } from 'axios';
// import { PREFIX } from '../pages/API';

// export const JWT_PER_STATE = 'userData'; 

// export interface UserState{
//     jwt: string | null,
//     loginErrorMass?: string
// }

// export interface UserPERSate{
//     jwt: string | null
// }


// const initialState: UserState = {
//     jwt: loadState<UserPERSate>(JWT_PER_STATE)?.jwt ?? null
// };


// export const login = createAsyncThunk('auth/login', 
// async(params: {email: string, password: string})=>{

// try {
//     const {data} = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
//         email: params.email, 
//         password: params.password
//     });
//     return data;
// }
// catch (e){
// if(e instanceof AxiosError){
//     throw new Error(e.response?.data.message);
   
// }
// }



// }
// );




// export const userSlice = createSlice({
// name: 'user',
// initialState,
// reducers: {
//     // addJwt: (state, actions: PayloadAction<string>)=>{
//     //     state.jwt = actions.payload;
//     // },
//     logout: (state) =>{
//         state.jwt = null;
//     },
//     clearLoginError: (state) =>{
//         state.loginErrorMass = undefined;
//     }
// },

// extraReducers: (builder) => {
//     builder.addCase(login.fulfilled, (state, actions)=>{
//         if(!actions.payload) {
//             return;
//         }
//         state.jwt = actions.payload.access_token;
//     });

//     builder.addCase(login.rejected, (state, action)=>{
//         state.loginErrorMass = action.error.message;

//     });
    
// }

// });

// export default userSlice.reducer;
// export const userActions = userSlice.actions;