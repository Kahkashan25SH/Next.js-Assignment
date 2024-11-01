import React from "react";
import Link from "next/link";

const Services: React.FC = () => {
      return (
        <div>
          <h1>Services:</h1>
           <p>We specialize in creating engaging, user-friendly websites.</p>
               We offer a range of web development services, including:
        
          
        <div>
            <ul>
               <li className='menulink'><Link href='/Service/Website-development'> Website-development</Link></li> 
               <li className='menulink'><Link href='/Service/App-development'> App-development </Link></li>     
            </ul>
          
        </div>
        </div>
      );
    }
   


   export default Services;