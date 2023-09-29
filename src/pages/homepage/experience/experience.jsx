import SearchComponent from "../../../common/components/search_component/search_component";
import SectionComponent from "../../../common/components/section_component/section_component";
import { useContext } from "react";
import { ExperiencesTypesContext } from "../../../contexts/contexts";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import HowItWorks from "../../../common/components/how_it_works/how_it_works";
import CallBackForm from "../../../common/components/call_back_form/call_back_form";
import Navbar from "../../../common/components/navbar/navbar";
import Footer from "../../../common/components/footer/footer";

export default function Experiences() {
  const [experiencesTypes, hasData] = useContext(ExperiencesTypesContext);
  return (
    <>
      <Navbar currentService={"experiences"} />
      <div className="responsive-width ">
        <div className="relative h-max">
          <div className="h-[40vh] lg:h-[65vh] relative flex flex-col mb-20 mt-10 -z-10">
            <img
              className=" h-full w-full object-cover rounded-2xl saturate-150 brightness-80"
              src="https://images.unsplash.com/photo-1504598318550-17eba1008a68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2848&q=80"
              alt=""
            />
            <div className=" absolute left-0 z-20  top-0 h-full w-full flex flex-col items-center justify-center gap-4">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-700 font-dm_sans">
                Experience The Nature
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
          title="Explore experiences by type"
          data={experiencesTypes}
          CardIcon={HomeModernIcon}
        />
        {/* {!hasData && (
        <div className="flex justify-center items-center h-[50vh]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )} */}

        <HowItWorks />

        {/* Booking form */}
        <div id="callbackform">
          <CallBackForm
            title={"Book your Experience"}
            form_type={"experiences"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
