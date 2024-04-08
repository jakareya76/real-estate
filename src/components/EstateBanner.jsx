const EstateBanner = ({ bannerImg, title }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
      className="w-full h-[calc(100vh-300px)] bg-center bg-cover relative flex items-center justify-center"
    >
      <div className="flex items-center justify-center">
        <div className="absolute w-full h-full bg-[#0000009c]"></div>
        <h2 className="z-50 text-5xl font-bold text-white">{title}</h2>
      </div>
    </div>
  );
};

export default EstateBanner;
