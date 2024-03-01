"use client"
import Image from "next/image";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/16/solid";
import {useState} from "react";
import {lessonMenu} from "@/constants/lesson_menu";
import {useTranslations} from "next-intl";

export default function Home() {
    const t = useTranslations("Home");

    const [activePagin, setActivePagin] = useState(0)
    const paginPageHandler = (activeIndex: number) =>{
        setActivePagin(activeIndex)
    }
    return (
        <main className={"w-full bg-gray-200 flex justify-center items-center"}>
            <section className={"w-3/4 h-3/4 p-1 bg-white rounded-lg"}>
                <div className={"pt-2 pl-2 mb-8"}>
                    <button
                        className={"bg-gray-200 p-1 text-xs text-black rounded-md hover:bg-gray-300 transition-colors ease-in-out duration-200 border-[1px] border-dashed focus:border-black"}
                    >
                        {t(`lesson.reset}`)}
                    </button>
                </div>
                <div className={"bg-gray-300 w-full h-[1px]"}></div>

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
                        className={`bg-gray-500 rounded-xl min-w-6 min-h-6 transition-opacity duration-200 ease-in-out cursor-pointer hover:bg-red-500 ${activePagin === lessonMenu.length-1 ? "invisible opacity-0" : "visible opacity-100"}`}
                    />
                </div>

                <section className={"text-black"}>

                </section>
            </section>
        </main>
    );
}
