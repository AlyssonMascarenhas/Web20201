import React from 'react';
import Filho from './FIlho';

export default function Pai(){
    return(
        <div>
            <Filho
                nome = 'Alysson Keysson Santos Mascarenhas'
                curso = 'Engenharia de Software'
                origem = 'Juazeiro do Norte - CE'
            />
        </div>
    );
}