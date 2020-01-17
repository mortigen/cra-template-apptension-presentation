import React from 'react';
import { Slide, Heading, CodePane, Appear, Text } from 'spectacle';

export const records = [
  (
    <Slide>
      <Heading>Records</Heading>

      <CodePane>
        {`type A = Record<string, number>;

const a: A = {
    foo: 0,
    bar: 1
};`}
      </CodePane>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Records</Heading>

      <CodePane autoFillHeight={true}>
        {`enum N { ONE, TWO };

type B = Record<N, number>;

// equals

type B = {
    [N.ONE]: string,
    [N.TWO]: string
}


const b: B = {
    [N.ONE]: 0,
    [N.TWO]: 1
}`}
      </CodePane>

      <Appear elementNum={0}>
        <Text>This will fail:</Text>

        <CodePane>
          {`const b: B = { [N.ONE]: 0 };`}
        </CodePane>
      </Appear>
    </Slide>
  )
]
