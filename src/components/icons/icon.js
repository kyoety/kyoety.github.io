import React from 'react';
import IconExternal from './external';

const Icon = ({ name }) => {
  switch (name) {
    case 'External':
      return <IconExternal />;
    default:
      return <IconExternal />;
  }
};

export default Icon;