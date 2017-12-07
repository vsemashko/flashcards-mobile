import React from 'react';
import StatusBar from './FlashcardsStatusBar';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<StatusBar />).toJSON();
    expect(rendered).toBeTruthy();
});
