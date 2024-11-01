import Link from "next/link";

 function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link href="/About">Go to About Page</Link></li><br />
         <li><Link href="/Contact">Go to Contact Page</Link></li><br />
          <li><Link href="/Service">Go to Service Page</Link></li>
      </ul>
      
    </div>
  )
};
export default Home

