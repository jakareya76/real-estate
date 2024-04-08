import { useEffect, useState } from "react";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategoryData = async () => {
      const res = await fetch("/categories.json");

      const data = await res.json();

      setCategory(data);
    };

    getCategoryData();
  }, []);

  return (
    <div className="container py-16 mx-auto">
      <h2 className="font-serif text-3xl font-bold text-center">
        Explore All Category
      </h2>

      <div className="grid grid-cols-1 gap-5 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {category.map((item, idx) => {
          return (
            <div key={idx} className="p-5 border rounded-xl ">
              <h2 className="my-2 text-2xl font-bold">{item.name}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
