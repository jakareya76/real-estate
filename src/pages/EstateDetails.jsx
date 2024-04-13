import { useParams, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

import EstateBanner from "../components/EstateBanner";

const EstateDetails = () => {
  const estateData = useLoaderData();

  const { id } = useParams();

  const numId = parseInt(id);

  const currentEstate = estateData.filter((item) => {
    return item.id === numId;
  });

  const {
    estate_title,
    description,
    area,
    facilities,
    image,
    location,
    price,
    segment_name,
    status,
  } = currentEstate[0];

  return (
    <>
      <Helmet>
        <title>{estate_title && estate_title}</title>
      </Helmet>
      <EstateBanner bannerImg={image} title={estate_title} />
      <div className="container px-4 py-8 mx-auto" data-aos="fade-up">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="md:col-span-1">
            <img src={image} alt={estate_title} className="w-full" />
          </div>
          <div className="md:col-span-1">
            <h2 className="mb-4 text-3xl font-bold">{estate_title}</h2>
            <p className="mb-2 text-gray-700">Description: {description}</p>
            <p className="mb-2 text-xl font-bold text-gray-700">
              Area: <span className="font-normal">{area}</span>
            </p>
            <p className="mb-2 text-xl font-bold text-gray-700">
              Facilities: <span className="font-normal">{facilities}</span>
            </p>
            <p className="mb-2 text-xl font-bold text-gray-700">
              Location: <span className="font-normal">{location}</span>
            </p>
            <p className="mb-2 text-xl font-bold text-gray-700">
              Price: <span className="font-normal"> {price}</span>
            </p>
            <p className="mb-2 text-xl font-bold text-gray-700">
              Segment:<span className="font-normal">{segment_name}</span>
            </p>
            <p className="mb-2 text-xl font-bold text-gray-700">
              Status: <span className="font-normal">{status}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstateDetails;
