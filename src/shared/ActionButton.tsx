import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children,setSelectedPage}: Props) => {
  return (
    <AnchorLink
        className="rounded-md bg-secondary-500 text-gray-50 px-10 py-2 hover:bg-primary-100 hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
    >

        {children}

    </AnchorLink>
  )
}

export default ActionButton