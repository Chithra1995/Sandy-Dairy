import React, { useState } from "react";

export default function Test() {
  const [list, setList] = useState([]);
  const filterList = [
    {
      id: 11,
      name: "Part Time",
      value: "PART_TIME",
    },
    {
      id: 12,
      name: "Full Time",
      value: "FULL_TIME",
    },
    {
      id: 13,
      name: "Freelancer",
      value: "FREELANCER",
    },
  ];
  const searchLists = [
    {
      id: 1,
      type: "PART_TIME",
      name: "Akash",
      location: "bangalore",
      experience: 1,
    },
    {
      id: 2,
      type: "PART_TIME",
      name: "feroz",
      location: "mumbai",
      experience: 3,
    },
    {
      id: 3,
      type: "FULL_TIME",
      name: "Farheen",
      location: "agra",
      experience: 5,
    },
    {
      id: 4,
      type: "FREELANCER",
      name: "Raju",
      location: "chennai",
      experience: 6,
    },
    {
      id: 5,
      type: "FULL_TIME",
      name: "Asif",
      location: "vegas",
      experience: 7,
    },
  ];

  const checkfilter = (e) => {
    setList([...list, e.target.value]);
    console.log(list);
  };

  return (
    <div>
      <div>
        {filterList.map((filterproduct) => (
          <div>
            <input
              type="checkbox"
              id={filterproduct.id}
              value={filterproduct.value}
              onChange={(e) => checkfilter(e)}
            />
            <label for={filterproduct.id}>{filterproduct.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
