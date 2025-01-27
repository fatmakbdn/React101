import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { //function compenent
  //Jsx : {}
  //Javascript kodları burada yazılır.
  let a = 15;
  const firstName = "Alp";

  let vize1 = 64;
  let vize2 = 87;

  let sonuc = true;

  let isimler = [
    "Fatma",
    "Alp",
    "Nur",
    "Dilek"
  ]

  return ( 
    //retun içinde HTML içeriği
    <div>
      {/* Developer Ftma */}
      <p>a değişkeninin değeri : {a}</p>
      <p>Müşterinin adı: {firstName}</p>
      <p>Ortalama : {(vize1 + vize2)/2}</p>

      {
        (vize1 + vize2)/2 >=50 ? <p>Dersten geçtin, tebrikler</p> : <p>Kaldın, geçmiş olsun</p>
      }
      
      {sonuc ?  <p>Ehliyetini alabilirsin</p> : <p>Ehliyetini alamazsın, kaybol</p>}

      {
        isimler.map((isim, index)=> ( 
          <div style={{ //*ilk parantez jsx; ikinci parantez ise css parantezidir.
            backgroundColor: 'orange',
            border: '1px solid black'
          }} key={index}>{isim}</div>
        ))
      }

    </div>
  )
}

export default App //App compenenti dışarı export edilir.
