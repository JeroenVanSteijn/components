import React from "react";
import { Member } from "../../TeamMember";
interface PopupProps {
    member: Member;
    closePopup: () => void;
    popup: boolean;
}
declare const Popup: React.FC<PopupProps>;
export default Popup;
