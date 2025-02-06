import React, { useState, useMemo } from "react";

const ProductList = ({ products }) => {
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) =>
        product.title.toLowerCase().includes(filter.trim().toLowerCase())
      )
      .sort((a, b) =>
        sortBy === "pricedesc"
          ? a.price - b.price
          : sortBy === "priceasc"
          ? b.price - a.price
          : sortBy === "title"
          ? a.title.localeCompare(b.title)
          : 0
      );
  }, [products, filter, sortBy]);

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-1/2"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="">Select Sorting</option>
          <option value="pricedesc">Sort by Price (Descending)</option>
          <option value="priceasc">Sort by Price (Ascending)</option>
          <option value="title">Sort by Name</option>
        </select>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Price
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Description
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Category
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Thumbnail
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{product.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                {product.title}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${product.price}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.description}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.category}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  width={50}
                  height={50}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
