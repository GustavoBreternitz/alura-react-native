import React, { Fragment } from 'react';
import Header from '../Components/Cesta/Header';
import Body from '../Components/Cesta/Body';

/*
Nesse caso acima, o react está sendo importado sem chaves em quanto o
text está com chaves, isso acontece pois em um único arquivo você pode ter
diversos componentes, se você quiser chamar algum específico, você usa as chaves
caso queira usar o padrão do arquivo você não precisa delas
 */
export default function Cesta() {
    return (
        <Fragment>
            <Header>Detalhes da Cesta</Header>
            <Body />
        </Fragment>
    );
}