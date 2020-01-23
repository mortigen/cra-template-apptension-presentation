import { Appear, CodePane, Heading, Notes, Slide, Text } from "spectacle";
import React from "react";

export const lazyLoading = [
  <Slide>
    <Heading>Lazy loading</Heading>
    <Heading fontSize="h2">@loadable/component</Heading>

    <Appear order={0}>
      <div>
        <Text>1) Load component using asyncComponent helper</Text>
        <CodePane
          lang={"javascript"}
          source={`const Home = asyncComponent(() => import('./home'));`}
        />
      </div>
    </Appear>

    <Appear order={1}>
      <div>
        <Text>2) Use like like regular component</Text>
        <CodePane lang={"javascript"} source={`<Home />`} />
      </div>
    </Appear>

    <Appear order={2}>
      <div>
        <Text>3) Profit</Text>
        <Text>
          It will be spit into separate chunk and only loaded when its actually
          rendered.
        </Text>
      </div>
    </Appear>
  </Slide>
];
