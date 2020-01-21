import { Appear, CodePane, Heading, Notes, Slide, Text } from 'spectacle';
import React from 'react';

export const providerTesting = [
  (
    <Slide>
      <Heading>Testing with providers</Heading>

      <Text>What if you use router or selectors in your component (using hooks) and you want to test it?</Text>
      <Text>We can't test component without container like we did before</Text>

      <Appear elementNum={0}>
        <CodePane>
          {`const render = makeContextRenderer(() => <Users />);
render();`}
        </CodePane>
      </Appear>

      <Appear elementNum={1}>
        <Text>Or with custom props or context data</Text>

        <CodePane>
          {`render({ prop1: 'value' }, { store: {...} });`}
        </CodePane>
      </Appear>

      <Notes>
        Provider will wrap tested component with all required contexts (like router context, redux store context, intl etc)

        First will come with default store and default route

        You can also mock hooks with jest.mock
      </Notes>
    </Slide>
  )
];
