import React from "react";
import { Slide, Heading, Text, CodePane, Appear } from "spectacle";

const chainingNow = `const street = user?.address?.street`;

const chainingThen = `const street = user && user.address && user.address.street

// OR

const street = R.path(['address', 'street'], user)`;

const nullishThen = `const fallbackToMinusOne = a => a || -1;
fallbackToMinusOne(null); // -1
fallbackToMinusOne(0); // -1
fallbackToMinusOne(1); // 1`;

const nullishNow = `const fallbackToMinusOne = a => a ?? -1;
fallbackToMinusOne(null); // -1
fallbackToMinusOne(0); // 0
fallbackToMinusOne(1); // 1`;

const numericSeparators = `1000000000; // Is this a billion? a hundred millions? Ten millions?
101475938.38; // what scale is this? what power of 10?

1_000_000_000; // Ah, so a billion
101_475_938.38; // And this is hundreds of millions`

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
    ),
    (
      <Slide>
        <Heading>Numeric Separators</Heading>

        <CodePane>{numericSeparators}</CodePane>
      </Slide>
    )
];
