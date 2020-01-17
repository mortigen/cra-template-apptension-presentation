import { Appear, CodePane, Heading, Image, Slide, Text } from 'spectacle';
import React from 'react';

import immer1 from '../images/immer1.png';
import immer2 from '../images/immer2.png';

export const immer = [
  (
    <Slide>
      <Heading>Immer</Heading>

      <Text>Produces new object based on old one</Text>

      <CodePane>
        {`const state = { foo: {a: 1}, bar: {b: 2} };

const newState = produce(state, draft => {
  draft.foo.a++;
});`}
      </CodePane>

      <Appear elementNum={0}>
        <Text>Doesn't modify the old object</Text>
        <Image src={immer1} />
      </Appear>

      <Appear elementNum={1}>
        <Text>Produces new instances of changed objects but keeps references for untouched values</Text>
        <Image src={immer2} />
      </Appear>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Immer + Redux</Heading>

      <Text>Create reducers using createImmutableReducer helper... (plop does that by default)</Text>
      <CodePane>
        {`export const reducer = createImmutableReducer(INITIAL_STATE, HANDLERS);`}
      </CodePane>

      <Appear elementNum={0}>
        <Text>And using like regular reducer - all magic happens underneath</Text>
        <CodePane>
          {`const handleSetLanguage = (state, { payload }>) => {
  state.language = payload;
};`}
        </CodePane>
      </Appear>
    </Slide>
  )
];
