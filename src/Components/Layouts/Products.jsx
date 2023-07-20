import React from "react";
import { useEffect, useState } from "react";
import { fetchApiTodo } from "../../services/ProductSercive";
import Cards from "../Elements/Cards";
const Products = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    const newData = await fetchApiTodo();
    setData(newData);
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <section>
        <div className="flex flex-wrap gap-5 justify-center pt-24 bg-base-200">
          {data.products?.map((item, index) => (
            <Cards
              key={index}
              image={item.images?.[0]}
              brand={item.brand}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
