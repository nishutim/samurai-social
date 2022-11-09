import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "../styled";
import { StyledSendMessageForm } from "./style";

interface Props {
   connected: boolean
   onSubmit: (message: string) => void
}

const SendMessageForm: FC<Props> = React.memo(({ connected, onSubmit }) => {
   const [messageText, setMessageText] = useState('');

   const handleMessageTextChange = (e: ChangeEvent<HTMLInputElement>) => {
      setMessageText(e.target.value);
   }

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (messageText) {
         onSubmit(messageText);
         setMessageText('');
      }
   }

   return (
      <StyledSendMessageForm>
         <Form onSubmit={handleSubmit} className="d-flex flex-row gap-2">
            <Form.Control
               type="text"
               value={messageText}
               onChange={handleMessageTextChange}
               placeholder="Type your message..." />
            <Button type="submit" disabled={!connected}>Send</Button>
         </Form>
      </StyledSendMessageForm>
   );
})

export default SendMessageForm;