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
        <div>
          <input value={editValue} onChange={onChange} />
          <Button 
            onClick={() => {
              onEditGuest(editValue);
              onToggleEdit();
            }}>
            Save
          </Button>
        </div>
      )}
    </li>
  );
};

export default GuestItem;