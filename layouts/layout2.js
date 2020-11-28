import React, { useState } from "react";

export default function MyLayout2({ children }) {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <h1>
                hahahahaha
            </h1>

            {children}
        </>
    )
}
