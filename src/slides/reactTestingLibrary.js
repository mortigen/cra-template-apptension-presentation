import {
  CodePane,
  Heading,
  ListItem,
  Notes,
  Slide,
  Text,
  List
} from "spectacle";
import React from "react";

export const reactTestingLibrary = [
  <Slide>
    <Heading>React Testing Library</Heading>
    <Heading fontSize="h2" style={{ textDecoration: "line-through" }}>
      Enzyme
    </Heading>
  </Slide>,
  <Slide>
    <Heading>React Testing Library</Heading>
    <Heading fontSize="h2">Why?</Heading>

    <List>
      <ListItem>Enforces to write tests from user perspective</ListItem>
      <ListItem>
        Disallows testing implementation details and forces to test actual
        component behavior
      </ListItem>
      <ListItem>
        No wrappers - actually renders component as it would normally render in
        DOM
      </ListItem>
      <ListItem>
        Not depending on React implementation (no changes needed to support
        hooks etc)
      </ListItem>
      <ListItem>Encourages integration testing more than unit testing</ListItem>
    </List>

    <Notes>
      Not relying on implementation makes it really easy to use i.e. when
      refactoring code - even when the code was changed quite much, we dont need
      to change tests, as they only rely on what browser renders instead of how
      it works internally. Changing from class components -> FC - no problem
      container with props -> hooks - no problem
    </Notes>
  </Slide>,
  <Slide>
    <Heading>React Testing Library</Heading>
    <Heading fontSize="h2">What changes?</Heading>

    <List>
      <ListItem>
        No shallow rendering -> means no implementation testing
      </ListItem>
      <ListItem>Everything is rendered in DOM (== mount())</ListItem>
      <ListItem>
        Not needed children / components can be just mocked with jest.mock()
      </ListItem>
      <ListItem>
        No quering by component type (no implementation testing!) - quering from
        user perspective instead
      </ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading>React Testing Library</Heading>

    <CodePane
      lang={"javascript"}
      source={`import {render, fireEvent, screen} from '@testing-library/react'

test('shows the children when the checkbox is checked', () => {
  const testMessage = 'Test Message'
  render(<HiddenMessage>{testMessage}</HiddenMessage>)
  
  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.queryByText(testMessage)).toBeNull()
  
  fireEvent.click(screen.getByLabelText("Show message"))
  
  expect(screen.getByText(testMessage)).toBeInTheDocument()
})`}
    />

    <Notes>
      Hypothetical component that shows messages after clicking on `show mesage`
      button
    </Notes>
  </Slide>
];
