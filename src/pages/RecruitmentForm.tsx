import React from 'react';
import { SubmitHandler, SubmitErrorHandler, useForm, FieldErrors, UseFormRegister } from 'react-hook-form';
import { Field, Form } from '../types.ts';
import { useNavigate } from 'react-router-dom';
import { componentsMap } from '../configForm.ts';

function RecruitmentForm({config}: { config: Field[] }): React.ReactElement {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm<Form>();

  const onSubmit: SubmitHandler<Form> = (data: Form): void => {
    console.log(data);
    navigate('/summary');
  }

  const onError: SubmitErrorHandler<Form> = (data: FieldErrors<Form>): void => {
    console.log('errors:', data)
  }

  return (
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {config.map((el: Field, index: number) => {
          const FormField = componentsMap.get(el.type) as React.ElementType<{
            data: Field,
            register: UseFormRegister<Form>,
            errors?: FieldErrors<Form>
          }>;

          return (
              <React.Fragment key={index}>
                <FormField data={el} register={register} errors={errors}/>
              </React.Fragment>)
        })}

        <button
            type="submit"
            className="rounded-md bg-primary px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:brightness-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary mt-4 mr-4"
        >
          Submit
        </button>
        <button
            type="button"
            onClick={() => reset()}
            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-secondary hover:bg-gray-50"
        >
          Reset
        </button>
      </form>
  )
}

export default RecruitmentForm
