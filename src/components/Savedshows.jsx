import React, { useState ,useEffect } from 'react'
import {MdChevronLeft ,MdChevronRight } from "react-icons/md"
import { UserAuth } from "../context/AuthContext"
import {db} from "../firebase"
import {updateDoc , doc , onSnapshot} from "firebase/firestore"
import { AiOutlineClose  } from "react-icons/ai"




export const Savedshows = () => {

const { user}= UserAuth();

const[movies ,setmovies]=useState([])
const [scrollPosition, setScrollPosition] = useState(0);

useEffect(()=>{
  onSnapshot(doc(db, "users" , `${user?.email}`) , (doc)=>{
      setmovies(doc.data()?.savedShows)
  })
},[user?.email])

const movieref = doc(db , "users" , `${user?.email}`)



const deleteshow = async (passedID)=>{
  try {
    const result= movies.filter((item)=> item.id !== passedID)
    await updateDoc(movieref, {
      savedShows:result
    })
  } catch (error) {
    console.log(error.message)
    
  }
}


const scroll = (scrollOffset) => {
  const newScrollPosition = scrollPosition + scrollOffset;
  const container = document.getElementById('slider');
  container.scrollLeft = newScrollPosition;
  setScrollPosition(newScrollPosition);
};

return(

  <>
  <h2 className="text-white font-bold md:text-xl py-4">my shows</h2>
       <div className="relative item-centr text-center group scroll-smooth"><MdChevronLeft onClick={() => scroll(-380)} size={40} className="bg-white rounded-full left-[-20px] top-[40%] absolute opacity-50 hover:opacity-100 cursor-pointer z-[10] hidden group-hover:block"/>

        <div className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth  scrollbar-hide relative  "  id={"slider"}>
{movies.map((item,id)=>{
  return(

    <div  key={id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer rounded relative p-2 ">
    <img className="rounded-md block h-full w-ful"  alt={item?.title} src={`https://image.tmdb.org/t/p/w500/${item?.img}`}/>
    <div className="absolute z-[2] top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
       <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{item?.title} </p>
       <p  onClick={()=>deleteshow(item.id)}   className='absolute text-gray-300 top-4 right-4'><AiOutlineClose/></p>
     </div>
  </div>

  )
})}
        </div>
        
        <MdChevronRight onClick={() => scroll(380)}size={40} className="bg-white rounded-full right-[-20px]  top-[40%] absolute opacity-50 hover:opacity-100 cursor-pointer z-[10] hidden group-hover:block  "  /></div>
  </>
)

  
}

