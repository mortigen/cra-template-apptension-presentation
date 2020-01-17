import { CodePane, Heading, ListItem, Slide, Text, UnorderedList } from 'spectacle';
import React from 'react';

export const reactTestingLibrary = [
  (
    <Slide>
      <Heading>React Testing Library</Heading>
      <Heading fontSize="h2" style={{ textDecoration: 'line-through' }}>Enzyme</Heading>
    </Slide>
  ),
  (
    <Slide>
      <Heading>React Testing Library</Heading>
      <Heading fontSize="h2">Why?</Heading>

      <UnorderedList>
        <ListItem>Enforces to write tests from user perspective</ListItem>
        <ListItem>Disallows testing implementation details and forces to test actual component behavior</ListItem>
        <ListItem>No wrappers - actually renders component as it would normally render in DOM</ListItem>
        <ListItem>Not depending on React implementation (no changes needed to support hooks etc)</ListItem>
      </UnorderedList>
    </Slide>
  ),

  (
    <Slide>
      <Heading>React Testing Library</Heading>
      <Heading fontSize="h2">What changes?</Heading>

      <UnorderedList>
        <ListItem>No shallow rendering -> means no implementation testing</ListItem>
        <ListItem>Everything is rendered in DOM (== mount())</ListItem>
        <ListItem>Not needed children / components can be just mocked with jest.mock()</ListItem>
        <ListItem>No quering by component type (no implementation testing!) - quering from user perspective instead</ListItem>
      </UnorderedList>
    </Slide>
  ),

  (
    <Slide>
      <Heading>React Testing Library</Heading>

      <CodePane autoFillHeight>
        {`import {render, fireEvent, screen} from '@testing-library/react'

test('shows the children when the checkbox is checked', () => {
  const testMessage = 'Test Message'
  render(<HiddenMessage>{testMessage}</HiddenMessage>)
  
  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.queryByText(testMessage)).toBeNull()
  
  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  fireEvent.click(screen.getByLabelText(/show/i))
  
  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText(testMessage)).toBeInTheDocument()
})`}
      </CodePane>
    </Slide>
  )
];
