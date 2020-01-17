import React from 'react';
import { Heading, Link, ListItem, Slide, UnorderedList } from 'spectacle';

export const links = (
  <Slide>
    <Heading>Useful links</Heading>

    <UnorderedList>
      <ListItem>
        <Link href="https://github.com/typescript-cheatsheets/react-typescript-cheatsheet">
          https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
        </Link>
      </ListItem>

      <ListItem>
        <Link href="https://www.typescriptlang.org/docs/handbook/advanced-types.html">
          https://www.typescriptlang.org/docs/handbook/advanced-types.html
        </Link>
      </ListItem>
    </UnorderedList>
  </Slide>
);
