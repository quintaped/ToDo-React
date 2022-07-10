import React, { useState } from 'react';
import Button from '../Button';

const Itemn = (props) => {
    const onToggleEdit = () => setEditMode(!editMode);
    const onChange = (e) => setEditValue(e.target.value);
    const { guestName, onDelete, onEdit } = props;
    const [editValue, setEditValue] = useState(guestName);
    const [editMode, setEditMode] = useState(false);
    return(
        <li>
        {guestName}
        <Button onClick={onDelete}>X</Button> 
        <Button onClick={onToggleEdit}>Edit</Button>
        {editMode && (
            <div>
            <input value={editValue} onChange={onChange} />
            <Button 
                onClick={() => {
                onEdit(editValue);
                onToggleEdit();
                }}>
                Apply
            </Button>
            </div>
        )}
        </li>
    )
};

export default Itemn;