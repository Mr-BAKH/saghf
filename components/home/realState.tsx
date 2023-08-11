"use client"


import {useState} from 'react'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const RealState =()=>{
    const [margin, setMargin] = useState(0);
    const handleScroll= ()=>{
      if(margin < 1500) setMargin(last => last + 270)
    }
    return(
      <div  className='w-full mt-20 sm:mt-32 relative h-fit flex flex-col align-middle justify-center gap-10'>
        <span className='flex items-center justify-center text-cyan-950 gap-3 m-auto before:content-[""] sm:before:block before:hidden before:w-20 before:h-[0.1rem] before:bg-cyan-950 text-md sm:text-xl after:content-[""] sm:after:block after:hidden after:w-20 after:h-[0.1rem] after:bg-cyan-950'>لیست املاک</span>
        <span
          onClick={handleScroll}
          className='p-5 w-5 h-5 flex flex-row items-center justify-center absolute left-2 sm:left-10 z-10 bg-slate-100 hover:bg-slate-300 transition duration-75 text-cyan-950 shadow-md rounded-xl'>
          <ArrowForwardIosIcon/>
        </span>
        <div  className='pl-5 pr-2 sm:pr-10 w-full h-fit flex flex-row overflow-hidden relative'> 
        {/* ad Wrapper list */}
          <div className='w-fit h-fit flex flex-row items-center justify-center transition-all duration-300 gap-5' style={{marginRight:`-${margin}px`}}>
            <RealState_details/>
            <RealState_details/>
            <RealState_details/>
            <RealState_details/>
            <RealState_details/>
            <RealState_details/>
            <div className='h-[80px] cursor-pointer border-[0.1rem] border-dashed flex justify-around items-center rounded-xl w-[250px]'>
              <span className='text-sm text-slate-900'>تمام موارد</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default RealState;

  const RealState_details=()=>{
    return(
      <div className='h-[80px] cursor-pointer flex justify-around items-center w-[250px]'>
      <span className='w-1/3 h-full bg-cyan-950 rounded-xl'></span>
      <div className='w-2/3 text-right h-full flex flex-col gap-1 mr-2 justify-center rounded-xl'>
          <span className='h-1/3 text-sm overflow-hidden font-bold text-slate-950'>املاک سیب</span>
          <span className='h-1/3 text-sm overflow-hidden text-slate-950'>تلفن:09154688488</span>
          <span className='h-1/3 text-sm overflow-hidden text-slate-950'>آدرس:نیاوردان کنار دیوار</span>
      </div>
    </div>
    )
  }