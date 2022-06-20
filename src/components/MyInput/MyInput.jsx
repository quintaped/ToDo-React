import React, { useState } from 'react';
import styles from './MyInput.module.css';

const MyInput = (props) => {
  const { defaultValue = '' } = props;
  const [value, setValue] = useState(defaultValue);
  const onChange = (e) => setValue(e.target.value);
  return (
    <div>
      <input onChange={onChange} value={value} />
      {value}
    </div>
  );
};

export default MyInput;