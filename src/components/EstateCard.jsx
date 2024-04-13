import { Link } from "react-router-dom";
import { FaLocationDot, FaChartArea } from "react-icons/fa6";

const EstateCard = ({ propertie }) => {
  const {
    id,
    estate_title,
    image,
    price,
    location,
    area,
    description,
    segment_name,
    status,
    facilities,
  } = propertie;

  return (
    <div className="p-4 border rounded-xl" data-aos="fade-in">
      <img
        src={image}
        alt="img"
        className="rounded-xl h-[250px] w-full object-cover"
      />
      <p className="inline-block px-2 py-1 mt-3 font-bold text-red-400 rounded bg-red-50">
        {segment_name}
      </p>
      <h2 className="my-2 text-xl font-medium">{estate_title}</h2>
      <p>{description.slice(0, 120)}...</p>
      <hr className="my-2" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaLocationDot />
          <h4 className="font-semibold text-gray-500">{location}</h4>
        </div>
        <div className="flex items-center gap-2">
          <FaChartArea />
          <h4 className="font-semibold text-gray-500">{area}</h4>
        </div>
      </div>

      <div className="flex items-center justify-between my-3">
        <h4 className="px-2 py-1 font-semibold text-white uppercase bg-blue-400 rounded">
          for {price}
        </h4>

        <h4 className="px-2 py-1 font-semibold text-white uppercase bg-red-400 rounded">
          for {status}
        </h4>
      </div>

      <h4 className="text-xl font-bold font-inter">Facilities:</h4>
      <div className="grid grid-cols-2 ">
        {facilities.map((item, idx) => {
          return (
            <li key={idx} className="list-disc">
              {item}
            </li>
          );
        })}
      </div>

      <Link
        to={`/estate-details/${id}`}
        className="w-full mt-3 text-white bg-green-500 btn hover:bg-green-600"
      >
        View Property
      </Link>
    </div>
  );
};

export default EstateCard;
