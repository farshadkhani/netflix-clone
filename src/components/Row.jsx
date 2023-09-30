import axios from "axios"
import { useEffect, useState } from "react"
import { Movie } from "./Movie"
import {MdChevronLeft ,MdChevronRight } from "react-icons/md"

export const Row = ({title , fetchURL ,rowID}) => {

  const[movies, setmovies]=useState([])
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(()=>{
    axios.get(fetchURL).then((response)=>{
      setmovies(response.data.results)
    })
  },[fetchURL])





  const scroll = (scrollOffset) => {

    const newScrollPosition = scrollPosition + scrollOffset;
    const container = document.getElementById('slider'+ rowID);
    container.scrollLeft = newScrollPosition;
    setScrollPosition(newScrollPosition);
  };


    return (
      <div className="w-full px-4 lg:px-11">

       <h2 className="text-white font-bold md:text-xl py-4">{title}</h2>
       <div className="relative item-centr text-center group scroll-smooth"><MdChevronLeft onClick={() => scroll(-380)} size={40} className="bg-white rounded-full left-[-20px] top-[40%] absolute opacity-50 hover:opacity-100 cursor-pointer z-[10] hidden group-hover:block"/>

        <div className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth  scrollbar-hide relative  "  id={"slider" + rowID}>
          {movies.map((item,id)=>(
            <Movie item={item} key={id}  />
          ))}
        </div>
        
        <MdChevronRight onClick={() => scroll(380)}size={40} className="bg-white rounded-full right-[-20px]  top-[40%] absolute opacity-50 hover:opacity-100 cursor-pointer z-[10] hidden group-hover:block  "  /></div>

      </div>
    )
  }