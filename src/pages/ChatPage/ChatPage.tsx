import React, { FC, useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { chat_selectConnected, chat_selectMessages } from "../../store/reducers/chat/selectors";
import { sendMessage, startFetchingMessages, stopFetchingMessages } from "../../store/reducers/chat/thunk-creators";
import { Page, PageBody } from "../../components/styled";
import Chat from "../../components/Chat/Chat";

const ChatPage: FC = () => {
   const connected = useAppSelector(chat_selectConnected);
   const messages = useAppSelector(chat_selectMessages);

   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(startFetchingMessages());

      return () => {
         dispatch(stopFetchingMessages())
      }
   }, []);

   const handleMessageSend = useCallback((message: string) => {
      dispatch(sendMessage(message));
   }, [])

   return (
      <Page>
         <PageBody>
            <Chat
               connected={connected}
               messages={messages}
               sendMessage={handleMessageSend} />
         </PageBody>
      </Page>
   );
}

export default ChatPage;