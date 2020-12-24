import React,{useState, useEffect} from 'react';

import {RouteComponentProps, withRouter} from 'react-router-dom'
import styled from 'styled-components'
import {Location} from 'history'

type StateType={
    name:string
}
type LocationProps = Location<StateType>;
// interface Props extends RouteComponentProps<{},{}> ,StateType{
// }

interface Props  {
    location: LocationProps;
    
 }
const HomePage:React.FC<Props>=({location})=> {
    // const size = useWindowSize()
//   const panelMargin=  (size.width-360)/2
  

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


  return (
    <React.Fragment>
    
    <Main>  
    <SchoolList> <span className="school-name">Hi there! Welcome to your education showcase. </span></SchoolList> 
    <Title >Welcome to {location.state.name}'s education page  </Title>
    <Button>Add new education</Button>
   <FullBio>
<div className='main-panel'>Type your name and click "Enter" below to begin!</div>

   </FullBio>
   </Main>
   </React.Fragment>
  
  );
}



export default HomePage;