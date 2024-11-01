import { useState } from 'react'
import createPostImg from './assets/illustration-create-post.webp'
import fiveStartsImg from './assets/illustration-five-stars.webp'
import aiContentImg from './assets/illustration-ai-content.webp'
import multiplePlatforms from './assets/illustration-multiple-platforms.webp'
import consistentSchedule from './assets/illustration-consistent-schedule.webp'
import schedulePost from './assets/illustration-schedule-posts.webp'
import growFollowers from './assets/illustration-grow-followers.webp'
import audienceGrowth from './assets/illustration-audience-growth.webp'
import './App.css'

function App() {

  return (
    <>
      <main className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='grid grid-cols-1 px-4 md:px-0 md:grid-cols-4-fixed-15 md:grid-rows-10 md:gap-6 space-y-4 md:space-y-0 py-4 md:py-0'>

          <div className='bg-light-yellow md:row-span-5 rounded-lg md:space-y-6 px-10 flex flex-col justify-center w-full md:col-span-1 space-y-5 py-8'>
            <h3 className='text-black text-4xl font-medium tracking-tighter leading-8'>Create and schedule content <span className='text-dark-purple italic'>quicker.</span></h3>
            <img src={createPostImg} alt="Create a post" className='w-40'/>
          </div>

          <div className='bg-dark-purple md:row-span-4 md:col-span-2 rounded-lg text-center space-y-6 px-8 py-8 flex flex-col justify-center items-center'>
            <h3 className='text-white w-72 md:w-96 text-5xl'>Social Media <span className='text-dark-yellow'>10x</span> <span className='italic'>Faster</span> with AI</h3>
            <div className='flex flex-col items-center'>
              <img src={fiveStartsImg} alt="Five starts" className='w-40' />
              <p className='text-white opacity-70'>Over 4,000 5-star reviews</p>
            </div>
          </div>

          <div className='bg-light-purple md:row-span-7 rounded-lg flex flex-col items-center py-4 md:items-start justify-center space-y-6 pl-9 pr-9 md:pr-0 overflow-hidden'>
            <h3 className='text-black text-3xl font-medium tracking-tighter leading-7 md:w-48'>Schedule to social media.</h3>
            <div className='md:relative md:h-80 md:w-85'>
              <img src={schedulePost} alt="" className='md:h-80 md:w-85 md:absolute md:top-2'/>
            </div>
            <p className='text-black w-60 md:w-44 md:leading-4 text-center'>Optimize post timings to publish content at the perfect time for your audience.</p>
          </div>

          <div className='md:relative bg-white md:row-span-3 rounded-lg py-5 space-y-5 md:space-y-0 md:py-0 pl-5 pr-5 md:pr-0 md:overflow-hidden'>
            <img src={multiplePlatforms} alt="Multiple platforms" className='md:absolute md:-right-14 md:top-2 md:scale-110' />
            <h3 className='text-black text-3xl font-medium tracking-tighter leading-7 md:w-48 md:pt-20 md:pb-6'>Manage multiple accounts and platforms.</h3>
          </div>

          <div className='md:relative bg-dark-yellow md:row-span-3 rounded-lg px-5 pt-5 overflow-hidden'>
            <h3 className='text-black text-3xl font-medium tracking-tighter leading-7 md:w-48 pb-5 md:pb-2'>Maintain a consistent posting schedule.</h3>
            <img src={consistentSchedule} alt="Multiple platforms" className='md:-mb-44 h-40' />
          </div>

          <div className='bg-dark-yellow md:row-span-5 rounded-lg space-y-12 pl-6 py-5 flex flex-col justify-center'>
            <h3 className='text-black text-4xl font-medium tracking-tighter leading-8 w-72 md:w-40'>Write your content using AI.</h3>
            <img src={aiContentImg} alt="Create a post" className='w-64 md:w-52' />
          </div>

          <div className='bg-white md:row-span-3 rounded-lg pl-6 py-6'>
            <h3 className='text-black text-5xl'>+56%</h3>
            <p className='text-black pt-2 pb-7 md:pb-10'>faster audience growth</p>
            <img src={audienceGrowth} alt="Audience growth" className='h-14 w-36'/>
          </div>

          <div className='bg-dark-purple md:row-span-3 md:col-span-2 rounded-lg pr-6 md:pr-0 pl-6 flex flex-col justify-center py-5'>
            <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-4'>
              <img src={growFollowers} alt="Grow followers" className='w-52'/>
              <h3 className='text-white text-4xl text-center md:text-start'>Grow followers with non-stop content.</h3>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

export default App
