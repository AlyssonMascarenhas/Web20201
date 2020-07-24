import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';

export default class Filho extends Component{
    render(){
        return(
            <div>
                
                <Alert variant="success">
                    Nome: {this.props.nome}
                </Alert>
                <Alert variant="success">
                    Curso: {this.props.curso}
                </Alert>
                <Alert variant="success">
                    Cidade origem: {this.props.origem}
                </Alert>
                {/** 
                <h3>Nome: {this.props.nome}</h3>
                <h3>Curso: {this.props.curso}</h3>
                <h3>Cidade origem: {this.props.origem}</h3>
                */}
            </div>
        );
    }
}