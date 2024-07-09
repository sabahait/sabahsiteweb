import React from 'react'
import Photo13 from '../../assets/website/Photo13.png'
import '../Description1/Description1.css'
import Photo21 from '../../assets/website/Photo21.png';
import Photo15 from '../../assets/website/Photo15.png';
const Description = () => {
  return (
    <div className='Content1'>
        <div className='container1'>
             <table>
            <tr>
                <td className='image2'>
                <img src={Photo13} alt="" />
                </td>
                <td>
                <h1>On vous garantit votre baisse
                <br></br>de facture pendant 10 ans</h1>
                <p>Avec la garantie de conformité d’estimation de production, si votre production solaire annuelle est
                inférieure durant les 10 premières années à 85 % de ce que nous avons prévu lors de notre étude personnalisée,
                on vous rembourse la différence.</p>
                </td>
            </tr>
        </table>
        </div>
        <h1>Descriptif technique détaillé pour la gamme SunPrime</h1>
        <table className='image'>
            <tr>
              
                 <td >
                    <img src={Photo21} alt="" />
                </td>
                <td >
                    <img src={Photo15} alt="" />
                </td>
              
               
            </tr>
        </table>
       
    </div>
  )
}

export default Description
