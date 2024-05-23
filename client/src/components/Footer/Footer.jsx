import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-around items-center my-4 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-black">
      <div>
        <div>
          <p className="font-normal text-center">AIRBUS</p>
          <p>Enhance your flight Navigation Experience</p>
        </div>
      </div>
      <div>@copywrite 2024</div>
      <div>
        <div className="font-semibold">Support</div>
        <ul className="list-disc pl-4">
          <li>Help Center</li>
          <li>Customer Support</li>
          <li>User Manual</li>
          <li>Contact Support</li>
        </ul>
      </div>
    </div>
  );
}
