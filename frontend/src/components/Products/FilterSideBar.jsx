import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSideBar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: "",
    material: "",
  });

  // const colors = ["Red", "Blue", "Black", "White", "Gray"];
  // const sizes = ["XS", "S", "M", "L", "XL"];
  // const materials = ["Cotton", "Polyester"];

  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [""],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: parseInt(params.minPrice) || 0,
      maxPrice: parseInt(params.maxPrice) || 100,
    });
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newFilters = { ...filters };
    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      const value = newFilters[key];
      if (Array.isArray(value) && value.length > 0) {
        params.append(key, value.join(","));
      } else if (value) {
        params.append(key, value);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };
  return (
    <div>
      <h2 className="text-lg font-semibold">Filter</h2>

      {/* Gender */}
      <div>
        <h3 className="mb-2 text-sm font-medium">Gender</h3>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center space-x-2">
            <input
              type="radio"
              name="gender"
              className="w-4 h-4 text-blue-600"
              value={gender}
              checked={filters.gender === gender}
              onChange={handleFilterChange}
            />
            <span>{gender}</span>
          </div>
        ))}
      </div>

      {/* Colors */}
      {/* <div>
        <label className="block mb-2 text-sm font-medium">Color</label>
        <div className="grid grid-cols-5 gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              onClick={() =>
                handleFilterChange({
                  target: { name: "color", value: color, type: "radio" },
                })
              }
              className={`w-6 h-6 rounded-full border-2 hover:scale-105 ${
                filters.color === color ? "ring-2 ring-gray-800" : ""
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
      </div> */}

      {/* Sizes */}
      {/* <div>
        <label className="block mb-2 text-sm font-medium">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="size"
              className="w-4 h-4 text-blue-600"
              value={size}
              checked={filters.size.includes(size)}
              onChange={handleFilterChange}
            />
            <span>{size}</span>
          </div>
        ))}
      </div> */}

      {/* Materials */}
      {/* <div>
        <label className="block mb-2 text-sm font-medium">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="material"
              className="w-4 h-4 text-blue-600"
              value={material}
              checked={filters.material.includes(material)}
              onChange={handleFilterChange}
            />
            <span>{material}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default FilterSideBar;
