// src/interfaces.ts
export interface FormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement;
    password: HTMLInputElement;
    persistent: HTMLInputElement;
  }
  
  export interface SignInFormElement extends HTMLFormElement {
    readonly elements: FormElements;
  }
  