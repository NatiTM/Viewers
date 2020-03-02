import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

export default function NotFound({
  message = 'Sorry, this page does not exist.',
  showGoBackButton = true,
}) {
  return (
    <div className={'not-found'}>
      <div>
        <h4>{message}</h4>
        {showGoBackButton && (
          <h5>
            <Link to={'/hms/'}>Go back to dashboard</Link>
          </h5>
        )}
      </div>
    </div>
  );
}
