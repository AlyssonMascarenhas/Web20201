import React from 'react';

export default function Filho(props){
    return(
        <div>
            <h3>Nome: {props.nome}</h3>
            <h3>Curso: {props.curso}</h3>
            <h3>Cidade origem: {props.origem}</h3>
        </div>
    );
}