import React from "react"

import { Forms, RiskDiv, TitleText, TypingText } from "@/components"

const Contact: React.FC = () => {
    return (
        <div className="flex justify-center items-center flex-col gap-4 py-4" id="contato">
            <RiskDiv />
            <TypingText title="| Entre em contato para explorar oportunidades profissionais" textStyles="w-75" />
            <TitleText title="Construindo parcerias de sucesso para o futuro"  />
            <Forms />
        </div>
    )
}

export default Contact