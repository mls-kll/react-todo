import React from 'react';
import { Link } from 'react-router-dom';

const EditError = () => (
  <div>
    <div>This todo doesn't exist</div><Link className='btn btn-warning' to="/">Go back to todo list</Link>
  </div>
);

export default EditError;
