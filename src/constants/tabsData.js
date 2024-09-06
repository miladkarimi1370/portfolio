import { HomeRounded, FaceRounded, TextSnippetRounded,  MessageRounded, ConnectWithoutContactRounded, TheaterComedyRounded } from "@mui/icons-material";

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`
    }
}
export const tabsData = () => {
    const tabs = [
        { labe: "صحفه اصلی ", icon: <HomeRounded />, ...tabProps(0) },
        { labe: "درباره من", icon: <FaceRounded />, ...tabProps(1) },
        { labe: "رزومه من", icon: <TextSnippetRounded />, ...tabProps(2) },
        { labe: "فیلم های من ", icon: <TheaterComedyRounded />, ...tabProps(3) },
        { labe: "نظرات کارشناسان ", icon: <MessageRounded />, ...tabProps(4) },
        { labe: "ارتباط با من", icon: <ConnectWithoutContactRounded />, ...tabProps(5) },
    ]
    return tabs;
}
