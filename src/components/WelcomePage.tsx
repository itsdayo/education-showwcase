import React,{useState, useEffect} from 'react';


import styled from 'styled-components'
import {RouteComponentProps} from 'react-router-dom'
interface Props extends RouteComponentProps {}


const WelcomePage: React.FC<Props>=({history})=> {

  
const [name, setName] = useState("");
const Main = styled.div`

margin-top:15%;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;

.greeting{
    font-weight:bold;
}
.instruction{
    font-weight:bold;
    margin-top:70px;
}
`;

const Form =styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
margin-top:10px;


`;
const Input = styled.input`

margin-top:5px;
width:350px;
height:25px;
box-shadow:0px 3px lightgray;
`;
const Button = styled.button`
  background: lightgray;
  margin-top:5px;
  height:40px;
  width:90px;
  font-size:20px;
  
  
`;
const handleSubmit=(event:any)=>{
    history.push({
    pathname:'/about',
    state:{name:name}
})
event.preventDefault();
}
  return (
   <Main>
<div className='greeting'>Hi there! Welcome to your education showcase.</div>
<div className='instruction'>Type your name and click "Enter" below to begin!</div>
<Form onSubmit={handleSubmit}>
    <Input autoFocus value={name} onChange={(e)=>setName(e.target.value)} type="text"/>
<br/>
<Button type='submit'>Enter</Button>
</Form>
   </Main>
  );
}


export default WelcomePage;