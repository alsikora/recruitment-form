export enum Components {
  Input,
  Select,
  Radio,
}

export type Field = {
  label: string,
  name: string,
  type: Components,
  options: {
    required: false | { value: boolean, message: string },
    pattern?: { value: RegExp, message: string }
  },
  collection?: { id: string, title: string }[]
}

export type Form = {
  [index: string]: string,
  firstName: string,
  lastName: string,
  age: string,
}

export enum Themes {
  Green = 'green',
  Default = '',
  Purple = 'purple',
  Yellow = 'yellow',
}