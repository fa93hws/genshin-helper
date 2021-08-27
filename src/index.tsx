import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Component = () => (
  <div>
    <div>Hello World Mode={process.env.NODE_ENV}</div>
  </div>
);

ReactDOM.render(<Component />, document.getElementById('root'));
