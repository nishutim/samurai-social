import React, { FC, useEffect, useState } from "react";
import { IMessage } from "../../models/IMessage";
import { MessagesList, StyledMessages } from "./style";
import MessageItem from "../MessageItem/MessageItem";

interface Props {
   messages: IMessage[]
}

const Messages: FC<Props> = React.memo(({ messages }) => {
   const [scrollMode, setScrollMode] = useState(true);

   const ref = React.useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (ref.current && scrollMode) {
         ref.current.scrollTop = ref.current.scrollHeight;
      }
   }, [messages]);

   const handleMessagesScroll = (e: any) => {
      let clientHeight = ref.current?.clientHeight as number;
      let scrollHeight = ref.current?.scrollHeight as number;
      let scrollTop = ref.current?.scrollTop as number;
      let actualScrollMode = scrollHeight - (scrollTop + clientHeight) < 120;

      if (actualScrollMode !== scrollMode) {
         setScrollMode(actualScrollMode);
      }
   }

   return (
      <StyledMessages onScroll={handleMessagesScroll} ref={ref}>
         <MessagesList>
            {messages.map((message, i) => (
               <MessageItem key={i} messageBody={message} />
            ))}
         </MessagesList>
      </StyledMessages>
   );
})

export default Messages;