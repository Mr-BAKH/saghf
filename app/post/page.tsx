'use client'
import React from 'react'
import Link from 'next/link'

const page = () => {

const handleInput =(e)=>{
    const file = e.target.files[0]
    const size = e.target.files[0].size
    // const format = e.target.files[0].type.split('/')[1]
    const url = URL.createObjectURL(file)
    // console.log(url)
}

return (
<main className='w-full bg-slate-50 h-fit min-h-screen flex-wrap flex items-center justify-center relative'> 
    <span className='bg-cyan-900 sticky z-20 py-1 px-5 flex items-center justify-between top-0 w-full h-[3rem]'>
        <h1 className='text-slate-50 text-md'>افزودن آگهی</h1>
        <Link href="/" className='h-[2rem]'>
            <img src='/image/white.png' className='h-full object-contain'/>
        </Link>
    </span>
        {/* set Image left */}
        <div className='h-fit w-3/12 bottom-5  z-20 fixed left-0  md:block hidden'>
        <img src='/image/7061505.png' width='full'/>
    </div> 

    
    {/* form input */}
        <form className='md:w-3/6 my-[50px] h-fit gap-6 px-6 py-10 flex flex-col z-10 bg-transparent'>
         <div className=' border-[2px] border-slate-900/10 p-5 w-full h-fit relative flex flex-wrap gap-5 items-center justify-center'>
           <span className='absolute text-red-800 right-3 border-b-[2px] border-red-800 top-[-20px] text-sm'>جزئیات آگهی</span>
            <div className='h-fit flex flex-wrap gap-2 items-center justify-center'>
                <div className='w-[100px] flex flex-col items-center justify-center rounded-sm bg-white bg-no-repeat bg-center drop-shadow-md hover:brightness-95 transition-all duration-75 ease-in bg-[url("/image/icons/upload-file.png")] bg-contain relative h-[100px]'>
                    <input 
                        type='file'
                        name='image_input'
                        accept= '.png, .jpg, .jpeg'
                        className='opacity-0 cursor-pointer absolute w-full h-full'
                        onChange={handleInput}
                        />
                    <span className='text-md font-bold text-white'>+</span>
                    <span className='text-xs  text-white'>افزودن عکس</span>
                </div>
                <div className='w-fit h-fit flex flex-wrap gap-1 items-center justify-center'>
                    <span className='w-[50px] bg-white drop-shadow-md h-[50px] rounded-md'></span>
                    <span className='w-[50px] bg-white drop-shadow-md h-[50px] rounded-md'></span>
                    <span className='w-[50px] bg-white drop-shadow-md h-[50px] rounded-md'></span>
                    <span className='w-[50px] bg-white drop-shadow-md h-[50px] rounded-md'></span>
                </div>
            </div>
            <div className='w-full h-fit flex items-center relative  '>
                <input type='text' placeholder='عنوان' className='focus:outline-none border-r-4 text-sm border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 w-full h-full text-right px-10 py-3'/>
            </div>
            <div className='w-full h-fit flex items-center relative  '>
                <input type='text' placeholder='آدرس' className='focus:outline-none text-sm border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 w-full h-full text-right  px-10 py-3'></input>
                <Link href='/map' className='h-full text-cyan-900 flex items-center w-fit object-contain absolute left-2'>
                    <img src='/image/icons/location.png' width='50px' alt='loacation'/>
                </Link>
            </div>
            <div className='w-full flex items-center relative  '>
                <textarea  placeholder='توضیحات' className='focus:outline-none text-sm focus:border-cyan-500 focus:ring-1 border-r-4 border-cyan-700 focus:ring-cyan-500 w-full h-full text-right  px-10 py-5'/> 
            </div>
            </div>
            {/* detai dev */}
            <div className=' border-[2px] border-slate-900/10 p-5 w-full h-fit relative flex flex-wrap gap-5 items-center justify-center'>
                    <span className='absolute text-red-800 right-3 border-b-[2px] border-red-800 top-[-20px] text-sm'>مشخصات</span>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input type='text' className='text-sm w-full  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'/>
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>متراژ</span>
                </div>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input type='text' className='text-sm w-full  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'/>
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>اتاق</span>
                </div>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input type='text' className='text-sm w-full  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'/>
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>سرویس بهداشتی</span>
                </div>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input type='text' className='w-full text-sm  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'/>
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>طبقه</span>
                </div>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input type='text' className='w-full text-sm  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'/>
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>تعداد طبقات</span>
                </div>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input type='text' className='w-full text-sm  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'/>
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>تعداد واحد</span>
                </div>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input type='text' className='w-full text-sm  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'/>
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>کرایه</span>
                </div>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input type='text' className='w-full text-sm  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'/>
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>ودیعه</span>
                </div>
            </div> 
            {/* option dev */}
            <div className='h-fit flex-1  border-[2px] border-slate-900/10 p-5 w-full relative flex flex-wrap gap-3 items-start justify-center'>
                <span className='absolute text-red-800 right-3 border-b-[2px] border-red-800 top-[-21px] text-sm'>ویژگی ها</span>
                {/* the option chosein */}
                <Option_card id='1' title='خانه هوشمند' url='https://img.icons8.com/fluency/48/smart-home-connection.png'/>
                <Option_card id='2' title='سیستم سرمایش' url='https://img.icons8.com/color/48/fan.png'/>
                <Option_card id='3' title='درب برقی' url='https://img.icons8.com/color-glass/48/garage-door.png'/>
                <Option_card id='4' title='باربیکیو' url='https://img.icons8.com/color/48/grill.png'/>
                <Option_card id='5' title='استخر' url='https://img.icons8.com/color/48/swimming-pool.png'/>
                <Option_card id='6' title='پارکینگ' url='https://img.icons8.com/fluency/48/parking.png'/>
                <Option_card id='7' title='کف پوش' url='https://img.icons8.com/cotton/64/wooden-floor.png'/>
                <Option_card id='8' title='آسانسور' url='https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-elevator-wayfinding-flaticons-flat-flat-icons.png'/>
                <Option_card id='9' title='لابی' url='https://img.icons8.com/color/48/waiting-room.png'/>
                <Option_card id='10' title='نگهبان' url='https://img.icons8.com/color/48/security-guard.png'/>
                <Option_card id='11' title='بالکن' url='https://img.icons8.com/fluency/48/balcony.png'/>
                <Option_card id='12' title='دوربین حفاظتی' url='https://img.icons8.com/color/48/ptz-camera.png'/>
                <Option_card id='13' title='سیستم گرمایش' url='https://img.icons8.com/fluency/48/heating-radiator.png'/>
                <Option_card id='14' title='MDF' url='https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-Cabinets-interior-smashingstocks-flat-smashing-stocks-6.png'/>
                <Option_card id='15' title='دسترسی به بیمارستان' url='https://img.icons8.com/emoji/48/hospital-emoji.png'/>
                <Option_card id='16' title='دسترسی به فروشگاه مواد غذایی' url='https://img.icons8.com/color/48/shop.png'/>
                <Option_card id='17' title='دسترسی به آتشنشانی' url='https://img.icons8.com/emoji/48/fire-engine.png'/>
                <Option_card id='18' title='دسترسی به مدرسه' url='https://img.icons8.com/fluency/48/school.png'/>
                <Option_card id='19' title='دسترسی به نانوایی' url='https://img.icons8.com/external-itim2101-flat-itim2101/64/external-bakery-store-itim2101-flat-itim2101.png'/>
                <Option_card id='20' title='دسترسی به حمل و نقل عمومی' url='https://img.icons8.com/color/48/ground-transportation.png'/>
                <Option_card id='21' title='دسترسی به آرایشگاه' url='https://img.icons8.com/color/48/barbershop.png'/>
            </div>
        </form>
        {/* </div> */}
</main>
)
}

export default page

//////// components //////////////////

const Option_card = (props:{title:string, id:string, url:string})=>{
    
return(
    <div className='w-fit flex-grow shadow-lg h-fit hover:scale-105 transition-all duration-75  gap-1  p-2  bg-white rounded-[5px] flex object-contain items-center justify-center relative'>
        <input 
            type="checkbox" 
            name={props.id}
            className='h-full rounded-md cursor-pointer  checked:outline checked:outline-green-600  appearance-none w-full bg-transparent absolute'
        />
        <span className='text-xs text-cyan-900 ' >{props.title}</span>
        <img src={props.url} width='30px' alt="option" />
    </div>
)
}
