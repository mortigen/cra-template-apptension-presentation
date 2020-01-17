import { Appear, CodePane, Heading, Slide, Text } from 'spectacle';
import React from 'react';

export const reduxTools = [
  (
    <Slide>
      <Heading>Redux tools</Heading>
      <Heading style={{ textDecoration: 'line-through' }}>redux-sauce</Heading>

      <CodePane>
        {`const createAction = actionCreator('LOCALES');

export const setLanguage = createAction('SET_LANGUAGE');`}
      </CodePane>

      <Appear elementNum={0}>
        <Text>Usage</Text>
        <CodePane>
          {`dispatch(setLanguage('pl'));
          
setLanguage.toString() === 'LOCALES/SET_LANGUAGE';

//in sagas
takeLatest(setLanguage, handleSetLanguage)]
          `}
        </CodePane>
      </Appear>
    </Slide>
  ),
];
