import {redirect} from "next/navigation";

const RootPage = () => {
    return(
        redirect(`/en/home`)
    )
}
export default RootPage;