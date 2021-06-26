import React from 'react';
import { APIProvider } from './APIContext';

export const RootContext: React.FC = (props) => {
  return <APIProvider></APIProvider>;
};
