import React from 'react';
import { FieldError } from 'react-hook-form';

type ErrorProps = {
  error: FieldError | undefined
}

function ValidationError({error}: ErrorProps): React.ReactElement {
  return (
      <>
        {error && <span role="alert" className="mt-2 text-sm text-red-600">{error.message}</span>}
      </>
  )
}

export default ValidationError
