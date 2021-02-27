import React from 'react'
import p1 from '../img/p1.jpeg'
import p2 from '../img/p2.png'

function Work() {
    
    return (
        <>
            <div className="CenterWork">
           <h3>CHECK OUT SOME OF MY WORKS.</h3>
           <div className="FindMyWork">
           <div> <center>Project 1</center>   <br/><img src={p1} alt=""  height="150px" width="150px"/></div> &emsp;
           <div> <center>Project 2</center>    <br/><img src={p2} alt=""  height="150px" width="150px"/></div> &emsp;
           </div>
           </div>
        </>
    )
}

export default Work
