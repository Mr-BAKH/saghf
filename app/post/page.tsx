'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ClearIcon from '@mui/icons-material/Clear';
import option from './data'

const page = () => {
    
    const options = option;
    const [formInput_Ad, setFormInput_Ad] = useState({
        tittle:'',
        address:'',
        description:'',
    })
    const [formInput_About, setFormInput_About] = useState({
        area:'',
        room:'',
        bath:'',
        bath2:'',
        floor:'',
        w_floor:'',
        w_room:'',
        deposit:'',
        rent:'',
    })
    const [formInput_Option, setFormInput_Option] = useState([0])
    const [imagePreview, setImagePreviw] = useState(['']);
    const router = useRouter()

    const handle_change_AD=(e)=>{
        const{name,value} =  e.target;
        setFormInput_Ad(last => ({...last,[name]:value}))
    }
    const handle_change_About=(e)=>{
        const{name,value} =  e.target;
        setFormInput_About(last => ({...last,[name]:value}))
    }
    const handle_change_option=(e)=>{
        const {name} = e.target
        const chosen = formInput_Option;    
        const isExest = chosen.includes(Number(name))
        if(isExest){
            setFormInput_Option(chosen.filter(item => item !== Number(name)))
        }else{
            setFormInput_Option(last => ([...last,Number(name)]))
        }
    }

    const handle_change_Img =(e)=>{
        const file = e.target.files[0]
        const size = e.target.files[0].size
        const format = e.target.files[0].type.split('/')[1]
        const url = URL.createObjectURL(file)
        setImagePreviw(last => ([...last,url]))
        console.log(imagePreview)
    }
    
    const handle_delete_img= (input)=>{
        const img_delet = input;
        setImagePreviw(imagePreview.filter(item => item != img_delet))
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('submit')
        router.push('/post/success')
    }


return (
<main className='w-full bg-cyan-950  h-fit min-h-screen  flex-col gap-10 flex items-center justify-center relative'> 
    <span className='bg-cyan-950 sticky drop-shadow-lg z-20 p-10 flex items-center justify-between top-0 w-full h-[3rem]'>
        <h1 className='text-slate-50  text-md'>ثبت آگهی جدید</h1>
        <Link href="/" className='h-[2rem]'>
            <img src='/image/white.png' className='h-full object-contain'/>
        </Link>
    </span>

    {/* set Image right */}
    <div className='h-fit w-4/12 z-20 fixed right-[-100px] bottom-[-1px] object-contain  md:block hidden'>
        <img src='/image/50819.png' width='full'/>
    </div> 

    {/* form input */}
        <form onSubmit={handleSubmit} className='md:w-3/6 my-[50px] h-fit gap-10 px-6 py-10 flex flex-col z-10 bg-slate-200'>
         <div className=' border-[2px] border-slate-900/10 p-5 w-full h-fit relative flex flex-wrap gap-5 items-center justify-center'>
           <span className='absolute text-red-800 right-3 border-b-[2px] border-red-800 top-[-25px] text-md'>جزئیات آگهی</span>
            <div className='h-fit flex flex-wrap gap-2 items-center justify-center'>
                <div className='w-[100px] flex flex-col items-center justify-center rounded-sm  bg-no-repeat bg-center drop-shadow-md hover:brightness-95 transition-all duration-75 ease-in bg-[url("/image/icons/upload-file.png")] bg-contain relative h-[100px]'>
                    <input 
                        type='file'
                        name='image_input'
                        onChange={handle_change_Img}
                        accept= '.png, .jpg, .jpeg'
                        className='opacity-0 cursor-pointer absolute w-full h-full'
                        />
                    <span className='text-md font-bold text-white'>+</span>
                    <span className='text-xs  text-white'>افزودن عکس</span>
                </div>
               {imagePreview.map((item,index) => {if(item != '')
                return(
                    <div className='w-fit h-fit relative'>
                        <img key={index} src={item} alt='image' className='w-[70px] object-cover bg-white drop-shadow-md h-[70px] rounded-md'/>
                        <span onClick={()=> handle_delete_img(item)} className='bg-white rounded-md cursor-pointer hover:scale-105 text-red-500 drop-shadow-md absolute top-[-10px] right-[-10px]'>
                            <ClearIcon/>
                        </span>
                    </div>
               )})}

            </div>
            <div className='w-full h-fit flex items-center relative  '>
                <input
                    type='text' 
                    name='tittle' 
                    value={formInput_Ad.tittle}
                    placeholder='عنوان' 
                    onChange={handle_change_AD}
                    className='focus:outline-none border-r-4 text-sm border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 w-full h-full text-right px-10 py-3'
                    />
            </div>
            <div className='w-full h-fit flex items-center relative  '>
                <input 
                    type='text' 
                    placeholder='آدرس' 
                    value={formInput_Ad.address}
                    name='address'
                    onChange={handle_change_AD}
                    className='focus:outline-none text-sm border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 w-full h-full text-right  px-10 py-3'
                    />
                <Link href='/map' className='h-full text-cyan-900 flex items-center w-fit object-contain absolute left-2'>
                    <img src='/image/icons/location.png' width='50px' alt='loacation'/>
                </Link>
            </div>
            <div className='w-full flex items-center relative  '>
                <textarea  
                    placeholder='توضیحات' 
                    value={formInput_Ad.description}
                    name='description'
                    onChange={handle_change_AD}
                    className='focus:outline-none text-sm focus:border-cyan-500 focus:ring-1 border-r-4 border-cyan-700 focus:ring-cyan-500 w-full h-full text-right  px-10 py-5'
                    /> 
            </div>
            </div>
            {/* detai dev */}
            <div className=' border-[2px] border-slate-900/10 p-5 w-full h-fit relative flex flex-wrap gap-5 items-center justify-center'>
                    <span className='absolute text-red-800 right-3 border-b-[2px] border-red-800 top-[-25px] text-md'>مشخصات</span>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input
                        type='text' 
                        value={formInput_About.area}
                        name='area'
                        onChange={handle_change_About}
                        className='text-sm w-full  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'
                        />
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>متراژ</span>
                </div>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input 
                        type='text' 
                        value={formInput_About.room}
                        name='room'
                        onChange={handle_change_About}
                        className='text-sm w-full  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'
                        />
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>اتاق</span>
                </div>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input 
                        type='text'
                        value={formInput_About.bath}
                        name='bath'
                        onChange={handle_change_About}
                        className='text-sm w-full  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'
                        />
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>دستشویی</span>
                </div>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input 
                        type='text'
                        value={formInput_About.bath2}
                        name='bath2'
                        onChange={handle_change_About}
                        className='text-sm w-full  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'
                        />
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>حمام</span>
                </div>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input 
                        type='text' 
                        value={formInput_About.floor}
                        name='floor'
                        onChange={handle_change_About}
                        className='w-full text-sm  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'
                        />
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>طبقه</span>
                </div>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input 
                        type='text' 
                        value={formInput_About.w_floor}
                        name='w_floor'
                        onChange={handle_change_About}
                        className='w-full text-sm  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'
                        />
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>تعداد طبقات</span>
                </div>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input 
                        type='text' 
                        value={formInput_About.w_room}
                        name='w_room'
                        onChange={handle_change_About}
                        className='w-full text-sm  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'
                        />
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>تعداد واحد</span>
                </div>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input 
                        type='text' 
                        value={formInput_About.rent}
                        name='rent'
                        onChange={handle_change_About}
                        className='w-full text-sm  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'
                        />
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>کرایه</span>
                </div>
                <div className='flex-1 min-w-[6rem] flex-grow h-fit flex items-center relative'>
                    <input 
                        type='text' 
                        value={formInput_About.deposit}
                        name='deposit'
                        onChange={handle_change_About}
                        className='w-full text-sm  focus:outline-none border-r-4 border-cyan-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-right p-2'
                        />
                    <span className='absolute top-[-10px]  text-xs left-[5px]'>ودیعه</span>
                </div>
            </div> 
            {/* option dev */}
            <div className='h-fit flex-1  border-[2px] border-slate-900/10 p-5 w-full relative flex flex-wrap gap-3 items-start justify-center'>
                <span className='absolute text-red-800 right-3 border-b-[2px] border-red-800 top-[-25px] text-md'>ویژگی ها</span>
                {/* the option chosein */}
                {options.map(item =>{ return(
                    <div key={item.id} className='w-fit group flex-grow  shadow-lg h-fit hover:scale-105 transition-all duration-75  gap-1  p-2  bg-white rounded-[5px] flex object-contain items-center justify-center relative'>
                        <input 
                            type="checkbox" 
                            name={item.id}
                            onChange={handle_change_option}
                            className='h-full rounded-md  cursor-pointer checked:outline checked:outline-green-600  appearance-none w-full bg-transparent absolute'
                        />
                        <span className='text-xs text-cyan-900'>{item.title}</span>
                        <img src={item.url} width='30px' alt="option" />
                    </div>
                )})}
            </div>
            <button className='py-2 w-fit px-4 bg-cyan-900 m-auto hover:scale-105 hover:w-3/5 rounded-sm transition-all duration-100 ease-linear shadow-md text-slate-50 text-md' type='submit'>ثبت آگهی</button>
        </form>
        {/* Ad preview */}

    {imagePreview[1] && 
        
    <div className='h-[450px] drop-shadow-md mb-10 w-[300px] relative flex'>
        <img
            src={imagePreview[1]} 
            className='object-cover h-full'
        />
        <div className='w-full h-full p-3 bg-black/80 absolute flex flex-wrap z-10 items-center justify-center'>
            <div className='flex flex-wrap items-center justify-between g-2 w-full h-5/6'>
                <div className='w-full text-center text-2xl font-bold text-white'>{formInput_Ad.tittle}</div>
                <div className='flex-1 flex pr-2 text-slate-50 gap-3 flex-col border-r-2 items-start justify-center'>
                    <div className='flex gap-1 flex-col'>
                        <span className='text-xl font-bold'>فروشی</span>
                        <span className='text-xs'>همین لحظه</span>
                    </div>
                    <div className='flex gap- flex-col'>
                        <span className='text-md'>آدرس</span>
                        <p className='text-xs'>{formInput_Ad.address}</p>
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <span className='text-xs'>کرایه</span>
                        <p className='text-md'>{formInput_About.rent}</p>
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <span className='text-xs'>ودیعه</span>
                        <p className='text-md'>{formInput_About.deposit}</p>
                    </div>
                    
                </div>
                {/* left of the AD */}
                <div className='w-fit text-white text-sm h-fit py-7 px-2 flex-col items-center justify-center border-[2px] rounded-xl'>
                    <span className='block'>{formInput_About.area} | مساحت</span>
                    <span className='block'>{formInput_About.floor} | طبقه</span>
                    <span className='block'>{formInput_About.room} | خواب</span>
                    <span className='block'>{formInput_About.bath2} | حمام</span>
                    <span className='block'>{formInput_About.bath} | دستشویی</span>
                    <span className='block'>{formInput_Option.length - 1} | آپشن</span>
                </div>
            </div>
            <div className='flex h-1/6 items-end justify-end w-full'>
                <img src="/image/white.png" className='h-10' alt="saghfLogo" />
            </div>
        </div>
    </div> 
    }
</main>
)
}

export default page

//////// components //////////////////

