import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName:"",
    secondName: "",
    email: "",
    password: "",
}

export const UserRegisterSlice = createSlice({
    name: "UserRegistration",
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setSecondName: (state, action) => {
            state.secondName = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        UserRegistration: (state, action) => {
            state.firstName = action.payload;
            state.secondName = action.payload;
            state.password = action.payload;
            state.email = action.payload;
        },
    }
})

export const {setEmail, setFirstName, setPassword, setSecondName, UserRegistration } = UserRegisterSlice.actions;
export default UserRegisterSlice.reducer;
