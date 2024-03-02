import {redirect} from "next/navigation";

const RootPage = ({params}: {params: { local: string}}) => {
    return(
        redirect(`/en/home`)
    )
}
export default RootPage;