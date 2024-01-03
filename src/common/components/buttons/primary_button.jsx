export default function PrimaryButton({ title = "Book" }) {
  return (
    <button className="bg-[#3B71FE] text-2xl hover:shadow-md border-transparent hover:border-gray-200 ease-in-out duration-200 border-2  text-white font-bold py-2 px-6 rounded-full">
      {title}
    </button>
  );
}
