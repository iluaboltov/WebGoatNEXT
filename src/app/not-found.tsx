'use client'

import Image from "next/image";

const NotFound: React.FC = () => {
    return(
        <html>
            <body className={'h-screen flex justify-center items-center'}>
            <div className={'flex justify-center items-center bg-red-500 min-h-24'}>
                <div className={'flex justify-center items-center h-[35px] w-[35px]'}>
                    <Image
                        src={'/img/logo.png'}
                        alt={'Logo'}
                        width={35}
                        height={35}
                    />
                </div>
                <div className={"text-9xl "}>
                    404
                </div>
            </div>
            </body>
        </html>
    )
}
export default NotFound;