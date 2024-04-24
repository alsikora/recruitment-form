import React from 'react';
import type { UseFormRegister } from 'react-hook-form';
import { Field, Form } from '../../types.ts';

type SelectProps = {
  data: Field,
  register: UseFormRegister<Form>
}

function Select({data, register}: SelectProps): React.ReactElement {
  return (
      <div>
        <label htmlFor={data.name} className="block text-sm font-medium leading-6">{data.label}</label>
        <select
            id={data.name}
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-secondary focus:ring-primary sm:text-sm sm:leading-6"
            {...register(data.name, {...data.options})}>
          {data.collection?.map((option) => (
              <option value={option.id} key={option.id}> {option.title}</option>))
          }
        </select>
      </div>
  )
}

export default Select
