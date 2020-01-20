import React from 'react';
import { Heading, Link, ListItem, Slide, Text, UnorderedList } from 'spectacle';

export const links = [
  (
    <Slide>
      <Heading>All suggestions / bugs / issues / improvements are highly welcome:</Heading>

      <Text>Feel free to create issues & Pull Requests</Text>

      <Link href="https://github.com/apptension/cra-template-apptension">
        https://github.com/apptension/cra-template-apptension
      </Link>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Useful links</Heading>

      <UnorderedList>
        <ListItem>
          <Link href="https://github.com/typescript-cheatsheets/react-typescript-cheatsheet">
            https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://www.typescriptlang.org/docs/handbook/basic-types.html">
            https://www.typescriptlang.org/docs/handbook/basic-types.html
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://www.typescriptlang.org/docs/handbook/advanced-types.html">
            https://www.typescriptlang.org/docs/handbook/advanced-types.html
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://pawelgrzybek.com/typescript-interface-vs-type/">
            https://pawelgrzybek.com/typescript-interface-vs-type/
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://testing-library.com/docs/react-testing-library/intro/">
            https://testing-library.com/docs/react-testing-library/intro
          </Link>
        </ListItem>
      </UnorderedList>
    </Slide>
  )
];
