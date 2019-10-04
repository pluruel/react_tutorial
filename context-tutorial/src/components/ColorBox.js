import React, { useContext } from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: '128px',
          height: '128px',
          margin: '0 auto',
          background: state.color,
        }}
      />
      <div
        style={{
          width: '64px',
          height: '64px',
          margin: '0 auto',
          background: state.subColor,
        }}
      />
    </>
  );
};

export default ColorBox;
