import React, { FC, useState } from 'react';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { IFilter } from '../../models/IFilter';
import { Button } from '../styled';
import { StyledUsersFilter } from './style';

interface Props {
   handleSubmit: (filter: IFilter) => Promise<void>
   filter: IFilter
}

interface FormValues {
   term: string
   friendsOnly: 'null' | 'true' | 'false'
}

const UsersFilter: FC<Props> = React.memo(({ handleSubmit, filter }) => {
   const [disableBtn, setDisableBtn] = useState(false);

   const formik = useFormik({
      initialValues: {
         term: filter.term,
         friendsOnly: filter.friendsOnly
      } as FormValues,
      onSubmit: async (values) => {
         setDisableBtn(true);
         await handleSubmit(values);
         setDisableBtn(false);
      }
   });

   return (
      <StyledUsersFilter>
         <Form onSubmit={formik.handleSubmit} className="d-flex flex-row justify-content-start gap-2">
            <Form.Control type='text' name='term' value={formik.values.term} onChange={formik.handleChange} placeholder="Search..." />
            <Form.Select name='friendsOnly' value={formik.values.friendsOnly} onChange={formik.handleChange}>
               <option value="null">All users</option>
               <option value="true">Friends only</option>
               <option value="false">Not friends</option>
            </Form.Select>
            <Button disabled={disableBtn} type='submit'>Find</Button>
         </Form>
      </StyledUsersFilter>
   );
})

export default UsersFilter;