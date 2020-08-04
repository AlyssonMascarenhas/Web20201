import React from "react";

function Hero(props){
    return(
        <div>
            <p>
               {props.name}
            </p>
            <img src="https://conteudo.imguol.com.br/c/entretenimento/b0/2020/04/24/fallen-mibr-1587737447429_v2_1208x1065.jpg" 
                 alt=""
                 class="img-fluid" alt="Imagem responsiva"
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
            <img src="https://gamehall.com.br/wp-content/uploads/2019/11/coldzera-faze-clan.jpeg" 
                 alt=""
                 class="img-fluid" alt="Imagem responsiva"
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
            <Hero name="FalleN"> </Hero>
            <Enemy name="ColdZera"> </Enemy>
        </div>
    );
}

export default Arena;