import React from "react";

type AppBarItemProps = {
    children: React.ReactNode,
}

export default function AppBarMenuItem({children} : AppBarItemProps) {
    return (
        <div className="mx-5 text-lg">
            {children}
        </div>
    );
};
