import React from "react"

import { TitleText, TypingText } from "@/components"

const Contact: React.FC = () => {
    return (
        <div className="flex justify-center items-center flex-col gap-4 p-2 border">
            <TypingText title="| Entre em contato para explorar oportunidades profissionais" />
            <TitleText title="Construindo parcerias de sucesso para o futuro" />
        </div>
    )
}

export default Contact