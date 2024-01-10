import { MouseEventHandler } from "react";

interface IDButton {
    onClick: MouseEventHandler;
}

export const Button = ({onClick}: IDButton) => {
    return (
        <button className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white" onClick={onClick}>Entrar</button>
    )
}