import React from 'react';
import { useState } from 'react';
import Button from '../Button';
import FlexWrapper from '../FlexWrapper';

const GuestList = () => {
  const [guestList, setGuestList] = useState([]);
  const [value, setValue] = useState('');
  const onChange = (e) => setValue(e.target.value);
  const onGuestAdd = () => setGuestList([...guestList, value]); // copy old array and add new item to the end
  const onReverseList = () => setGuestList([...guestList].reverse()); // copy old array and reverse a new array
  const onGuestDelete = (idx) => setGuestList(guestList.filter((guest, index) => index !== idx ));
  return (
    <FlexWrapper width={500}>
      <div>
        <h2>Guest list:</h2>
        <ul>
          {guestList.map((guest, index) => {
            return (
              <li key={index}>
                {guest} <Button onClick={() => onGuestDelete(index)}>X</Button>
              </li>
            );
          })}
        </ul>
        <Button onClick={onReverseList}>Reverse list</Button>
      </div>
      <div>
        <input onChange={onChange} value={value} />
        <Button onClick={onGuestAdd}>Add guest</Button>
      </div>
    </FlexWrapper>
  );
};

export default GuestList;