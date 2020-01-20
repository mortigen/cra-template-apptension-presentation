import React from "react";
import { Slide, Heading, Text, CodePane, FlexBox } from "spectacle";

const storeFixture = `import { usersMock } from './users';

export const locales = {
  language: 'en',
};

export const startup = {};

export const users = {
  users: usersMock,
};

export const store = {
  locales,
  startup,
  users,
};`

export const fixtures = (
  <Slide>
    <Heading>Fixtures</Heading>

    <Text>Use global fixtures for mocking store</Text>
    <Text>It's used by test utils by default</Text>

    <CodePane autoFillHeight>
      {storeFixture}
    </CodePane>
  </Slide>
);
