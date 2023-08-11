'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import {useRouter} from 'next/navigation'

const page = () => {

  const [item, setItem] = useState({
    name:'',
    phone:'',
    national_AD:'',
    password:'',
    repeat:'',
    email:'',
    state: false,
  })
  const [conf,setConf] = useState(false)
  const router = useRouter();

  const  itemChangehandler= (e)=>{
    const {name,value} = e.target;
    setItem(last => ({...last,[name]:value}))
  }
  
  useEffect(()=>{
    if(item.name != ''&& item.national_AD != '' && item.phone != '' && item.password === item.repeat && item.password != '') setItem(last =>({...last, state: true}))
  },[conf])
 


  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(conf == false) setConf(confirm('اطلاعات وارد شده را تایید میکنید'))
    else{
      if(item.state){
        setItem({
          name:'',
          phone:'',
          national_AD:'',
          password:'',
          repeat:'',
          email:'',
          state: false,
        })
        try{
          const req = await fetch('http://localhost:3000/api/user',{
            method:'POST',
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
              {
                user_name: item.name,
                user_email: item.email,
                user_phone: item.phone,
                user_nationalId: item.national_AD,
                user_pass: item.password,
              }
              )
          })
          if(req.ok){
            router.push('/')
            router.refresh()
          }else{
            throw new Error ('failed to create user!')
          }
        }catch(e){console.log(e);}

        // console.log('user set successfully!')
      }else{
        alert('اطلاعات را به درستی وارد کنید')
      }
      setConf(false)
    }
    
  }


  return (
    <div className='bg-slate-200 flex items-center justify-center relative w-full h-screen'>
        <form onSubmit={handleSubmit} className='flex sm:w-4/6 w-5/6 sm:h-5/6 h-fit sm:shadow-md'>
            <div className=' md:w-5/12 w-full  flex flex-col items-center justify-start p-[20px] gap-4 h-full relative bg-white'>
              <span className='text-lg font-bold text-cyan-900 my-[20px]'>ثبت نام کاربر جدید</span>

              <div className='w-full h-fit flex items-center relative  '>
                <span className='w-[6px] h-4/6 bg-sky-500 absolute left-[-3px]'></span>
                <span className='text-xs absolute top-[-10px] px-2 right-3 bg-white text-cyan-800'>نام و نام خانوادگی</span>
                <input value={item.name} onChange={itemChangehandler} type='text' name='name' className='focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-full h-full placeholder:text-cyan-950/40 text-right border-[0.01rem] rounded-[10px] border-cyan-900  px-10 py-3'/>
              </div>
              <div className='w-full h-fit flex items-center relative  '>
                <span className='w-[6px] h-4/6 bg-sky-500 absolute left-[-3px]'></span>
                <span className='text-xs absolute top-[-10px] px-2 right-3 bg-white text-cyan-800'>شماره تماس</span>
                <input value={item.phone} onChange={itemChangehandler} type='text' name='phone' className='focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-full h-full placeholder:text-cyan-950/40 text-right border-[0.01rem] rounded-[10px] border-cyan-900  px-10 py-3'/>
              </div>
              <div className='w-full h-fit flex items-center relative  '>
                <span className='w-[6px] h-4/6 bg-sky-500 absolute left-[-3px]'></span>
                <span className='text-xs absolute top-[-10px] px-2 right-3 bg-white text-cyan-800'>کدملی</span>
                <input value={item.national_AD} onChange={itemChangehandler} type='text' name='national_AD' className='focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-full h-full placeholder:text-cyan-950/40 text-right border-[0.01rem] rounded-[10px] border-cyan-900  px-10 py-3'/>
              </div>
              <div className='w-full h-fit flex items-center relative  '>
                <span className='w-[6px] h-4/6 bg-sky-500 absolute left-[-3px]'></span>
                <span className='text-xs absolute top-[-10px] px-2 right-3 bg-white text-cyan-800'>رمز عبور</span>
                <input value={item.password} onChange={itemChangehandler} type='text' name='password' className='focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-full h-full placeholder:text-cyan-950/40 text-right border-[0.01rem] rounded-[10px] border-cyan-900  px-10 py-3'/>
              </div>
              <div className='w-full h-fit flex items-center relative  '>
                <span className='w-[6px] h-4/6 bg-sky-500 absolute left-[-3px]'></span>
                <span className='text-xs absolute top-[-10px] px-2 right-3 bg-white text-cyan-800'>تکرار رمز عبور</span>
                <input value={item.repeat} onChange={itemChangehandler} type='text' name='repeat' className='focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-full h-full placeholder:text-cyan-950/40 text-right border-[0.01rem] rounded-[10px] border-cyan-900  px-10 py-3'/>
              </div>
              <div className='w-full h-fit flex items-center relative  '>
                <span className='w-[6px] h-4/6 bg-sky-500 absolute left-[-3px]'></span>
                <span className='text-xs absolute top-[-10px] px-2 right-3 bg-white text-cyan-800'>آدرس ایمیل</span>
                <input value={item.email} onChange={itemChangehandler} type='text' name='email' className='focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 w-full h-full placeholder:text-cyan-950/40 text-right border-[0.01rem] rounded-[10px] border-cyan-900  px-10 py-3'/>
              </div>
              <button type='submit' className='bg-cyan-900  transition-all duration-200 hover:shadow-lg text-slate-50 rounded-lg right-5 shadow-md px-5 hover:px-10 hover:py-2 py-1'>ثبت</button>
            </div>
            <div className='w-7/12 h-full  bg-slate-950 bg-[url("/image/6310507.jpg")] bg-cover md:block hidden'></div>
        </form>
     <span className='bg-sky-700 fixed p-2 flex items-center justify-center sm:justify-end bottom-0  w-full h-[3rem]'>
        <Link href="/" className='h-full'>
            <img src='/image/white.png' className='h-full object-contain'/>
        </Link>
     </span>
    </div>
  )
}

export default page
