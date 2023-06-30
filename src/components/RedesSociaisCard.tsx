import Image from "next/image";
import React from "react"

import { IRedesSociaisCardProps } from "@/interfaces/IRedesSociaisCardProps"

const RedesSociaisCard: React.FC<IRedesSociaisCardProps> = ({ link, name, url }) => {
    return (
        <a href={link} key={name} target="_blank" rel="noopener noreferrer" className="cursos-pointer">
            <Image
                src={url}
                alt={name}
                className="object-contain cursor-pointer"
                width={30}
                height={30}
            />
        </a>
    )
}

export default RedesSociaisCard;