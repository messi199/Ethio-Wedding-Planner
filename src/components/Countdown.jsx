// src/components/Countdown.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TimeUnit = ({ value, label }) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-rose-500">{value}</div>
    <div className="text-sm uppercase text-gray-500">{label}</div>
  </div>
);

export default function Countdown({ date }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-4">
          Countdown to the Big Day
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {timeLeft.days !== undefined ? (
            <>
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.minutes} label="Mins" />
              <TimeUnit value={timeLeft.seconds} label="Secs" />
            </>
          ) : (
            <div className="col-span-4 text-center text-gray-600">
              The big day is here!
            </div>
          )}
        </div>
      </div>
      <Link
        to="/timeline"
        className="text-rose-500 hover:underline mt-4 text-sm font-semibold text-right block"
      >
        View Timeline &rarr;
      </Link>
    </div>
  );
}
