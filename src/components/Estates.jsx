import { useEffect, useState } from "react";
import EstateCard from "./EstateCard";

const Estates = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getPropertiesData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setProperties(data);
    };

    getPropertiesData();
  }, []);

  return (
    <div className="container py-16 mx-auto">
      <h2 className="font-serif text-3xl font-bold text-center">
        Explore Properties
      </h2>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-5 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((propertie) => {
            return <EstateCard key={propertie.id} propertie={propertie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Estates;
