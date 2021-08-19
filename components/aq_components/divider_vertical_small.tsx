import React, { CSSProperties } from "react";

export default function SmallVerticalDivider() {
    return <div className="justify-self-center" style={style}></div>;
};

const style : CSSProperties = {
    width: 0,
    height: '32px',
    border: '0.1px solid rgba(0, 0, 0, 0.2)'
};