"use client"

import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShareIcon from '@mui/icons-material/Share';


const Button= ()=>{
    return(
      <div className='w-full flex flex-wrap items-center p-2 md:pt-10 md:pb-10 pb-2 pt-20 gap-6 bg-cyan-900 sm:mt-20 mt-10'>
            <div className='md:flex-1 flex-grow h-full flex-col gap-1 flex items-center justify-end sm:p-5 p-1'>
              <a href="#home">
                <img src='./image/white.png' className='w-[100px] sm:w-[200px] object-contain'/>
              </a>
                <span className='after:content-[""] after:block  after:w-full after:h-[0.01rem] after:bg-slate-50 after:mt-2 text-xs mr-2 text-slate-950/80'>فرا تر از یک چهاردیواری ساده</span>
                <span className='text-xs text-slate-50/50 mr-2'>کلیه حقوق محفوظ میباشد</span>
            </div>
            <div className='md:flex-1 flex-grow w-full h-full flex flex-wrap sm:gap-5 gap-3 sm:p-2 p-1'>
              <div className='flex flex-row items-center justify-center w-full h-fit gap-2'>
                <span className='w-[60px] h-[60px] rounded-md bg-[url("/image/icons8-conflict-96.png")] bg-contain bg-cyan-950'></span>
                <span className='w-[60px] h-[60px] rounded-md bg-[url("/image/icons8-smart-home-shield-96.png")] bg-contain bg-cyan-950'></span>
                <span className='w-[60px] h-[60px] rounded-md bg-[url("/image/icons8-last-24-hours-96.png")] bg-contain bg-cyan-950'></span>
              </div>
              <div className='flex text-md text-slate-50/90 flex-row items-center justify-center w-full h-fit gap-5 cursor-pointer'>
                <span className='after:content-[""] after:block  after:w-full after:h-[0.1rem] after:mt-2 hover:after:bg-white after:bg-cyan-950'><InstagramIcon /></span>
                <span className='after:content-[""] after:block  after:w-full after:h-[0.1rem] after:mt-2 hover:after:bg-white after:bg-cyan-950'><EmailIcon /></span>
                <span className='after:content-[""] after:block  after:w-full after:h-[0.1rem] after:mt-2 hover:after:bg-white after:bg-cyan-950'><LinkedInIcon /></span>
                <span className='after:content-[""] after:block  after:w-full after:h-[0.1rem] after:mt-2 hover:after:bg-white after:bg-cyan-950'><ShareIcon/></span>
              </div>
            </div>
          </div>
    )
  }

  export default Button