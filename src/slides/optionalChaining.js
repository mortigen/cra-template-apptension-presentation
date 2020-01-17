import React from "react";
import { Slide, Heading, Text, CodePane, Appear } from "spectacle";

const chainingNow = `const street = user?.address?.street`;

const chainingThen = `const street = user && user.address && user.address.street

// OR

const street = R.path(['address', 'street'], user)`;

const nullishThen = `
const fallbackToMinusOne = a => a || -1;
fallbackToMinusOne(null); // -1
fallbackToMinusOne(0); // -1
fallbackToMinusOne(1); // 1
`;

const nullishNow = `
const fallbackToMinusOne = a => a ?? -1;
fallbackToMinusOne(null); // -1
fallbackToMinusOne(0); // 0
fallbackToMinusOne(1); // 1
`;

export const optionalChainingSlide = [
    (
      <Slide>
          <Heading>Optional chaining</Heading>

          <CodePane>{chainingThen}</CodePane>

          <Appear elementNum={0}>
            <Text>Becomes this:</Text>

            <CodePane>{chainingNow}</CodePane>
          </Appear>
      </Slide>
    ),
    (
      <Slide>
          <Heading>Nullish Coalescing</Heading>

          <CodePane>{nullishThen}</CodePane>

          <Appear elementNum={0}>
            <Text>Becomes this:</Text>

            <CodePane>{nullishNow}</CodePane>
          </Appear>
      </Slide>
    )
];
