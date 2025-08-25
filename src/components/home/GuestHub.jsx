// src/components/home/GuestHub.jsx
import React from "react";
import { Link } from "react-router-dom";

const guestLinks = [
  { title: "RSVP", desc: "Confirm your attendance easily.", link: "/rsvp" },
  { title: "View Schedule", desc: "See ceremony & reception timelines.", link: "/schedule" },
  { title: "Gift Registry", desc: "Check out couple's wishlist.", link: "/gifts" },
];

export default function GuestHub() {
  return (
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-serif font-bold text-rose-600 mb-12 relative inline-block">
        Guest Hub
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-16 h-1 bg-rose-300 rounded-full"></span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {guestLinks.map((link, index) => (
          <Link
            key={index}
            to={link.link}
            className="group bg-pink-50 border border-rose-100 rounded-2xl shadow-md p-8 hover:shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-rose-500 mb-3 group-hover:text-rose-600">
              {link.title}
            </h3>
            <p className="text-gray-600 text-sm">{link.desc}</p>
            <div className="mt-4 text-rose-400 font-medium group-hover:underline">
              Go →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
