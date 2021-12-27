import React from "react";
import profile from "../images/Ellipse 1.png";
import { Link } from "react-router-dom";
import waterlog from "../images/waterlog.png";

const WaterLog = () => {
    const data = [
        {
            id: 1,
            number: "Weekly goal",
            date: " 56 Glasses",
        },
        {
            id: 2,
            number: "Daily average",
            date: " 5.6 Glasses",
        },
        {
            id: 3,
            number: "Daily average under weekly goal",
            date: " 15 Glasses",
        },
    ];
    return (
        <div className="py-10 h-full">
            <div className="flex justify-between">
                <Link to="/dashboard">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </Link>
                <img src={profile} alt="profile" className="ml-auto" />
            </div>
            <div className=" text-textpurple">
                <p className="text-4xl font-bold my-6">Water Log</p>
                <p className="text-xl font-semibold mb-3 underline">
                    December 4-10
                </p>
            </div>

            <div className="bg-white rounded-lg p-4">
                <img src={waterlog} alt="WaterLog" />
            </div>

            <div className="mt-8">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="px-2 py-3 flex justify-between bg-white rounded-lg my-2"
                    >
                        <p>{item.number}</p>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WaterLog;