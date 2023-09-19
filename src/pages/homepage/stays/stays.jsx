import SearchComponent from "../../../common/components/search_component/search_component";
import SectionComponent from "../../../common/components/section_component/section_component";
import { useContext } from "react";
import { StaysTypesContext } from "../../../contexts/contexts";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import HowItWorks from "../../../common/components/how_it_works/how_it_works";

export default function Stays() {
  const [staysTypes, hasData] = useContext(StaysTypesContext);

  console.log(staysTypes);
  return (
    <div className="responsive-width ">
     <div className="relative h-max">
       <div className="h-[40vh] lg:h-[65vh] relative flex flex-col mb-20 mt-10">
        <img
          className=" h-full w-full object-cover rounded-2xl saturate-150 brightness-80"
          src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80"
          alt=""
        />
        <div className=" absolute left-0 z-20  top-0 h-full w-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-700 font-dm_sans">
            Book explore sleep
          </h1>
          <p className=" text-md text-gray-900 lg:text-xl text-center font-poppins">
            Find and book a great experience
          </p>
        </div>
        <div className="header-gradient h-full w-full absolute z-10 top-0 left-0 rounded-2xl"></div>
      </div>
        <div className="  -mt-40 lg:-bottom-20 left-0 w-full flex justify-center items-center z-50 px-2">
          <div className="w-full   lg:w-max">
            <SearchComponent />
          </div>
        </div>
     </div>


    <SectionComponent
          title="Explore stays by type"
          data={staysTypes}
          CardIcon={HomeModernIcon}
        />
      {/* {!hasData && (
        <div className="flex justify-center items-center h-[50vh]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )} */}

      <HowItWorks />

      {/* Booking form */}
      <div className="flex flex-col justify-center items-center mt-20">
        <h2 className="text-5xl font-bold font-dm_sans text-gray-700 my-5 text-center">
                            Book your stay
                        </h2>
      <h2 className="text-2xl font-light font-dm_sans text-gray-400  text-center md:px-6 lg:px-24">
                            Our executive will contact you within 24 hours to confirm your booking and payment
                </h2>
        <form action="https://formsubmit.co/your@email.com" method="POST"  className="flex flex-col my-10">
        <input type="hidden" name="_template" value="table"/>
        <input type="hidden" name="_subject" value="New Booking for stays!"/>
        <input type="text" name="Name" placeholder="Name" className="w-full md:w-96 border-2 border-gray-200 rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400" required/>
        <input type="email" name="Email" placeholder="Email" className="w-full md:w-96 border-2 border-gray-200 rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400" required/>
        <input  type="number" name="Phone" placeholder="Phone" className="w-full md:w-96 border-2 border-gray-200 rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400" required/>
        </form>
        </div>
    </div>
  );
}
