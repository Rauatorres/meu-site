export default (areaTecnologiaTamanhoMaximo, areaTecnologiaTamanhoReduzido, areaTecnologiasStyle, setAreaTecnologiasStyle)=>{
    if(areaTecnologiasStyle == areaTecnologiaTamanhoReduzido){
        setAreaTecnologiasStyle(areaTecnologiaTamanhoMaximo)
    }else{
        setAreaTecnologiasStyle(areaTecnologiaTamanhoReduzido)
    }
}