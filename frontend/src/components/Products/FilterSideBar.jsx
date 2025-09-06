import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSideBar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [""],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Black",
    "White",
    "Yellow",
    "Purple",
    "Pink",
    "Orange",
    "Gray",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Polyester",
    "Wool",
    "Silk",
    "Denim",
    "Linen",
    "Viscose",
    "Fleece",
  ];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];
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
    setPriceRange([
      parseInt(params.minPrice) || 0,
      parseInt(params.maxPrice) || 100,
    ]);
  }, [searchParams]);

  // handle price slider change
  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
    setFilters(filters);
    updateURLParams(newFilters);
  };
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

      {/* Category */}
      <div>
        <h3 className="mb-2 text-sm font-medium">Category</h3>
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              className="w-4 h-4 text-blue-600"
              value={category}
              checked={filters.category === category}
              onChange={handleFilterChange}
            />
            <span>{category}</span>
          </div>
        ))}
      </div>

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
      <div>
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
      </div>

      {/* Sizes */}
      <div>
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
      </div>

      {/* Materials */}
      <div>
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
      </div>

      {/* Brands */}
      <div>
        <label className="block mb-2 text-sm font-medium">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="brand"
              className="w-4 h-4 text-blue-600"
              value={brand}
              checked={filters.brand.includes(brand)}
              onChange={handleFilterChange}
            />
            <span>{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div>
        <label className="block mb-2 text-sm font-medium">Price Range</label>
        <div className="flex items-center gap-2">
          {/* <input
            type="range"
            min="0"
            max="100"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="w-full"
          /> */}
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;
