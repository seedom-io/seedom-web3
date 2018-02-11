import classNames from 'classnames';

const inputClass = (isValid) => {
  return classNames({
    input: true,
    'is-primary': isValid,
    'is-danger': !isValid
  });
};

const textareaClass = (isValid) => {
  return classNames({
    textarea: true,
    'is-primary': isValid,
    'is-danger': !isValid
  });
};

export { inputClass, textareaClass };
