import React from "react";
import {AddGroup} from "../components/AddGroup";
import {SearchGroup} from "../components/SearchGroup";
import "../components/styles/styles.css";

function Groups() {
    return (
        <section id="pantalla-dividida">
            <SearchGroup/>
            <AddGroup/>
        </section>
    );
}


export default Groups;


