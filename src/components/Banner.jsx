const Banner = () => {
  return (
    <div
      style={{ backgroundImage: 'url("./bg.svg")' }}
      className="w-full h-screen bg-center bg-cover -mt-[100px] flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-serif text-6xl font-bold leading-tight text-center">
          Find the right home <br /> for your family
        </h2>
        <p className="max-w-2xl my-2 text-center text-zinc-600">
          Step into a world of possibilities as you explore our collection of
          residential properties. From charming family homes to elegant
          townhouses and sophisticated apartments
        </p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <button className="text-white bg-blue-500 hover:bg-blue-600 btn">
            Explore All
          </button>
          <button className="text-white bg-orange-500 hover:bg-orange-600 btn">
            Request a Callback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
