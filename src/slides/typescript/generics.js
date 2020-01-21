import React from 'react';
import { Slide, Heading, CodePane, Text, Appear, Image, Notes } from 'spectacle';

import genericsFail from '../../images/generics_fail.png';
import genericsFail2 from '../../images/generics_fail_2.png';

export const generics = [
  (
    <Slide>
      <Heading>Generic types</Heading>

      <CodePane>
        {`const duplicate = <T>(v: T): T[] => [v, v];`}
      </CodePane>

      <Appear elementNum={0}>
        <Text>This will work:</Text>

        <CodePane>
          {`const a: string[] = duplicate('test');`}
        </CodePane>
      </Appear>

      <Appear elementNum={1}>
        <Text>This won't work:</Text>

        <Image src={genericsFail}/>
      </Appear>

      <Notes>
        - we dont know exactly what type of input we get
        - but we know what output we get as soon as we know the input type
        - TS knows the result type as soon as we use pass parameter to the function
      </Notes>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Generic types</Heading>

      <CodePane>
        {`const createIdentityFn = <T>() => (param: T) => param;`}
      </CodePane>

      <Appear elementNum={0}>
        <Text>This will work:</Text>

        <CodePane>
          {`const fn1: (param: string) => string = createIdentityFn<string>();`}
        </CodePane>
      </Appear>

      <Appear elementNum={1}>
        <Text>This won't work:</Text>

        <CodePane>{`const fn2: (param: number) => number = createIdentityFn<string>();`}</CodePane>
        <Image src={genericsFail2}/>
      </Appear>

      <Notes>
        We can also explicitly pass the generic type
      </Notes>
    </Slide>
  )
]
