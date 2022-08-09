import React from 'react'
import './Home.css'
import FUNDO from './img/amazon-fundo.jpg'
import Product from './Product'
import produto1 from './img/Lean-Startup.jpg'
import produto2 from './img/produto2.jpg'
import produto3 from './img/produto3.jpg'
import produto4 from './img/produto4.jpg'
import produto5 from './img/produto5.jpg'
import produto6 from './img/produto6.jpg'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src={FUNDO} alt="" />

                <div className='home__row'>
                    <Product title="The Lean startup, o livro mais interessante do mundo" price={29.99} image={produto1} rating={3}/>
                    <Product id="49538094" title="Uma batedeira que constroi relacionamentos com a comida no longo prazo" price={239.0} rating={4} image={produto2}  />
                </div>

                <div className='home__row'>
                <Product id="564321" title="Notebook Mais incrivel e rapido do faroeste que esse brasil já viu" price={1239.0} rating={5} image={produto3}  />
                <Product id="5611121" title="A melhor Televisão de 42Pol que você já viu, com cores ultra lindas e imagem cristalina" price={652.0} rating={4} image={produto4}  />
                <Product id="54521" title="O fogão que faz a comida agradável para você e sua familia" price={239.0} rating={2} image={produto5}  />
                </div>

                <div className='home__row'>
                <Product id="5625481" title="O violão que foi tocado pelo Paul e pelo John Lennon na sua turne em Sertãozinho" price={999.9} rating={5} image={produto6}  />
                </div>
            </div>
        </div>
    )
}

export default Home