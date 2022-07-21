import React, { useState }  from 'react';
import Button from '../Button';
import { useEffect } from 'react';
import Itemn from './ItemnBtns';

const FilteredList  =(props)=> {
    const [list,setList]= useState([]);
    const [value, setValue] = useState("");
    const onChange = (e) =>  setValue(e.target.value); 
    const onListAdd = () => setList([...list, { id: new Date(), value }]);
    const onDelete = (idx) => setList(list.filter((list, index) => index !== idx ));
    const [val,setVal] =useState("")
    useEffect(() => {
      const localListJSON = localStorage.getItem('List') || '[]';
      const localList = JSON.parse(localListJSON);
      setList(localList);
    }, []);
    useEffect(() => {
      localStorage.setItem('List', JSON.stringify(list));
    }, [list]);
   

   return (<>
            <form
            onSubmit={(e) => {
                e.preventDefault();
                onListAdd();
            }}
            >
            Add: <input onChange={onChange}   value={value}/> 
            <Button  type="submit" >Add</Button>
            </form>
        <div>
        Filter: <input onChange={(e)=>setVal(e.target.value)} value={val} /> 
        </div>
        <ul>
            {list.map((element, index) => {
                 if(val.length>0 && element.value!==val){
                    return null;
                }
                if(index===10){
                return( 
                 "Поздравляем! Вы добавили 10 гостей!"
           
                )
                }
                return(
                      <Itemn 
                 key={element.id} 
                 guestName={element.value} 
                 onDelete={() => onDelete(index)}
                 onEdit={(newName) => {
                    const copiedList = [...list]; 
                    const oldElement= list[index]; 
                    copiedList[index] = {
                        ...oldElement,
                        value: newName,
                      };
                    setList(copiedList);
                  }}
                />
                )
          
            })}
            
         </ul>
     </>
   )

};

export default FilteredList;