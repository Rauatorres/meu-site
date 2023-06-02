import React from 'react'
import Tecnologia from './Tecnologia'

export default props=>
<section>
    <div>
        <h2>Tecnologias</h2>
        <h3>Conheça as tecnologias que eu utilizo</h3>
    </div>
    <div>
        <div>
            <h3>Front-End</h3>
            <div>
                <Tecnologia img='meu_site.jpg' nome='teste'/>
                <Tecnologia img='meu_site.jpg' nome='teste'/>
                <Tecnologia img='meu_site.jpg' nome='teste'/>
            </div>
        </div>
        <div>
            <h3>Back-End</h3>
            <div>
                <Tecnologia img='meu_site.jpg' nome='teste'/>
                <Tecnologia img='meu_site.jpg' nome='teste'/>
                <Tecnologia img='meu_site.jpg' nome='teste'/>
            </div>
        </div>
        <div>
            <h3>Outras</h3>
            <div>
                <Tecnologia img='meu_site.jpg' nome='teste'/>
                <Tecnologia img='meu_site.jpg' nome='teste'/>
                <Tecnologia img='meu_site.jpg' nome='teste'/>
            </div>
        </div>
    </div>
</section>