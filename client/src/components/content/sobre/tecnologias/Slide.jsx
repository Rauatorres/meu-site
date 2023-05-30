import React, {useState} from 'react'

export default props=>{
const [slideNum, setSlideNum] = useState(0)

var slideList = props.lista.map(tecnologia=>{
  let img_path = `http://localhost:3001/tecnologias_img/${tecnologia.img}`
  return (
    <div key={tecnologia._id} className='Slide'>
      <img src={img_path} className='TecnologiaImg'/>
      <h3>{tecnologia.titulo}</h3>
    </div>
  )
})

function proximo(){
  if(slideNum != slideList.length - 1){
    setSlideNum(slideNum + 1)
  }else{
    setSlideNum(0)
  }
}
function anterior(){
  if(slideNum != 0){
    setSlideNum(slideNum - 1)
  }else{
    setSlideNum(slideList.length - 1)
  }
}

return (
  <div className='TecnologiasSlide'>
    <button onClick={anterior} className='BotaoAnterior'>Anterior</button>
    <div className='SlideArea'>
      {slideList[slideNum]}
    </div>
    <button onClick={proximo} className='botaoProximo'>Próximo</button>
  </div>
)
}