import React from "react";
import {Hero, Enemy, Arena} from "./allin";
import {fallen_img, cold_img} from "../Questao2/path";

export default function Questao04() {
    return(
        <div>
            <h2>
                Questão 04
            </h2>
            <Arena arena="ESL Cologne 2017">
                <Hero name="Fallen, O Verdadeiro" src={fallen_img}/>
                <Enemy name="Cold, THE BEST" src={cold_img}/>
            </Arena>
        </div>
    );
}