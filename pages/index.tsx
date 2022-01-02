import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Main from '../components/Main'


import  HeadContainer  from '../components/HeadContainer'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <HeadContainer/>
      <div  className='wrapper'>
          <Header/>
          <Main />
          <Footer/>
      </div>


    </div>
  )
}

export default Home
