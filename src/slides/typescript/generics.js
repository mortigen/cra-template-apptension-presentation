import React from 'react';
import { Slide, Heading, CodePane, Text, Appear, Image } from 'spectacle';

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
    </Slide>
  )
]
