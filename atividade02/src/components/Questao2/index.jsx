import React from "react";
import {fallen_img} from "./path";
import {cold_img} from "./path";

function Hero(props){
    return(
        <div>
            <p>
               {props.name}
            </p>
            <img src={props.src} 
                 alt=""
                 style={{width: "350px"}}
            />
        </div>
    );
}

function Enemy(props){
    return(
        <div>
            <p>
                {props.name}
            </p>
            <img src={props.src}
                 alt=""
                 style={{width: "350px"}}
            />
        </div>
    );
}

function Arena(){
    return(
        <div 
            style={{
                display: "contents",
                width: "850px",
                justifyContent: "center"
            }}
        >
            <h2>
                Questão 02
            </h2>
            <Hero name="FalleN 2" src={fallen_img}> </Hero>
            <Enemy name="ColdZera 2" src={cold_img}> </Enemy>
        </div>
    );
}

export default Arena;