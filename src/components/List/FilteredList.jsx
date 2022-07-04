import React, { useState }  from 'react';
import Button from '../Button';

const FilteredList  =(props)=> {
    const [list,setList]= useState([]);
    const [value, setValue] = useState("");
    const onChange = (e) =>  setValue(e.target.value); 
    const onListAdd = () => setList([...list, value]);
    const onDelete = (idx) => setList(list.filter((list, index) => index !== idx ));
    const [val,setVal] =useState("")
 
   return (<>
        <div>
            Add: <input onChange={onChange}   value={value}/> 
            <Button onClick={onListAdd}>Add</Button>
        </div>
        <div>
        Filter: <input onChange={(e)=>setVal(e.target.value)} value={val} /> 
        </div>
        <ul>
            {list.map((element, index) => {
                if(val.length>0 && element !==val){
                    return null;
                }
            return (        
                 <li key={index}>
                {element} <Button onClick={() => onDelete(index)}>X</Button>
              </li>);
         
            })}
            
         </ul>
     </>
   )

};

export default FilteredList;