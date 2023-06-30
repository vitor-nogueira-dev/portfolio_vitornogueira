import React from 'react';
import Typical from 'react-typical';

import { ITypeEffectProps } from '@/interfaces/ITypeEffectProps';

const TypingEffect: React.FC<ITypeEffectProps> = ({ text, time }) => (
  <Typical
    steps={[`${text}`, +time]}
    loop={Infinity}
    wrapper="p"
  />
);

export default TypingEffect;
