export const required= value=> value? undefined:"required"



export const maxLenght = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
