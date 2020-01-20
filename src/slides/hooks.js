import React from "react";
import { Slide, Heading, Text, CodePane, FlexBox } from "spectacle";

const useUsers = `import { useDispatch, useSelector } from 'react-redux';
import { usersActions, usersSelectors } from '../../../modules/users';
import { User } from '../../../modules/users/users.redux';

export const useUsers = (): [User[], () => void] => {
  const dispatch = useDispatch();

  const users = useSelector(usersSelectors.selectUsers);
  const fetchUsers = () => dispatch(usersActions.fetchUsers());

  return [users, fetchUsers];
};`

export const hooks = (
  <Slide>
    <Heading>Custom hooks</Heading>

    <Text>Write logic in custom hooks (also connection with redux)</Text>

    <CodePane autoFillHeight>
      {useUsers}
    </CodePane>

    <Text>And use it in components</Text>

    <CodePane>
        {`const [users, fetchUsers] = useUsers();`}
    </CodePane>

  </Slide>
);
