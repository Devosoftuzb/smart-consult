import { useState } from 'react';

let state = {
  activeClass: '',
  setActiveClass: () => {}
};

export const useCustomState = () => {
  const [activeClass, setActiveClass] = useState('');

  state = { activeClass, setActiveClass };

  return state;
};

export const toggleClass = (className) => {
  state.setActiveClass((prevClass) => {
    return prevClass === className ? '' : className;
  });
};
