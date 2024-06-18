import React from 'react'

import { FaLaptopCode } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

export default props=>
<div className='SobreConteudoBox'>
    <div className='SobreIconeBox'><FaLaptopCode className='SobreIcone'/></div>
    <div className='SobreTextoBox'>
        <h2 className='SobreTexto raleway-Fonte2 '>
            Desenvolvo sites e sistemas web completos,
            desde a interface ao código no servidor.
            Programo em Javascript desde 2019. 
        </h2>
    </div>
    <a className='SobreBotaoCurriculo raleway-Fonte3' href="files/Currículo_Desenvolvedor_FullStack_Raua_Torres.pdf" download="files/Currículo_Desenvolvedor_FullStack_Raua_Torres.pdf">
        baixar meu currículo (<span className='SobreBotaoCurriculoTextoPDF'>PDF</span>) <FaFileDownload className='SobreBotaoIcone'/>
    </a>
</div>