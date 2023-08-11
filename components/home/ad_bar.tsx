"use client"

import React from 'react';
import {useState} from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const ad_bar = () => {
  return (
    <div>
       <Ad_bar title='تازه های اجاره'/>
       <Ad_bar title='تازه های فروش'/>
       <Ad_bar title='خدمات منزل'/>
    </div>
  )
}

const Ad_bar = (props:{title:string})=>{

    const [margin, setMargin] = useState(0);
    const handleScroll= ()=>{
      if(margin < 1536) setMargin(last => last + 264)
    }
  
    return(
      <div  className='w-full mt-20 sm:mt-32 relative h-fit flex flex-col align-middle justify-center gap-5'>
      <span className='flex items-center justify-center text-cyan-950 gap-3 m-auto before:content-[""] sm:before:block before:hidden before:w-20 before:h-[0.1rem] before:bg-cyan-950 text-md sm:text-xl after:content-[""] sm:after:block after:hidden after:w-20 after:h-[0.1rem] after:bg-cyan-950'>{props.title}</span>
      <span
        onClick={handleScroll}
        className='p-5 w-5 h-5 flex flex-row items-center justify-center absolute left-2 sm:left-10 z-10 bg-slate-100 hover:bg-slate-300 transition duration-75 text-cyan-950 shadow-md rounded-xl'>
        <ArrowForwardIosIcon/>
      </span>
      <div  className='pl-5 pr-2 sm:pr-10 w-full h-fit flex flex-row overflow-hidden relative'> 
      {/* ad Wrapper list */}
        <div className='w-fit h-fit flex flex-row items-center justify-center transition-all duration-300 gap-2' style={{marginRight:`-${margin}px`}}>
           <div className='h-[21rem] cursor-pointer rounded-xl w-[16rem] bg-slate-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]'></div>
           <div className='h-[21rem] cursor-pointer rounded-xl w-[16rem] bg-slate-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]'></div>
           <div className='h-[21rem] cursor-pointer rounded-xl w-[16rem] bg-slate-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]'></div>
           <div className='h-[21rem] cursor-pointer rounded-xl w-[16rem] bg-slate-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]'></div>
           <div className='h-[21rem] cursor-pointer rounded-xl w-[16rem] bg-slate-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]'></div>
           <div className='h-[21rem] cursor-pointer rounded-xl w-[16rem] bg-slate-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]'></div>
           <div className='h-[20rem] cursor-pointer flex justify-center border-[0.1rem] items-center border-dashed rounded-xl w-[16rem]'>
              <span className='text-sm text-slate-900'>تمام موارد</span>
           </div>
          </div>
      </div>
      </div>
    )
  }

export default ad_bar
