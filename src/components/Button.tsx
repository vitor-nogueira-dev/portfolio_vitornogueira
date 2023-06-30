import { IButtonComponent } from "@/interfaces/IButtonComponent";
import React from "react";

const ButtonComponent: React.FC<IButtonComponent> = ({ content }) => {
    return (
        <button className="btn">{content}</button>
    )
}

export default ButtonComponent;