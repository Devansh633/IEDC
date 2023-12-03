import React,{useState} from 'react'
import { Footer, Navbar } from '../components'

const Pitch = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  
 
  
  const handleSubmit =(event)=>{
    event.preventDefault();
    console.log(name);
    console.log(email)
    console.log(comment)
    const mailtoLink = `mailto:heisdinesh18@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
        name
      )}%0D%0AEmail:%20${encodeURIComponent(
        email
      )}%0D%0AComment:%20${encodeURIComponent(comment)}`;
  
      window.location.href = mailtoLink;

  }
  return (
   <>
   <Navbar />
   <div className="mt-32 px-8 pb-16 md:mt-12 md:h-screen bg-gradient-to-t from-graay to-white flex flex-col items-center justify-center">
    <p className="font-bold text-xl md:w-4/5 mb-16 md:mb-0 text-center">Win the Entreprenuer of the month and join the elite club</p>
   <div className="flex flex-col items-center justify-center">
   <p className="text-4xl font-bold   md:hidden">Picth</p>
   <p className="text-4xl font-bold   md:hidden"> your Idea</p>
   </div>
        <div className='md:h-96   flex flex-col-reverse md:flex-row justify-evenly items-center rounded md:shadow-lg mt-10 '>
            <div className="md:w-5/12 pl-6 md:pl-0">
                <p className="text-4xl  font-bold hidden md:block">Picth<br /> your Idea</p>
                <p className="pt-6">The abstract should include</p>
                <ul style={{ listStyleType: 'circle' }} className='pl-6'>
                    <li>Problem Statement</li>
                    <li>Domain</li>
                    <li>Solution</li>
                    <li>Requirements</li>
                </ul>
                <p className="py-2">Make sure you have BMC  and Pitch Deck before
submitting your Idea.</p>
            </div>
            <div >
                <form action="mailto:heisdinesh18@gmail.com" method="post" enctype="text/plain"  className=" flex flex-col gap-2">
                    <input className="border-2 py-2 rounded px-2 w-80 rounded " type="text" placeholder="Name" onChange={(e)=>(setName(e.target.value))}  />
                    <input  className="border-2 py-2 rounded px-2 w-80 rounded " type="text" placeholder="Email" onChange={(e)=>(setEmail(e.target.value))} />
                    <textarea className="border-2 py-2 rounded px-2 w-80 rounded h-32" placeholder="Give abstract of your idea in 200 words" onChange={(e)=>(setComment(e.target.value))}></textarea>
                    <input className="cursor-pointer bg-greeen py-2 px-6 text-white rounded   hover:bg-green-400 duration:500" type="submit" />
                </form>
            </div>

        </div>
   </div>
   <Footer />
   </>
  )
}

export default Pitch