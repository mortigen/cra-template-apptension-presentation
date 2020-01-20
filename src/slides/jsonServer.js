import React from "react";
import { Slide, Heading, Text, CodePane, Quote } from "spectacle";

const faker = `const faker = require('faker');
const { range, map } = require('ramda');

faker.seed(100);

const usersMock = map(
  () => ({
    id: faker.random.uuid(),
    login: faker.internet.userName(),
    name: faker.fake('{{name.firstName}} {{name.lastName}}'),
    email: faker.internet.email(),
  }),
  range(0, 100)
);

module.exports = {
  usersMock,
};`

export const jsonServer = [
  (
    <Slide>
      <Heading>json-server</Heading>

      <Text>Run mocked server for development while waiting for BE</Text>

      <Quote>yarn start:server</Quote>

      <Text>Runs server on port 4000</Text>
      <Text>Default user component with user module uses it as example</Text>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Use faker</Heading>

      <Text>Mock data and use in json-server and your tests</Text>

      <CodePane autoFillHeight>
        {faker}
      </CodePane>

      <Text>Uses old module export because of json-server</Text>
    </Slide>
  )
];
