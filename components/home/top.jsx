"use client"

import DehazeIcon from '@mui/icons-material/Dehaze';
import EditNoteIcon from '@mui/icons-material/EditNote';
import {useEffect, useState} from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { userAction } from '@/store/User/index';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import isUser from '@/lib/utils/user_check_EX'
// import Login from '../etc/Login_btn'


const top = () => {
    
    const [token, setToken] = useState([])
    const [more,setMore] = useState(false);
    const [login, setLogin] = useState(false);
    const [user_inf, setUser_inf] = useState({
        user_name:'',
        user_pass:''
    })
    const newUser = useSelector((state) => state.user)
    const dispatch = useDispatch()
        
    useEffect(()=>{
        isUser().then(val => setToken(val.users))
    },[])

    const handle_More= ()=>{
    setMore(last => !last)
    setLogin(false);
    } 
    const handle_Login= ()=>{
    setMore(false)
    setLogin(last => !last);
    }
    const handle_Logout= ()=>{
     dispatch(userAction.logOut())
    }

    const handle_user_input = (e)=>{
        const {name,value} = e.target;
        setUser_inf( last => ({...last,[name]:value}))
    }

    const handle_Submit= (e)=>{
        e.preventDefault();

    if(user_inf.user_name =='' || user_inf.user_pass == ''){
        alert('نام کاربری یا رمز عبور خود را صحیح وارد کنید')
    }

    token.map(item =>
        {
            if(item.user_name === user_inf.user_name){
                if(item.user_pass === user_inf.user_pass){
                    dispatch(userAction.setuser({phone: item.user_phone,name:item.user_name,id:item._id}))
                    setLogin(false)
                }else{
                    alert('رمز خود را به درستی وارد کنید')
                }
            }else{
                alert('کاربری با این نام وجود ندارد')
            }
        }
        )
    
    setUser_inf({ user_name:'',user_pass:'' })  
    }//end of handle submit

  return (
    <>
    <div className='bg-[url("/image/home1.jpg")] bg-bottom relative m-auto overflow-hidden w-full h-[15rem] sm:h-[25rem]
        bg-no-repeat bg-cover sm:pl-10 sm:pr-10'>
        <div className='absolute left-4 top-4 text-end sm:left-16 sm:top-10  '>
        <h1 className='sm:text-4xl text-xl text-white' >SAGHF</h1>
        <span className='hidden sm:block text-sm border-b-[0.01rem] pb-1 text-cyan-950'>فرا تر از یک چهار دیواری ساده</span>
        </div>
        <div className='flex relat items-center justify-center absolute gap-2 sm:right-14 sm:top-10 right-4 top-4 w-fit h-fit'>
            <DehazeIcon onClick={handle_More} className=' text-slate-200 hover:text-white hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)] cursor-pointer '/>
        {newUser.access == false?
            <button onClick={handle_Login} className='transition text-sm font-bold bg-slate-950/10 duration-75 text-white h-fit rounded-full p-2 pl-10 pr-10 hover:bg-cyan-800 hover: md:block justify-center align-middle hidden hover:drop-shadow-sm '>ورود</button>
            :
            <button onClick={handle_Logout} className='transition text-sm font-bold bg-slate-950/10 duration-75 text-white h-fit rounded-full p-2 pl-10 pr-10 hover:bg-cyan-800 hover: md:block justify-center align-middle hidden hover:drop-shadow-sm '>خروج</button>

        }
        </div>
    </div>
    {more && 
    <div 
        className='w-auto flex flex-col items-center sm:p-5 p-1 justify-center animate-income  pt-2 pb-2 h-fit absolute z-20 top-12 sm:top-[5.5rem] shadow-md right-3 sm:right-14 md:right-16 bg-slate-800/20 backdrop-blur-sm rounded-lg '
        onMouseLeave={()=>setMore(last => !last)}
    >
        <div className='w-fit h-fit flex flex-wrap items-center gap-1 justify-center'>
        {newUser.access == true?
         <div className='flex flex-col items-center justify-center'>
           <span className='w-[64px] h-[64px] bg-[url("/image/icons8-user-96.png")] bg-cover block rounded-full shadow-sm'></span>
           <sapn className="text-sm text-slate-50 flex items-center justify-center" >
                <Link href={`/sign_in/${newUser.id}`} className='text-xs text-slate-50'>
                    <EditNoteIcon/>
                </Link>
                {newUser.name}
            </sapn>
           <sapn className="text-sm text-slate-50" >{newUser.phone}</sapn>
           
           <button onClick={handle_Logout} className='transition text-sm font-bold bg-slate-950/10 duration-75 text-white h-fit rounded-full p-2 pl-10 pr-10 hover:bg-cyan-800 hover: md:hidden justify-center align-middle block hover:drop-shadow-sm '>خروج</button>
         </div>:
         <div className='flex flex-col w-full h-full gap-4 items-center justify-center'>
            {alert('لطفا وارد شوید')}
            <button onClick={handle_Login} className='transition text-sm font-bold bg-slate-950/10 duration-75 text-white h-fit rounded-full p-2 pl-10 pr-10 hover:bg-cyan-800 hover: md:hidden justify-center align-middle block hover:drop-shadow-sm '>ورود</button>
         </div>
        }
        </div>
    </div>
    }
    {/* log in to the application */}
    {login&& 
        <form
            className="w-fit gap-2 flex flex-col  p-5 pt-10  justify-center animate-income h-fit absolute z-20 top-12 sm:top-16 md:top-[5.5rem] shadow-md sm:right-20 md:right-40 right-3 bg-slate-900 backdrop-blur-sm rounded-lg"
            onMouseLeave={()=>setLogin(last => !last)}
            onSubmit={(e)=>handle_Submit(e)}
        >
        <div className='flex w-full gap-1 flex-col justify-center'>
            <span className="block text-sm text-slate-100">نام کاربری خود را وارد کنید</span>
            <input
             placeholder='Phone'
             name='user_name'
             value={user_inf.user_name}
             onChange={handle_user_input}
             className="border-slate-200 text-center text-slate-300 w-full rounded-md pr-2 pl-2 bg-slate-800 shadow-md overflow-hidden p-1 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
        </div>
        <div className='flex w-full gap-1 flex-col justify-center'>
            <span className="block text-sm text-slate-100">رمز خود را وارد کنید</span>
            <input
             placeholder='Passwords' 
             type='password'
             name='user_pass'
             value={user_inf.user_pass}
             onChange={handle_user_input}
             className="border-slate-200 text-center text-slate-300  w-full rounded-md pr-2 pl-2 bg-slate-800 shadow-md overflow-hidden p-1 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
            <button type='submit' className='bg-cyan-700 mt-6 text-slate-50 p-2 w-full text-sm pr-4 pl-4 shadow-md' >ورود</button>
            <Link href='/sign_in' className='w-full p-2 text-center text-sm text-violet-500  hover:text-violet-400  border-[0.01rem] border-violet-500'>
                <span>ثبت نام</span>
                {/* <button className='border-[0.1rem] border-violet-700 text-slate-50 p-1 rounded-full text-sm pr-4 pl-4 shadow-md' >ثبت نام</button> */}
            </Link>
        </div>
        {/* <div className='mt-2 flex gap-2 items-center justify-center w-full'>
        </div> */}
        <span className='w-full h-[0.01rem] bg-slate-700 mt-5'></span>
        {/* <div className='flex flex-row gap-1 items-center justify-center'>
            <Login/>
        </div> */}
        </form>
    }
    </> 
);}

export default top

// -------------------------- functions ----------------

