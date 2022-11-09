import { IMessage } from './../../../models/IMessage';
import { AppDispatch } from "../..";
import { ChatActions } from ".";
import ChatSocket from '../../../services/chatSocket';

const createConnectionSubscriber = (dispatch: AppDispatch) => (connected: boolean) => {
   dispatch(ChatActions.setConnected(connected));
}
const createMessagesSubscriber = (dispatch: AppDispatch) => (messages: IMessage[]) => {
   dispatch(ChatActions.newMessageReceived(messages));
}
const createErrorSubscriber = (dispatch: AppDispatch) => (error: string) => {
   dispatch(ChatActions.setError(error));
}

export type ConnectionSubscriberT = ReturnType<typeof createConnectionSubscriber>;
export type MessagesSubscriberT = ReturnType<typeof createMessagesSubscriber>;
export type ErrorSubscriberT = ReturnType<typeof createErrorSubscriber>;

let connectionSubscriber: ConnectionSubscriberT | null = null;
let messagesSubscriber: MessagesSubscriberT | null = null;
let errorSubscriber: ErrorSubscriberT | null = null;

export const startFetchingMessages = () => async (dispatch: AppDispatch) => {
   connectionSubscriber = createConnectionSubscriber(dispatch);
   messagesSubscriber = createMessagesSubscriber(dispatch);
   errorSubscriber = createErrorSubscriber(dispatch);
   ChatSocket.subscribe('connection-changed', connectionSubscriber);
   ChatSocket.subscribe('messages-received', messagesSubscriber);
   ChatSocket.subscribe('error-occured', errorSubscriber);
}

export const stopFetchingMessages = () => async (dispatch: AppDispatch) => {
   dispatch(ChatActions.fetchingMessagesStopped());
   if (connectionSubscriber && messagesSubscriber && errorSubscriber) {
      ChatSocket.unsubscribe('connection-changed', connectionSubscriber);
      ChatSocket.unsubscribe('messages-received', messagesSubscriber);
      ChatSocket.unsubscribe('error-occured', errorSubscriber);
   }
}

export const sendMessage = (message: string) => async (dispatch: AppDispatch) => {
   ChatSocket.sendMessage(message);
}