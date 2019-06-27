import React from 'react';
import './styles.scss';

export default function Smiley({ mood }) {
  return (
    <div className={`mood__face ${mood}`}>
      <div className="face__eyes">:</div>
      <div className="face__mouth">)</div>
    </div>
  );
}
