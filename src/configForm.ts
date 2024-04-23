import { Field, Components } from './types.ts';
import Input from './components/Input/Input.tsx';
import Radio from './components/Radio/Radio.tsx';
import Select from './components/Select/Select.tsx';
import React from 'react';

export const config: Field[] = [
  {label: 'First name', name: 'firstName', type: Components.Input, options: {required: false}},
  {
    label: 'Last name',
    name: 'lastName',
    type: Components.Input,
    options: {required: {value: true, message: "Last name field is required"}}
  },
  {
    label: 'Size',
    name: 'size',
    type: Components.Radio,
    options: {required: {value: true, message: "This field is required"}},
    collection: [
      {id: 's', title: 'Small'},
      {id: 'm', title: 'Medium'},
      {id: 'l', title: 'Large'},
      {id: 'xl', title: 'Extra Large'}
    ]
  },
  {
    label: 'Location',
    name: 'location',
    type: Components.Select,
    options: {required: {value: true, message: "Chose your location"}},
    collection: [
      {id: 'pl', title: 'Poland'},
      {id: 'de', title: 'Germany'},
      {id: 'es', title: 'Spain'},
      {id: 'it', title: 'Italy'}
    ]
  },
  {
    label: 'Age',
    name: 'age',
    type: Components.Input,
    options: {
      required: {value: true, message: "Required"},
      pattern: {value: /\d+/, message: "Please enter number for age."}
    }
  }
];

export const componentsMap = new Map<Components, React.ElementType>([[Components.Input, Input], [Components.Select, Select], [Components.Radio, Radio]]);