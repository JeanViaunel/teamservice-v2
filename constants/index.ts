import * as icons from "react-icons";
import { CiHome } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineSupportAgent } from "react-icons/md";

export const sidebarLinks = [
  { label: "Home", route: "/", imgUrl: CiHome },
  {
    label: "Client transaction",
    route: "/client-transactions",
    imgUrl: GrTransaction,
  },
  {
    label: "Users Feedback",
    route: "/client-feedbacks",
    imgUrl: VscFeedback,
  },
  {
    label: "Add New Transaction",
    route: "/agent-transactions-create",
    imgUrl: MdOutlineSupportAgent,
  },
];
