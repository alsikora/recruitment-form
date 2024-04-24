import React from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { Field, Form } from '../../types.ts';
import ValidationError from '../ValidationError/ValidationError.tsx';

type InputProps = {
  data: Field,
  register: UseFormRegister<Form>,
  errors: FieldErrors<Form>
}

function Input({data, register, errors}: InputProps): React.ReactElement {
  return (
      <div>
        <label htmlFor={data.name} className="block text-sm font-medium leading-6">{data.label}</label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
              id={data.name}
              aria-invalid={errors[data.name] ? "true" : "false"}
              className={`block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset ring-secondary focus:ring-inset sm:text-sm sm:leading-6 ${errors[data.name] ? 'text-red-900 focus:ring-red-500 placeholder:text-red-300 ring-red-300' : 'focus:ring-primary'}`}
              {...register(data.name, {...data.options})} />
          {errors[data.name] && <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true"/>
          </span>}
        </div>
       <ValidationError error={errors[data.name]}/>
      </div>
  )
}

export default Input
