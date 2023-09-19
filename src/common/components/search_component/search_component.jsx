import { useState } from "react";
import { addDays, set } from "date-fns";
import { Combobox, Popover } from "@headlessui/react";
import {
  MapPinIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { formatDate } from "../../utils/util_functions";

const places = [
  "Araku Valley",
  "Borra Caves",
  "Katiki Waterfalls",
  "Padmapuram Gardens",
  "Tribal Museum",
  "Ananthagiri Hills",
  "Chaparai Waterfalls",
  "Coffee Museum",
  "Dumbriguda Waterfalls",
  "Gosthani River",
  "Vishakhapatnam",
  "Kakinada",
  "Rajahmundry",
];

export default function SearchComponent() {
  const [placeQuery, setPlaceQuery] = useState("");
  const [place, setPlace] = useState("");
  const [datechanged, setDateChanged] = useState(false);
  const dateRanges = [
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 10),
      key: "selection",
    },
  ];
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    total: 0,
  });

  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  const filterPlaces =
    placeQuery === ""
      ? places
      : places.filter((place) => {
          return place.toLowerCase().includes(placeQuery.toLowerCase());
        });
  return (
    <div className="relative w-full flex flex-col lg:flex-row items-start justify-between gap-10  bg-white bg-opacity-95 backdrop-blur-3xl  p-7 lg:p-10 rounded-3xl shadow-xl ">
      {/* location input */}
      <div className="flex  gap-2  relative items-start justify-center  ">
        <MapPinIcon className="input-component-icon" />

        <Combobox value={place} onChange={setPlace}>
          <div>
            <Combobox.Input
              className=" rounded-lg  text-lg bg-transparent font-dm_sans font-semibold outline-none placeholder:text-black"
              placeholder="Location"
              onChange={(e) => setPlaceQuery(e.target.value)}
            />
            <p className="font-poppins text-sm text-gray-500">
              Where are you going?
            </p>
          </div>
          <Combobox.Options className="w-full z-10 absolute text-xl font-bold text-gray-500 top-0 mt-16 left-0 max-h-60 overflow-scroll  bg-white shadow-2xl  p-5 rounded-3xl">
            {filterPlaces.length === 0 && (
              <span className="p-2">No results found</span>
            )}
            {filterPlaces.map((place) => (
              <Combobox.Option
                key={place}
                value={place}
                className=" flex  items-center  justify-start gap-3 p-2 hover:bg-gray-50 cursor-pointer rounded-2xl"
              >
                <MapPinIcon className="h-5" />

                {place}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
      </div>
      {/* dates input */}
      <div className="relative ">
        <Popover>
          <Popover.Button
            className={
              "flex flex-col lg:flex-row items-center justify-between gap-10 text-lg  font-dm_sans font-bold outline-none"
            }
          >
            <div className="flex gap-2 w-max   items-start justify-start">
              <CalendarDaysIcon className="input-component-icon" />
              <div className="flex items-start flex-col justify-start">
                <p>
                  {datechanged ? dateState[0].startDate.toDateString() : "From"}
                </p>
                <p className="font-poppins font-normal  text-xs  text-gray-500">
                  Add date
                </p>
              </div>
            </div>
            <div className="flex gap-2  items-start justify-center">
              <CalendarDaysIcon className="input-component-icon" />
              <div className="flex flex-col justify-start items-start">
                <p className="">
                  {datechanged ? dateState[0].endDate.toDateString() : "To"}
                </p>
                <p className="font-poppins font-normal  text-xs  text-gray-500">
                  Add date
                </p>
              </div>
            </div>
          </Popover.Button>

          <Popover.Panel className="absolute z-10 ml-auto left-0 right-0">
    <div className="p-6 rounded-2xl shadow-2xl bg-white">

      {/* Show month 1 on mobile screens */}
      <div className="md:hidden"> 
        <DateRange
          minDate={new Date()}
          showDateDisplay={false}
          showMonthAndYearPickers={false}
          showPreview={true}
          showSelectionPreview={true}
          ranges={dateState}
          onChange={(item) => {
            setDateState([
              {
                startDate: formatDate(item.selection.startDate),
                endDate: formatDate(item.selection.endDate),
                key: "selection",
              },
            ]);
            setDateChanged(true);
            console.log(dateState);
          }}
          editableDateInputs={true}
          months={1}
          direction="horizontal"
        />
      </div>

      {/* Show month 2 on laptop screens */}
      <div className="hidden md:block">
        <DateRange
          minDate={new Date()}
          showDateDisplay={false}
          showMonthAndYearPickers={false}
          showPreview={true}
          showSelectionPreview={true}
          ranges={dateState}
          onChange={(item) => {
            setDateState([
              {
                startDate: formatDate(item.selection.startDate),
                endDate: formatDate(item.selection.endDate),
                key: "selection",
              },
            ]);
            setDateChanged(true);
            console.log(dateState);
          }}
          editableDateInputs={true}
          months={2}
          direction="horizontal"
        />
      </div>

    </div>
  </Popover.Panel>
        </Popover>
      </div>

      {/* Guestss input */}
      <div className="flex relative ">
        <Popover>
          <Popover.Button
            className={
              "flex items-center justify-between gap-16 text-lg font-dm_sans font-bold outline-none"
            }
          >
            <div className="flex gap-2 text-left items-center justify-start">
              <UserGroupIcon className="input-component-icon" />
              <div>
                <p className=" w-28">
                  {guests.total == 0 ? "People" : guests.total + "Guests"}
                </p>
                <p className="font-poppins font-normal text-xs text-gray-500">
                  Add People
                </p>
              </div>
            </div>
          </Popover.Button>

          <Popover.Panel className="absolute z-10 ml-auto p-3  w-max h-max ">
            <div className=" flex flex-col gap-5 p-6 rounded-2xl shadow-2xl bg-white">
              {/* Adults */}
              <div className="flex gap-10 items-start justify-between">
                <div>
                  <p className=" font-poppins font-medium">Adults</p>
                  <p className=" text-xs text-gray-500">Ages 13 or above</p>
                </div>
                <div className="flex items-center ">
                  <MinusCircleIcon
                    className={
                      "h-7  " +
                      (guests.adults === 0
                        ? "cursor-not-allowed text-gray-300 "
                        : "text-gray-400 hover:text-gray-700 ")
                    }
                    onClick={() => {
                      if (guests.adults > 0) {
                        setGuests((prev) => ({
                          ...prev,
                          adults: prev.adults - 1,
                          total: prev.total - 1,
                        }));
                      }
                    }}
                  />
                  <p className="mx-2 w-10 text-center">{guests.adults}</p>
                  <PlusCircleIcon
                    className="h-7 text-gray-400 hover:text-gray-700"
                    onClick={() =>
                      setGuests((prev) => ({
                        ...prev,
                        adults: prev.adults + 1,
                        total: prev.total + 1,
                      }))
                    }
                  />
                </div>
              </div>
              {/* Children */}
              <div className="flex gap-10 items-start justify-between">
                <div>
                  <p className=" font-poppins font-medium">Children</p>
                  <p className=" text-xs text-gray-500">Ages from 2 to 12</p>
                </div>
                <div className="flex items-center ">
                  <MinusCircleIcon
                    className={
                      "h-7  " +
                      (guests.children === 0
                        ? "cursor-not-allowed text-gray-300 "
                        : "text-gray-400 hover:text-gray-700 ")
                    }
                    onClick={() => {
                      if (guests.children > 0) {
                        setGuests((prev) => ({
                          ...prev,
                          children: prev.children - 1,
                          total: prev.total - 1,
                        }));
                      }
                    }}
                  />
                  <p className="mx-2 w-10 text-center">{guests.children}</p>
                  <PlusCircleIcon
                    className="h-7 text-gray-400 hover:text-gray-700"
                    onClick={() =>
                      setGuests((prev) => ({
                        ...prev,
                        children: prev.children + 1,
                        total: prev.total + 1,
                      }))
                    }
                  />
                </div>
              </div>
              {/* Infants */}
              <div className="flex gap-14 items-start justify-between">
                <div>
                  <p className=" font-poppins font-medium">Infants</p>
                  <p className=" text-xs text-gray-500">under 2</p>
                </div>
                <div className="flex items-center ">
                  <MinusCircleIcon
                    className={
                      "h-7  " +
                      (guests.infants === 0
                        ? "cursor-not-allowed text-gray-300 "
                        : "text-gray-400 hover:text-gray-700 ")
                    }
                    onClick={() => {
                      if (guests.infants > 0) {
                        setGuests((prev) => ({
                          ...prev,
                          infants: prev.infants - 1,
                          total: prev.total - 1,
                        }));
                      }
                    }}
                  />
                  <p className="mx-2 w-10 text-center">{guests.infants}</p>
                  <PlusCircleIcon
                    className="h-7 text-gray-400 hover:text-gray-700"
                    onClick={() =>
                      setGuests((prev) => ({
                        ...prev,
                        infants: prev.infants + 1,
                        total: prev.total + 1,
                      }))
                    }
                  />
                </div>
              </div>
              {guests.adults === 0 && (
                <div className="flex items-center">
                  <p className="warning-text flex items-center gap-2">
                    <ExclamationCircleIcon className="h-4" />
                    Travelling without Adults is not safe
                  </p>
                </div>
              )}
            </div>
          </Popover.Panel>
        </Popover>
      </div>
      {/* search button */}
      <div>
        <button className="bg-[#3B71FE] text-2xl hover:shadow-md border-transparent hover:border-gray-200 ease-in-out duration-200 border-2  text-white font-bold py-2 px-6 rounded-full">
          Book
        </button>
      </div>
    </div>
  );
}
