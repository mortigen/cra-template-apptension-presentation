import { Appear, CodePane, Heading, Notes, Slide, Text } from "spectacle";
import React from "react";

export const responsiveTheme = [
  <Slide>
    <Heading>Responsive theme</Heading>

    <Text>Regular theme</Text>
    <CodePane
      lang={"javascript"}
      source={`export const colors = {
  [Color.WHITE]: '#ffffff',
  [Color.BLACK]: '#000000',
};`}
    />

    <Appear order={0}>
      <div>
        <Text>Responsive properties</Text>
        <CodePane
          lang={"javascript"}
          source={`export const sizes = {
  [Size.HEADER]: responsiveValue(50, { [Breakpoint.TABLET]: 80 },
};`}
        />
      </div>
    </Appear>

    <Appear order={1}>
      <div>
        <Text>Theme values adapt based on current window size</Text>
        <CodePane
          lang={"javascript"}
          source={`const Header = styled.header\`
  height: ${"${themeSize([Size.HEADER])}"}px; // this is 50 for mobile and 80 for tablet and larger        
\``}
        />
      </div>
    </Appear>

    <Notes>
      Useful for global & reused values which should behave in different way
      based on browser size.
    </Notes>
  </Slide>
];
