import React from "react";
import { Slide, Heading, CodePane, Appear, Text } from "spectacle";

export const records = [
  <Slide>
    <Heading>Records</Heading>

    <CodePane
      lang={"javascript"}
      source={`type A = Record<string, number>;

const a: A = {
    foo: 0,
    bar: 1
};`}
    />
  </Slide>,
  <Slide>
    <Heading>Records</Heading>

    <CodePane
      lang={"javascript"}
      source={`enum N { ONE, TWO };

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
    />

    <Appear>
      <div>
        <Text>This will fail:</Text>

        <CodePane lang={"javascript"} source={`const b: B = { [N.ONE]: 0 };`} />
      </div>
    </Appear>
  </Slide>
];
