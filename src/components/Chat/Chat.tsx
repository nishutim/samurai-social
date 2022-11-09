import React, { FC } from "react";
import { IMessage } from "../../models/IMessage";
import { StyledChat } from "./style";
import Messages from "../Messages/Messages";
import SendMessageForm from "../SendMessageForm/SendMessageForm";

interface Props {
   connected: boolean
   messages: IMessage[]
   sendMessage: (message: string) => void
}

const Chat: FC<Props> = ({ connected, messages, sendMessage }) => {
   return (
      <StyledChat>
         <Messages
            messages={messages} />
         <SendMessageForm
            connected={connected}
            onSubmit={sendMessage} />
      </StyledChat>
   );
}

export default Chat;