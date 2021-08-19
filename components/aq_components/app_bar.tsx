import React from "react";

type AppBarProps = {
    title? : String,
    actions? : React.ReactNode
}

export default function AppBar({ title, actions } : AppBarProps){
    return (
    <div className="flex flex-row pl-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
        <div className="flex-grow"></div>
        <div className="flex-row hidden lg:flex xl:mr-16">
            {actions}
        </div>
    </div>
    );
}