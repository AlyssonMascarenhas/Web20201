import React from "react";

function Hero(props){
    return(
        <div>
            <h2>
                Nome: {props.name}
            </h2>
            <img
                src={props.src}
                alt=""
            />
            <h2>
                Arena: {props.name}
            </h2>
        </div>
    );
}

function Enemy(props){
    return(
        <div>
            <h2>
                Nome: {props.name}
            </h2>
            <img
                src={props.src}
                alt=""
            />
            <h2>
                Arena: {props.name}
            </h2>
        </div>
    );
}

function Arena(props){
    return(
        <div>
            {React.Children.map(props.children, (arena) => {
                return React.cloneElement(arena, { ...props });
            })}
        </div>
    ); 
}

export {Hero, Enemy, Arena};
