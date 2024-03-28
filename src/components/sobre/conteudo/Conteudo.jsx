import React from 'react'

import DvrIcon from '@mui/icons-material/Dvr';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default props=>
<div className='SobreConteudoBox'>
    <div className='SobreIconeBox'><DvrIcon className='SobreIcone'/></div>
    <div className='SobreTextoBox'>
        <h2 className='SobreTexto'>
            Desenvolvo sites e sistemas web completos,
            desde a interface ao código no servidor.
            Programo em Javascript desde 2019. 
        </h2>
    </div>
    <a className='SobreBotaoCurriculo' href="files/curriculo.txt" download="currículo.txt">
        baixar meu currículo (<span className='SobreBotaoCurriculoTextoPDF'>PDF</span>) <span className='SobreBotaoIconeBox'><ArrowOutwardIcon className='SobreBotaoIcone'/></span>
    </a>
</div>