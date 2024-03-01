"use client"
import {FC, MutableRefObject, RefObject, useEffect, useRef, useState} from "react";
import axios from "axios";
import {lessonMenu} from "@/constants/lesson_menu";
import {ChevronRightIcon} from "@heroicons/react/16/solid";
const DropDownMenu = ({lesson, isListOpenned, toggleLessonList, index} : {
    lesson: LessonMenuType,
    isListOpenned: number,
    toggleLessonList: () => void,
    index: number
}) => {
    return(
        <>
            <div key={lesson.title} onClick={toggleLessonList} onBlur={toggleLessonList} className={`relative pl-4 pt-0.5 pb-0.5 text-black text-sm ${isListOpenned === index ? "bg-red-500 text-white" : ""} transition duration-300 ease-in-out cursor-pointer`}>
                <span>{lesson.title}</span>
                <ChevronRightIcon className={`absolute right-0 top-1/2 -translate-y-1/2 transition-transform ease-in-out ${(isListOpenned === index) ? "rotate-90": ""}`}/>
            </div>
            {
                isListOpenned === index &&
                    <div className={`text-black text-xs ${(isListOpenned === index) ? "" : "content-none"}`}>
                        {
                            lesson.childrenLessons?.map((lesson) => {
                                return (
                                    <div key={lesson.title} className={"pl-8 pt-1 pb-1 bg-gray-500 hover:bg-red-500 hover:text-white transition-transform ease-in-out cursor-pointer"}>
                                        {lesson.title}
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </>
    )
}
const Aside: FC = () => {
    // useEffect(() => {
    //     axios.get("http://localhost:8080/WebGoat/services/lessonsmenu.mvc", {
    //         headers: {
    //             "Access-Control-Allow-Origin": "*"
    //         },
    //
    //     }).then(response => {
    //         console.log(response)
    //     })
    // }, []);
    const [isListOpenned, setOpenned] = useState(-1)

    const openLessonList = (index: number) => {
        if(isListOpenned === index) {
            setOpenned(-1)
            return;
        }
        setOpenned(index)
    }
    return(
        <aside className={"min-w-60 h-screen bg-white flex flex-col"}>
            {
                lessonMenu.map((lesson,index)=>{
                    return(
                        <DropDownMenu
                            key={index}
                            lesson={lesson}
                            isListOpenned={isListOpenned}
                            toggleLessonList={()=>{
                                openLessonList(index)
                            }}
                            index={index}
                        />
                    )
                })
            }
        </aside>
    )
}
export default Aside;