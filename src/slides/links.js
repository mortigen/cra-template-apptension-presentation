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
);
