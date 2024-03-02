"use client"
import {FC, useState} from "react";
import "./styles.css"
import Link from "next/link";
import Image from "next/image";
import {ChartBarSquareIcon, ChevronDownIcon, EnvelopeIcon, LanguageIcon, UserIcon} from "@heroicons/react/16/solid";
import {usePathname, useRouter} from "next/navigation";

const Header: FC<{search: string; defLang: string}> = ({search, defLang}) => {
    const [isHeaderMenu, setMenuOpened] = useState('')
    const router = useRouter();
    const pathname = usePathname();
    const setOption = (option: string) => {
        setMenuOpened('');
        const newUrl = pathname.replace(/\/([a-zA-Z]{2})\//, '/'+option+'/' )
        router.replace(newUrl);
    };

    const menuHandler = (state: string) => {
        if(isHeaderMenu === state) setMenuOpened('')
        setMenuOpened(state)
    }

    return(
        <header className={"w-screen h-20 flex items-center bg-white max-w-full"}>
            <div className={"w-60 h-full relative bg-cover bg-center"} style={{backgroundImage: "url('/img/logoBG.jpg')"}}>
                <Link href={""} className={""}>
                    <div className={"absolute left-1/3 top-1/2 -translate-y-1/2 text-2xl"}>
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
                    <input className={"border-2 shadow-inner rounded-md pl-4"} type="text" placeholder={search}/>
                    <Link href="" className={"nav-icon"}>
                        <Image
                            src={"/img/wolf.svg"}
                            width={35}
                            height={35}
                            alt={"WebWolf"}/>
                    </Link>
                    <div
                        onBlur={() => menuHandler('user')}
                        onClick={() => menuHandler('user')}
                        className={`nav-icon pr-0.5 relative flex-col`}
                    >
                        <div className={"nav-icon w-full h-full flex items-center justify-center"}>
                            <UserIcon/>
                            <ChevronDownIcon className={"absolute right-0 top-1/2 -translate-y-1/2"}/>
                        </div>
                        {(isHeaderMenu === 'user') &&
                            <div className={"absolute w-44 left-0 top-8 bg-white pt-3 pb-2 text-sm rounded-sm shadow-2xl"}>
                                <div className={'pl-6 pb-1'}>UserName</div>

                                <div className={"w-full h-[1px] bg-gray-300 mt-1 mb-1"}></div>

                                <div className={'pl-6 pb-1 pt-1 text-gray-400'}>UserName</div>
                                <div className={'pl-6 pb-1 pt-1 text-gray-400'}>UserRole</div>

                                <div className={"w-full h-[1px] bg-gray-300 mt-1 mb-1"}></div>

                                <div className={'pl-6 pb-1 pt-1 text-gray-400'}>Version</div>
                                <div className={'pl-6 pt-1 text-gray-400'}>Build</div>
                            </div>
                        }
                    </div>
                    <div onBlur={() => menuHandler('lang')}
                         onClick={() => menuHandler('lang')}
                         className={`nav-icon pr-0.5 relative flex-col ${(isHeaderMenu === 'lang') ? "rounded-b-none shadow-inner" : ""}`}>
                        <div className={"icon w-full h-full flex items-center justify-center"}>
                            <LanguageIcon/>
                            <ChevronDownIcon className={"absolute right-0 top-1/2 -translate-y-1/2"}/>
                        </div>
                        {(isHeaderMenu === 'lang') &&
                            <div
                                className={"menu absolute w-full left-1/2 top-8 -translate-x-[52%] bg-gray-100 flex flex-col rounded-b-3xl sh transition ease-in-out duration-100"}>
                                <div className={"mx-auto"} onClick={()=> setOption('ge')}>
                                    <Image
                                        src={"/img/delang.svg"}
                                        width={35}
                                        height={35}
                                        alt={"German"}/>
                                </div>

                                <div className={"w-full h-[1px] bg-gray-300 mt-1 mb-1"}></div>

                                <div className={"mx-auto"} onClick={()=> setOption('ge')}>
                                    <Image
                                        src={"/img/delang.svg"}
                                        width={35}
                                        height={35}
                                        alt={"German"}/>
                                </div>

                                <div className={"mx-auto pt-1 pb-1"} onClick={()=> setOption('en')}>
                                    <Image
                                        src={"/img/enlang.svg"}
                                        width={35}
                                        height={35}
                                        alt={"English"}/>
                                </div>
                                <div className={"mx-auto pb-1"}  onClick={()=> setOption('nl')}>
                                    <Image
                                        src={"/img/nllang.svg"}
                                        width={35}
                                        height={35}
                                        alt={"Dutch"}/>
                                </div>
                                <div className={"mx-auto pb-2"}  onClick={()=> setOption('fr')}>
                                    <Image
                                        src={"/img/frlang.svg"}
                                        width={35}
                                        height={35}
                                        alt={"French"}/>
                                </div>
                            </div>
                        }
                    </div>
                    <Link href="" className={"nav-icon"}>
                        <ChartBarSquareIcon/>
                    </Link>
                    <Link
                        href={`/${defLang}/about`}
                        className={"nav-icon"}
                    >
                        <span>i</span>
                    </Link>
                    <Link
                        href="mailto:webgoat@owasp.org?Subject=Webgoat%20feedback"
                        className={"nav-icon"}
                        target={"_top"}
                    >
                        <EnvelopeIcon/>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
export default Header;