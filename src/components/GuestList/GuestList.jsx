import React from 'react';
import { useState } from 'react';
import Button from '../Button';
import FlexWrapper from '../FlexWrapper';
import GuestItem from './GuestItem';

const GuestList = () => {
  const [guestList, setGuestList] = useState([]);
  const [value, setValue] = useState('');
  const onChange = (e) => setValue(e.target.value);
  const onGuestAdd = () => setGuestList([...guestList, value]); // copy old array and add new item to the end
  const onReverseList = () => setGuestList([...guestList].reverse()); // copy old array and reverse a new array
  const onGuestDelete = (idx) => setGuestList(guestList.filter((guest, index) => index !== idx ));
  return (
    <FlexWrapper width={1000}>
      <div>
        <h2>Guest list:</h2>
        <ul>
          {guestList.map((guest, index) => {
            return (
              <GuestItem 
                key={index} 
                guestName={guest} 
                onDelete={() => onGuestDelete(index)}
                onEditGuest={(newGuestName) => {
                  const copiedGuestList = [...guestList]; // [1,2,3,4] -> [1,2,3,4] (array)
                  copiedGuestList[index] = newGuestName; // array[0] = 10 - write -> [10,2,3,4]; console.log( array[0] -read )
                  setGuestList(copiedGuestList);
                }}
              />
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