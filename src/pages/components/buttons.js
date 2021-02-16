import React from 'react';

export function PrimaryButton(props) {
  return (
    <button className='btn btn-login' onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export function NewButton(props) {
  return (
    <button className='btn new-btn' onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export function UrlButton(props) {
  return (
    <a className='btn' href={props.url}>
      {props.children}
    </a>
  );
}

