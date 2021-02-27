import React, { useState } from 'react'

function Cards() {
    const [state, setstate] = useState({
        name:[],
        rollno:[],
        status:[],
        marks:[],
    })
    const values = [
        {
            name:"ankit",
            rollno:"1234",
            status:"pass",
            marks:"1000%",
        },
        {
            name:"nikhil",
            rollno:"12345",
            status:"pass yes",
            marks:"10000%",
        },
        {
            name:"rangana hairath",
            rollno:"12345",
            status:"pass yes",
            marks:"10000%",
        },
        {
            name:"Ricky Ponting",
            rollno:"12345",
            status:"pass yes",
            marks:"10000%",
        }
    ]
    // console.log(values)

    function Body() {
        // console.log(values)
        return(
            <>
            {values.map((val,ind)=>{
               
                return(
                    <>
                        <p>{val.name}</p>
                                
                        <button onClick={()=>{
                         setstate({status:val.status,name:val.name,rollno:val.rollno,marks:val.marks})
 
                                    // Display(val);
                                    








                        }}>Details</button>
                    </>
                )
            })}
               
            </>
        )
    }

    function Display() {
        // console.log(val.name)
        // console.log()
        return(
            <>
            <br/>
            name:{state.name}, <br/>
            rollno:{state.rollno},<br/>
            status:{state.status},<br/>
            marks:{state.marks},
                {/* name is : {val.name}  2 */}
            </>
        )
    }
    return (
        <div>
           <Body />
           <Display />
        </div>
    )
}

export default Cards
