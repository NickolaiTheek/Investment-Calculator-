import { useState } from "react";
export default function UserInput(){

   const[UserInput, setUserInput] = useState({
       initialInvestment : 10000,
       annualInvestment : 1200,
       expectedRuturn : 6,
       duration : 10,
   })

   function handleChange(inputIdentifier, newValue){
       setUserInput(prevUserInput => {
           return {
               ...prevUserInput,
               [inputIdentifier] : newValue
           };
       });

   }
   return (
       <section id = "user-input">
           <div className="input-group">
               <p>
                   <label>Initial Investment</label>
                   <input type="number"  
                          required
                          value = {UserInput.initialInvestment}
                          onChange={(event) => handleChange('initialInvestment' , event.target.value)}
                   />
               </p>
               <p>
                   <label>Annual Investment</label>
                   <input type="number"  
                          required
                          value = {UserInput.annualInvestment}
                          onChange={(event) => handleChange('annualInvestment' , event.target.value)}
                   />
               </p>
           </div>
           <div className="input-group">
               <p>
                   <label>Expected Return</label>
                   <input type="number"  
                          required 
                          value = {UserInput.expectedRuturn}
                          onChange={(event) => handleChange('expectedRuturn' , event.target.value)}
                   />
               </p>
               <p>
                   <label>Duration</label>
                   <input type="number"  
                          required
                          value = {UserInput.duration}
                          onChange={(event) => handleChange('duration' , event.target.value)}
                          />
               </p>
           </div>
       </section>
   );
}