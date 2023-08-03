export const isInputEmpty = (input) => {
  if (input === undefined || input === null) {
    return 'Required field';
  }
  if (input.trim() === '') {
    return 'Required field';
  }
  return '';
};

const exportValidation = { isInputEmpty };

export default exportValidation;
