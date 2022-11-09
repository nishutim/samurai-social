import { ConnectionSubscriberT, ErrorSubscriberT, MessagesSubscriberT } from "../store/reducers/chat/thunk-creators"

type ChatEventT = 'connection-changed' | 'messages-received' | 'error-occured';
type SubscriberT = ConnectionSubscriberT | MessagesSubscriberT | ErrorSubscriberT;

interface ISubscribers {
   ['connection-changed']: ConnectionSubscriberT[]
   ['messages-received']: MessagesSubscriberT[]
   ['error-occured']: ErrorSubscriberT[]
}

class ChatSocket {
   static _socket: WebSocket | null = null
   static _connected = false
   static _subscribers = {
      'connection-changed': [],
      'messages-received': [],
      'error-occured': []
   } as ISubscribers

   static _onOpen = () => {
      this._connected = true;
      this._subscribers['connection-changed'].forEach(s => s(this._connected));
   }

   static _onMessage = (response: { data: string }) => {
      const data = JSON.parse(response.data);
      this._subscribers['messages-received'].forEach(s => s(data));
   }

   static _onError = () => {
      this._subscribers['error-occured'].forEach(s => s('Some error occured while establishing connection'));
   }

   static _onClose = () => {
      this._connected = false;
      this._subscribers['connection-changed'].forEach(s => s(this._connected));
      this._cleanUp();
      this._socket = null;
      setTimeout(this._createSocket, 3000);
   }

   static _cleanUp = () => {
      this._socket?.removeEventListener('open', this._onOpen);
      this._socket?.removeEventListener('message', this._onMessage);
      this._socket?.removeEventListener('error', this._onError);
      this._socket?.removeEventListener('close', this._onClose);
   }

   static _createSocket = () => {
      if (!this._socket) {
         this._socket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
         this._socket.addEventListener('open', this._onOpen);
         this._socket.addEventListener('message', this._onMessage);
         this._socket.addEventListener('error', this._onError);
         this._socket.addEventListener('close', this._onClose);
      }
   }

   static _deleteSocket = () => {
      this._socket?.close();
      this._connected = false;
      this._subscribers['connection-changed'].forEach(s => s(this._connected));
      this._cleanUp();
      this._socket = null;
   }

   static subscribe = (eventType: ChatEventT, subscriber: SubscriberT) => {
      // @ts-ignore
      this._subscribers[eventType].push(subscriber);
      this._createSocket();
   }

   static unsubscribe = (eventType: ChatEventT, subscriber: SubscriberT) => {
      this._deleteSocket();
      // @ts-ignore
      this._subscribers[eventType] = this._subscribers[eventType].filter(s => s !== subscriber);
   }

   static sendMessage = (message: string) => {
      this._socket?.send(message);
   }
}

export default ChatSocket;