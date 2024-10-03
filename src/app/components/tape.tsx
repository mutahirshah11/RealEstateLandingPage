
import Image from "next/image";

const word = [
    'Featured' ,
    'Featured' ,
    'Featured' ,
    'Featured' ,
    'Featured' ,
    'Featured' ,
    'Featured' ,
    'Featured' ,
    'Featured' ,
    'Featured' ,
    'Featured' ,
    'Featured' ,
] ; 

const Tape = () => {
    return (
       

      <div className=" my-20 md:mt-52 overflow-x-clip hover:cursor-pointer">
        
        
        

        <div className="bg-gradient-to-r from-gray-950 to-black -rotate-0 -m-0">
          
      <div className="flex felx-none gap-4 py-3 ">
        {word.map((word) => (
          <div key={word} className="inline-flex gap-12 items-center ">
            <span className="text-white uppercase text-[10px] md:text-[15px] lg:text-[20px] font-extrabold -rotate-0"> ⭐{word}</span>
            
            

          </div>
          
        ))}
      </div>
      
      </div>
      </div>
    );
  };
  

  export default Tape ;