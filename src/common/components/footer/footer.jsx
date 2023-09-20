import React from 'react'

export default function Footer() {
  return (
      <footer class="responsive-width bg-white py-4 text-gray-400 border-t-[1px]">
      <div className='flex flex-col px-4 md:px-0 md:flex-row gap-5 items-start justify-evenly'>
        <div className='text-left'>
          <h2 className="text-2xl font-bold font-dm_sans text-gray-700   my-2 ">
            OYOLA
          </h2>
          <p className=" text-md  text-center font-poppins">
            Find and book a great experience
          </p>
        </div>
        {/* social media */}
        <div className='text-left flex flex-col items-start justify-start  '>
          <h2 className="text-md text-gray-700   text-center font-poppins font-bold  py-2 ">
            Connect with us
          </h2>
          <div className='flex flex-row gap-10'>
            {/* whatsapp */}
            <a href="https://www.facebook.com/oyola.in" target="_blank" className='hover:text-gray-900'>
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
              <path d="M 25 2 C 12.318 2 2 12.318 2 25 C 2 28.96 3.0228906 32.853062 4.9628906 36.289062 L 2.0371094 46.730469 C 1.9411094 47.073469 2.03325 47.440312 2.28125 47.695312 C 2.47225 47.892313 2.733 48 3 48 C 3.08 48 3.1612344 47.989703 3.2402344 47.970703 L 14.136719 45.271484 C 17.463719 47.057484 21.21 48 25 48 C 37.682 48 48 37.682 48 25 C 48 12.318 37.682 2 25 2 z M 16.642578 14 C 17.036578 14 17.428437 14.005484 17.773438 14.021484 C 18.136437 14.039484 18.624516 13.883484 19.103516 15.021484 C 19.595516 16.189484 20.775875 19.058563 20.921875 19.351562 C 21.069875 19.643563 21.168656 19.984047 20.972656 20.373047 C 20.776656 20.762047 20.678813 21.006656 20.382812 21.347656 C 20.086813 21.688656 19.762094 22.107141 19.496094 22.369141 C 19.200094 22.660141 18.892328 22.974594 19.236328 23.558594 C 19.580328 24.142594 20.765484 26.051656 22.521484 27.597656 C 24.776484 29.583656 26.679531 30.200188 27.269531 30.492188 C 27.859531 30.784188 28.204828 30.734703 28.548828 30.345703 C 28.892828 29.955703 30.024969 28.643547 30.417969 28.060547 C 30.810969 27.477547 31.204094 27.572578 31.746094 27.767578 C 32.288094 27.961578 35.19125 29.372062 35.78125 29.664062 C 36.37125 29.956063 36.766062 30.102703 36.914062 30.345703 C 37.062062 30.587703 37.062312 31.754234 36.570312 33.115234 C 36.078313 34.477234 33.717984 35.721672 32.583984 35.888672 C 31.565984 36.037672 30.277281 36.10025 28.863281 35.65625 C 28.006281 35.38625 26.907047 35.028734 25.498047 34.427734 C 19.575047 31.901734 15.706156 26.012047 15.410156 25.623047 C 15.115156 25.234047 13 22.46275 13 19.59375 C 13 16.72475 14.524406 15.314469 15.066406 14.730469 C 15.608406 14.146469 16.248578 14 16.642578 14 z"></path>
            </svg>
            </a>
            {/* instagram */}
            <a href="https://www.facebook.com/oyola.in" target="_blank" className='hover:text-gray-900'>
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
            </svg>
            </a>
            {/* facebook */}
              <a href="https://www.facebook.com/oyola.in" target="_blank" className='hover:text-gray-900'>
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
            </svg>
            </a>
          </div>          
        </div>
        {/* places */}
        <div className='text-left'>

          <h2 className="text-md text-gray-700   text-left font-poppins font-bold  py-2 ">
            We are at
          </h2>
          <ul className=" text-md list-disc list-inside text-left font-poppins">
            <li>Araku</li>
            <li>Kakinada</li>
            <li>Visakhapatnam</li>
            <li>Hyderabad</li>
            <li>Kolkata</li>
            <li>Banglore</li>
            <li>Chennai</li>
          </ul>
        </div>
        {/* address */}
        <div className='text-left    '>
          <h2 className="text-md text-gray-700   text-left font-poppins font-bold  py-2 ">
            OYOLA cabs & hotel booking
          </h2>
          <p className=" text-md list-disc text-left font-poppins">
              Jalatharangini road
              Araku, India - 531151
          </p>
        </div>
      </div>
        <div class="w-full flex justify-center items-center text-xs pt-10">
          <a href="https://nanisamrieddy.dev/" target="_blank" >
            <span>Made with ♡ by Nani samireddy</span>
            <span class=" px-2 md:px-6">|</span>
            <span>copyright © 2023 oyola.in</span>
          </a>
        </div>
    </footer>
  )
}
