import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from '@ui/header/header';
import 'normalize.css';

const Component = () => (
  <div>
    <Header />
    <div>Hello World Mode={process.env.NODE_ENV}</div>
  </div>
);

ReactDOM.render(<Component />, document.getElementById('root'));
