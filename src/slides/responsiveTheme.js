import { Appear, CodePane, Heading, Notes, Slide, Text } from 'spectacle';
import React from 'react';

export const responsiveTheme = [(
  <Slide>
    <Heading>Responsive theme</Heading>

    <Text>Regular theme</Text>
    <CodePane>
      {`export const colors = {
  [Color.WHITE]: '#ffffff',
  [Color.BLACK]: '#000000',
};`}
    </CodePane>

    <Appear elementNum={0}>
      <Text>Responsive properties</Text>
      <CodePane>
        {`export const sizes = {
  [Size.HEADER]: responsiveValue(50, { [Breakpoint.TABLET]: 80 },
};`}
      </CodePane>
    </Appear>

    <Appear elementNum={1}>
      <Text>Theme values adapt based on current window size</Text>
      <CodePane>
        {`const Header = styled.header\`
  height: ${'${themeSize([Size.HEADER])}'}px; // this is 50 for mobile and 80 for tablet and larger        
\``}
      </CodePane>
    </Appear>

    <Notes>
      Useful for global & reused values which should behave in different way based on browser size.
    </Notes>
  </Slide>
)];
