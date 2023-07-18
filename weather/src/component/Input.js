// import React from "react";
// const Form=(props)=>{ 
    
//         return(
//          <form onSubmit={props.getweather}>
//             <input  type='text'  name="city"placeholder="City..." />
//             <input type ='text ' name="country" placeholder="Country..." />
//             <button> Get Weather </button>

//         </form>
//         )
//     }

// export default Form
import"./Input.css";
import {FiSearch} from 'react-icons/fi';
import React from "react";
const Input=({text,submit})=>{ 
    
        return(
<div>
    <form className="input"onSubmit={submit} >
        <input type="text" placeholder="Please Inter Your Location" className="input-value " onChange={text}/>
   
   
    <span className="input-icon">
        <FiSearch/>
    </span>
     </form>   
       </div>   
        )
    }

export default Input;