import React,{useState, useEffect} from 'react';

import { Formik, Field, Form, } from "formik";
import styled from 'styled-components'
interface Props  {
    options:string[];
    schoolSelectorChange:any;
}


const AutoComplete: React.FC<Props>=({options,schoolSelectorChange})=> {

  
const [activeOption, setActiveOption] = useState(0);
const [filteredOptions, setFilteredOptions] = useState([]);
const [showOptions, setShowOptions]=useState(false)
const [userInput, setUserInput]=useState("")

 const onChange = (e: { currentTarget: { value: any; }; }) => {
    console.log('onChanges');

    
    const userInput = e.currentTarget.value;
    //find the school that matches the user input
    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1

    );

    let arry= filteredOptions as any

    setActiveOption(0)
    setFilteredOptions(arry)
    setShowOptions(true)
    setUserInput(e.currentTarget.value)
    
  };
 const onClick = (e: { currentTarget: { innerText: React.SetStateAction<string>; }; }) => {
    setActiveOption(0)
    setFilteredOptions([])
    setShowOptions(false)
    setUserInput(e.currentTarget.innerText)
    schoolSelectorChange(e.currentTarget.innerText)
      
   
  };

 const onKeyDown = (e: { keyCode: number; }) => {
    

    if (e.keyCode === 13) {
        setActiveOption(0)
        setShowOptions(false)
        setUserInput(filteredOptions[activeOption])
      
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setActiveOption(activeOption-1)
      
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      setActiveOption(activeOption+1)

      schoolSelectorChange(userInput)
      
      
    }
  };

  const Options = styled.div`
 border-width:5px;
 border-color:black;
 max-height: 150px;
 width:200px;
 overflow: scroll;
 
 .options{
    border-width:5px;
 border-color:black;  
 }

`;

let optionList
if(showOptions && userInput){
    if (filteredOptions.length) {
        optionList = (
         
         <Options>
             <div style={{overflow:'scroll'}}>
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = 'option-active';
              }
              return (
                <div  style={{marginTop:10}}className="options" key={optionName} onClick={onClick}>
                  {optionName}
                </div>
              );
            })}
            </div>
          </Options>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      } 
}


  return (
    <React.Fragment>
    <div className="search">
      <Field
        type="text"
        name="name"
        className="search-box"
        placeholder="Enter the school name"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
      />
      </div>
   
    {optionList}
  </React.Fragment>
  
  );
}


export default AutoComplete;