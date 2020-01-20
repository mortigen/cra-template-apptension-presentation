import { Appear, CodePane, Heading, ListItem, Slide, Text, UnorderedList } from 'spectacle';
import React from 'react';

export const hooks = [
  (
    <Slide>
      <Heading>Hooks</Heading>
      <Heading style={{ textDecoration: 'line-through' }}>Containers</Heading>

      <Heading fontSize="h2">Why?</Heading>

      <UnorderedList>
        <ListItem>You can extract more logic inside hook - not only dispatchers & selectors</ListItem>
        <ListItem>Hooks can be easily reused and composed into more complex ones</ListItem>
      </UnorderedList>

    </Slide>
  ),
  (
    <Slide>
      <Heading>Hooks</Heading>

      <Text>Load users on mount and use them in component</Text>

      <CodePane autoFillHeight>
        {`export const UsersComponent = () => {
  const [users] = useUsers();

  return (
    <Container>
      <ul> {users.map(user => (<li key={user.id}>{user.name}</li>))} </ul>
    </Container>
  );
};`}
      </CodePane>
    </Slide>
  ),

  (
    <Slide>
      <Heading>Hooks</Heading>

      <Text>.. or add more complex interactions but still with concise API and logic encapsulated in hook</Text>

      <CodePane autoFillHeight>
        {`export const UsersComponent = () => {
  const [users, fetchUsers] = useUsers();

  return (
    <Container>
      <Button onClick={fetchUsers}>Load</Button>
      <ul> {users.map(user => (<li key={user.id}>{user.name}</li>))} </ul>
    </Container>
  );
};`}
      </CodePane>
    </Slide>
  ),

  (
    <Slide>
      <Heading>Hooks</Heading>

      <CodePane autoFillHeight>
        {`export const useUsers = () => {
  const dispatch = useDispatch();

  const users = useSelector(usersSelectors.selectUsers);
  const fetchUsers = () => dispatch(usersActions.fetchUsers());

  return [users, fetchUsers];
};`}
      </CodePane>
    </Slide>
  ),
  (
    (
      <Slide>
        <Heading>Hooks</Heading>

        <Text>You can change behavior of the hook with no changes in the parent component</Text>

        <CodePane autoFillHeight>
          {`export const UsersComponent = () => {
  const [users] = useUsers(); // but now i.e. users return different count based on window width
  );
};`}
        </CodePane>
      </Slide>
    )
  )
];
