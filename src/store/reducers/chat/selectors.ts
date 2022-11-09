import { RootState } from "../..";

export const chat_selectMessages = (state: RootState) => state.chat.messages;
export const chat_selectConnected = (state: RootState) => state.chat.connected;
export const chat_selectError = (state: RootState) => state.chat.error;