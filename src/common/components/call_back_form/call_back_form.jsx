import React from 'react'

export default function CallBackForm({title, description, form_type}) {
  return (
   <div className="w-full flex flex-col justify-center items-center mt-20">
        <h2 className="text-5xl font-bold font-dm_sans text-gray-700 my-5 text-center">
                            {title}
                        </h2>
      <h2 className="text-xl lg:text-2xl font-light font-dm_sans text-gray-400  text-center md:px-6 lg:px-24">
                            Our executive will contact you within 24 hours to confirm your booking and payment details.
                            Or you can call us at <a href="tel:+919618434488" className="text-gray-900 font-semibold">+91 9618434488</a> or <a href="tel:098936293565" className="text-gray-900 font-semibold">098936293565</a> for instant booking.
                </h2>
        <form action="https://formsubmit.co/vijaynaranji@gmail.com" method="POST"  className="flex flex-col my-10 w-full items-center justify-center ">
        <input type="hidden" name="_template" value="table"/>
        <input type="hidden" name="_subject" value="New Booking for stays!"/>
        <input type="text" name="Name" placeholder="Name" className="w-full md:w-96 border-2 border-gray-200 rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400" required/>
        <input type="email" name="Email" placeholder="Email" className="w-full md:w-96 border-2 border-gray-200 rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400" required/>
        <input  type="number" name="Phone" placeholder="Phone" className="w-full md:w-96 border-2 border-gray-200 rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400" required/>
        <select name="Type" className="w-full md:w-96 border-2 border-gray-200 rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400" required>
          <option value="" selected disabled hidden>select the serivce</option>
          <option value="Stays">Stays</option>
          <option value="Cars">Cars</option>
          <option value="Trips">Trips</option>
          <option value="Trekking">Trekking</option>
          <option value="Camping">Camping</option>
          <option value="Others">Others</option>
        </select>
        <input type="hidden" name="_autoresponse" value="We have recived your message and our executive will reachout to you in 24 hours "/>


        <textarea name="Message" placeholder="Message" className="w-full md:w-96 border-2 border-gray-200 rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400" required></textarea>
        <button type="submit" className="w-full md:w-96 bg-gray-900 text-white rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400">Place a call back</button>

        </form>
        </div>
  )
}
