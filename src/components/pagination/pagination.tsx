"use client"

import React, {useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/16/solid";
import {lessonMenu} from "@/constants/lesson_menu";

const Pagination: React.FC = () => {
    const [activePagin, setActivePagin] = useState(0)
    const paginPageHandler = (activeIndex: number) =>{
        setActivePagin(activeIndex)
    }

    return (
        <div className={"flex justify-center text-xs text-white mt-4 ml-1 "}>
            <ChevronLeftIcon
                className={`bg-gray-500 rounded-xl mr-1 min-w-6 min-h-6 transition-opacity duration-200 ease-in-out cursor-pointer hover:bg-red-500 ${activePagin === 0 ? "invisible opacity-0" : "visible opacity-100"}`}
            />
            {lessonMenu.map((page, index) => {
                return (
                    <button key={index}
                            className={`mr-1 min-w-6 min-h-6 rounded-lg hover:bg-red-500 transition-colors ease-in-out ${activePagin === index ? "bg-red-500" : "bg-gray-600"}`}
                            onClick={() => paginPageHandler(index)}
                    >{index + 1}</button>
                )
            })}
            <ChevronRightIcon
                className={`bg-gray-500 rounded-xl min-w-6 min-h-6 transition-opacity duration-200 ease-in-out cursor-pointer hover:bg-red-500 ${activePagin === lessonMenu.length - 1 ? "invisible opacity-0" : "visible opacity-100"}`}
            />
        </div>
    )
}

export default Pagination