import { Appear, CodePane, Heading, Notes, Slide, Text } from 'spectacle';
import React from 'react';

export const lazyLoading = [
  (
    <Slide>
      <Heading>Lazy loading</Heading>
      <Heading fontSize="h2">@loadable/component</Heading>

      <Appear elementNum={0}>
        <Text>1) Load component using asyncComponent helper</Text>
        <CodePane>{`const Home = asyncComponent(() => import('./home'));`}</CodePane>
      </Appear>

      <Appear elementNum={1}>
        <Text>2) Use like like regular component</Text>
        <CodePane>{`<Home />`}</CodePane>
      </Appear>

      <Appear elementNum={2}>
        <Text>3) Profit</Text>
        <Text>It will be spit into separate chunk and only loaded when its actually rendered.</Text>
      </Appear>
    </Slide>
  )
];
