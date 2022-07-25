import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../Button';
import FlexWrapper from '../FlexWrapper';
import GuestItem from './GuestItem';

const GuestList = () => {
  const [guestList, setGuestList] = useState([]);
  const [value, setValue] = useState('');
  const onChange = (e) => setValue(e.target.value);
  const onGuestAdd = () => setGuestList([...guestList, { id: new Date(), value }]); // copy old array and add new item to the end
  const onReverseList = () => setGuestList([...guestList].reverse()); // copy old array and reverse a new array
  const onGuestDelete = (idx) => setGuestList(guestList.filter((guest, index) => index !== idx ));
  useEffect(() => {
    const localGuestListJSON = localStorage.getItem('guestList') || '[]';
    const localGuestList = JSON.parse(localGuestListJSON);
    setGuestList(localGuestList);
  }, []);
  useEffect(() => {
    localStorage.setItem('guestList', JSON.stringify(guestList));
  }, [guestList]);
  // useEffect(() => console.log({ hello: 'world' })); every time when a component will render
  return (
    <FlexWrapper width={450}>
      <div>
        <h2>Guest list:</h2>
        <ul>
          {guestList.map((guest, index) => {
            return (
              <GuestItem
                key={guest.id} 
                guestName={guest.value} 
                onDelete={() => onGuestDelete(index)}
                onEditGuest={(newGuestName) => {
                  const copiedGuestList = [...guestList];
                  const oldGuest = guestList[index];
                  copiedGuestList[index] = {
                    ...oldGuest,
                    value: newGuestName,
                  };
                  setGuestList(copiedGuestList);
                }}
              />
            );
          })}
        </ul>
        <Button onClick={onReverseList}>Reverse list</Button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onGuestAdd();
          }}
        >
          <input onChange={onChange} value={value} />
          <Button type="submit">Add guest</Button>
        </form>
      </div>
    </FlexWrapper>
  );
};

export default GuestList;