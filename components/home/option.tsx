"use client"

import React from 'react'

import AddIcon from '@mui/icons-material/Add';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const option = () => {

  const user_ = useSelector((state) => state.user)
  const router = useRouter()

  function handleAddPost(){
    if(!user_.access){
      alert('وارد شوید')
    }else if(user_.access){
      router.push('/post')
    }
  }



  return (
    <div className='flex relative flex-row w-5/6 m-auto flex-wrap md:gap-20 gap-2 sm:mt-20 mt-9 items-center justify-center'>
    <Option func={handleAddPost} title='ثبت آگهی' icon='L4'/>    
    <Option  title='خرید، فروش' icon='L3'/>    
    <Option  title='رهن، اجاره' icon='L2'/>    
    <Option  title='خدمات خانه' icon='L1'/>    
  </div> 
  )
}

const Option = (props:{title:string,icon:string,func?:any})=>{
    return(
      <div onClick={props.func || undefined} className='flex flex-1 bg-slate-400/10 drop-shadow-sm items-center gap-2 transition duration-100 hover:bg-cyan-900 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)] hover:text-slate-50  rounded-xl p-3 cursor-pointer md:pl-10'>
       <span className='bg-cyan-900 flex items-center justify-center sm:w-12 sm:h-12 h-10 w-10 sm:object-contain p-2 rounded-xl'>
        {props.icon === 'L1' && <WidgetsIcon className='text-slate-100/20'/>}
        {props.icon === 'L2' && <LocationCityIcon className='text-slate-100/20 '/>}
        {props.icon === 'L3' && <DomainAddIcon className='text-slate-100/20 '/>}
        {props.icon === 'L4' && <AddIcon className='text-slate-100/20 '/>}
      </span>
       <span className='font-bold text-sm text-right'>{props.title}</span>
     </div>
    )
  }

export default option
