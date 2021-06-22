import React from 'react';
import {ContainerMain, Card, ImagemCard, Conteudo} from '../style-components/components'




export default class Cards extends React.Component{

    render(){
        return(
            <ContainerMain>
    
                {[1,1,1,1,1].map((nome, index) =>{
                    return(
                        <Card key={index} mt={50}>
                            <ImagemCard src={"https://img.elo7.com.br/product/main/32B1BBD/quadro-cerveja-chop-bebidas-bar-churrasco-com-moldura-g002-cervejas-chopp.jpg"}>
                           
                            </ImagemCard>
                            <Conteudo>
                               <h3>nome</h3>
                               <p>conteudo</p>
                               <p>descricao</p>
                               <h3>R$ 4,00</h3>
                            </Conteudo>
                            
                        </Card>

                    );
                })}
            </ContainerMain>
        );
    }

}