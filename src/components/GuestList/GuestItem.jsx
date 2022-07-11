import React, { useState } from 'react';
import Button from '../Button';

const GuestItem = (props) => {
  const { guestName, onDelete, onEditGuest } = props;
  const [editValue, setEditValue] = useState(guestName);
  const [isEditMode, setIsEditMode] = useState(false);
  const onToggleEdit = () => setIsEditMode(!isEditMode);
  const onChange = (e) => setEditValue(e.target.value);
  return (
    <li>
      {guestName}
      <Button onClick={onDelete}>X</Button>
      <Button onClick={onToggleEdit}>Edit</Button>
      {isEditMode && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onEditGuest(editValue);
            onToggleEdit();
          }}
        >
          <input value={editValue} onChange={onChange} />
          <Button type="submit">
            Save
          </Button>
        </form>
      )}
    </li>
  );
};

export default GuestItem;