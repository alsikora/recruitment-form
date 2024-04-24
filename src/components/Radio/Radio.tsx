import React from 'react';
import type { UseFormRegister } from 'react-hook-form';
import { Field, Form } from '../../types.ts';

type RadioProps = {
  data: Field,
  register: UseFormRegister<Form>
}

function Radio({data, register}: RadioProps): React.ReactElement {
  return (
      <div>
        <fieldset className="mb-4">
          <legend className="block text-sm font-medium leading-6">{data.label}</legend>
          <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
            {data.collection?.map((option, index: number) => (
                <div key={option.id} className="flex items-center">
                  <input
                      id={option.id}
                      value={option.id}
                      type="radio"
                      defaultChecked={index === 0}
                      className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                      {...register(data.name, {...data.options})}
                  />
                  <label htmlFor={option.id}
                         className="ml-3 block text-sm font-medium leading-6">
                    {option.title}
                  </label>
                </div>
            ))}
          </div>
        </fieldset>
      </div>
  )
}

export default Radio
