"use client"
import {FC, useState} from "react";
import "./styles.css"
import Link from "next/link";
import Image from "next/image";
import {ChartBarSquareIcon, ChevronDownIcon, EnvelopeIcon, LanguageIcon, UserIcon} from "@heroicons/react/16/solid";

const Header: FC = () => {
    const [isHeaderMenuOpened, setOpened] = useState(false)
    return(
        <header className={"w-screen h-20 flex items-center bg-white max-w-full"}>
            <div className={"w-60 h-full relative bg-cover bg-center"} style={{backgroundImage: "url('/img/logoBG.jpg')"}}>
                <Link href={""} className={""}>
                    <div className={"absolute left-1/3 top-1/2 -translate-y-1/2 text-2xl z-10"}>
                        <span className={"font-bold"}>
                            WEB
                        </span>
                        GOAT
                    </div>
                </Link>
            </div>
            <nav className={"w-auto flex-grow p-10 h-full items-center flex justify-between"}>
                <div className={"text-4xl text-black"}>
                    WebWolf
                </div>
                <div className={"flex gap-1"}>
                    <input className={"border-2 shadow-inner rounded-md pl-4"} type="text" placeholder="Search lesson"/>
                    <Link href="" className={"nav-icon"}>
                        <Image
                            src={"/img/wolf.svg"}
                            width={35}
                            height={35}
                            alt={"WebWolf"}/>
                    </Link>
                    <Link href="" className={"nav-icon"}>
                        <UserIcon/>
                    </Link>
                    <div onBlur={()=> setOpened(!isHeaderMenuOpened)} onClick={()=>setOpened(!isHeaderMenuOpened)} className={`nav-icon pr-0.5 relative flex-col ${isHeaderMenuOpened ? "rounded-b-none shadow-inner" : ""}`}>
                        <div className={"icon w-full h-full flex items-center justify-center"}>
                            <LanguageIcon/>
                            <ChevronDownIcon className={"absolute right-0 top-1/2 -translate-y-1/2"}/>
                        </div>
                        {isHeaderMenuOpened &&
                            <div className={"menu absolute w-full left-1/2 top-8 -translate-x-[52%] bg-gray-100 flex flex-col rounded-b-3xl sh transition ease-in-out duration-100"}>
                                <div className={"mx-auto"}>
                                    <Image
                                        src={"/img/delang.svg"}
                                        width={35}
                                        height={35}
                                        alt={"WebWolf"}/>
                                </div>
                                <div className={"w-full h-[1px] bg-gray-300 mt-1 mb-1"}></div>
                                <div className={"mx-auto pb-1"}>
                                    <Image
                                        src={"/img/enlang.svg"}
                                        width={35}
                                        height={35}
                                        alt={"WebWolf"}/>
                                </div>
                                <div className={"mx-auto pb-1"}>
                                    <Image
                                        src={"/img/eslang.svg"}
                                        width={35}
                                        height={35}
                                        alt={"WebWolf"}/>
                                </div>
                                <div className={"mx-auto pb-2"}>
                                    <Image
                                        src={"/img/frlang.svg"}
                                        width={35}
                                        height={35}
                                        alt={"WebWolf"}/>
                                </div>
                            </div>
                        }
                    </div>
                    <Link href="" className={"nav-icon"}>
                        <ChartBarSquareIcon/>
                    </Link>
                    <Link href="" className={"nav-icon"}>
                        <span>i</span>
                    </Link>
                    <Link href="" className={"nav-icon"}>
                        <EnvelopeIcon/>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
export default Header;