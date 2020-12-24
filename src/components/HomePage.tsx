import React,{useState, useEffect} from 'react';

import {RouteComponentProps, withRouter} from 'react-router-dom'
import styled from 'styled-components'
import {Location} from 'history'
import {useSelector, useDispatch} from 'react-redux'
import {SchoolState} from './reducers/schools'
import {addSchool} from './actions'
import Modal from 'react-modal';

type StateType={
    name:string
}
type LocationProps = Location<StateType>;


interface Props  {
    location: LocationProps;
    
 }
const HomePage:React.FC<Props>=({location})=> {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    
    // const size = useWindowSize()
//   const panelMargin=  (size.width-360)/2
  //const schools = useSelector<SchoolState, SchoolState['schools']>((state)=>state.schoolReducer.schools)
 // const schools = useSelector((state)=>state)
const schools:any= useSelector((state)=>state)

const dispatch = useDispatch()
  console.log(schools.schoolReducer.schools)
const Main = styled.div`


display: flex;
align-items: center;
justify-content: center;
flex-direction:row;

`
const Title = styled.h4`


margin-top:-320px;
margin-left:300px;


position:absolute;
align-self:'center';


`;

const FullBio = styled.div`
position: fixed;
width:830px;
background:lightgray;
margin-left:340px;
margin-top:200px;
min-height: 310px;




`;


const SchoolList =styled.form`
 background:lightgray;
    
    margin-right:850px;
    margin-top:10%;
    max-width:230px;
    position:'absolute';
    min-height:370px;
    display: flex;
    padding-top:10px;



    .school-name{
        margin: 0 auto;
        width:50%;
    font-size:13px;
    
    }

`;



const Button = styled.button`
  background: lightgray;
  
  height:40px;
  width:170px;
  font-size:15px;
  position:absolute;
  margin-top:-230px;
  margin-left:300px;
  
  
`;

function addingSchool(){
    setIsOpen(true);

}
function closeModal(){
    setIsOpen(false);
  }
  

const customStyles = {
    content : {
      top                   : '40%',
      left                  : '62%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
 
  return (
    <React.Fragment>
    
    <Modal
          isOpen={modalIsOpen}
          
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          
        
          <div>I am a modal</div>
          <form >
            
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
          <button onClick={closeModal}>close</button>
        </Modal>


    <Main>  
    <SchoolList> <span className="school-name">Hi there! Welcome to your education showcase. </span></SchoolList> 
    <Title >Welcome to {location.state.name}'s education page  </Title>
    <Button onClick={addingSchool}>Add new education</Button>
   <FullBio>
<div className='main-panel'>Type your name and click "Enter" below to begin!</div>

   </FullBio>
   </Main>
   </React.Fragment>
  
  );
}



export default HomePage;