import { useState } from "react";

export const useForm = (initialState = {}) => {
  // InitialState recibe los estados iniciales del formStatus.
  // Acá puedo agregar toda la lógica de validación.
  const [values, setValues] = useState(initialState);
  const reset = () => {
    setValues(initialState);
  };
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
