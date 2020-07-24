import React, {Component} from 'react';
import Filho from './Filho';

class Pai extends Component{
    render(){
        return(
            <div>
                <Filho
                    nome = 'Alysson Keysson Santos Mascarenhas'
                    curso = 'Engenharia de Software'
                    origem = "Juazeiro do Norte - CE"
                />
            </div>
        );
    }
}

export default Pai;