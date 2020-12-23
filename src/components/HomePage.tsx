import React,{useState, useEffect} from 'react';

import {RouteComponentProps} from 'react-router-dom'
import styled from 'styled-components'

interface Props extends RouteComponentProps {}
const HomePage:React.FC<Props>=({location})=> {
    // const size = useWindowSize()
//   const panelMargin=  (size.width-360)/2
  

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
console.log(location)
  return (
      
   <div>
   <Main>
<div className='greeting'>Hi there! Welcome to your education showcase.</div>
<div className='instruction'>Type your name and click "Enter" below to begin!</div>
<Form>
    <Input type="text"/>
<br/>
<Button>Enter</Button>
</Form>
   </Main>
   </div>
  );
}

// function useWindowSize() {
//     // Initialize state with undefined width/height so server and client renders match
//     const [windowSize, setWindowSize] = useState({
//       width: 0,
//       height: 0,
//     });
  
//     useEffect(() => {
//       // Handler to call on window resize
//       function handleResize() {
//         // Set window width/height to state
//         setWindowSize({
//           width: window.innerWidth,
//           height: window.innerHeight,
//         });
//       }
      
//       // Add event listener
//       window.addEventListener("resize", handleResize);
      
//       // Call handler right away so state gets updated with initial window size
//       handleResize();
      
//       // Remove event listener on cleanup
//       return () => window.removeEventListener("resize", handleResize);
//     }, []); // Empty array ensures that effect is only run on mount
  
//     return windowSize;
//   }

export default HomePage;