import React, { useContext, useEffect } from "react";
import Fox from "./Fox";
import { FoxContext } from "../providers/FoxProvider";

export default function FoxList() {
    const { foxes, refreshFoxes } = useContext(FoxContext);

    useEffect(() => {
        refreshFoxes();
    }, []);

    return (
        <section>
            {foxes.map(q =>
                <Fox key={q.id} fox={q} />
            )}
        </section>
    );
}