import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "../../../models/IMessage"

interface InitialState {
   connected: boolean
   messages: IMessage[]
   error: string
}

const initialState = {
   connected: false,
   messages: [],
   error: ''
} as InitialState;

const chatSlice = createSlice({
   name: 'chat',
   initialState,
   reducers: {
      setConnected: (state, action: PayloadAction<boolean>) => {
         state.connected = action.payload
      },
      newMessageReceived: (state, action: PayloadAction<IMessage[]>) => {
         const newMessages = [...state.messages, ...action.payload]
         state.messages = newMessages
      },
      fetchingMessagesStopped: (state) => {
         state.messages = []
      },
      setError: (state, action: PayloadAction<string>) => {
         state.error = action.payload
      }
   }
});

export const ChatActions = chatSlice.actions;

export default chatSlice.reducer;