'use client'

import Top from '@/components/home/top';
import Option from '@/components/home/option';
import Ad_bar from '@/components/home/ad_bar';
import RealState from '@/components/home/realState';
import Bottom from '@/components/home/bottom';
import store from '@/store/store'
import { Provider } from 'react-redux'

const page = () => {

  return (
    <Provider store={store}>
      <main 
        id='home' 
        className='relative'
      >
        <Top/>
        <Option/>
        <Ad_bar/>
        <RealState/>
        <Bottom/>
      </main>
    </Provider>
  )
}

export default page
