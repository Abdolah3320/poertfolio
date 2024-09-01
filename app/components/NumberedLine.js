export default function NumberedLine({number}) {
  return (
    <>
      <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-1 bg-white"></div>
        <div className="absolute w-6 h-6 text-base rounded-full bg-white z-10 text-black text-center">
          {number}
        </div>
      </div>
      <div className="col-span-4 w-full h-full"></div>
    </>
  );
}
