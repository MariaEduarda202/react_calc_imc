import { useState } from 'react';
import styles from './App.module.css'
import PoweredImage from './assets/powered.png'
import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';
import leftArrowImage from './assets/leftarrow.png'
const App =()=> {
  
  const [heightField, setHeightField] = useState<number >(0)
  const [weightField, setWeightField] = useState<number >(0)
  const [showItem, setShowItem]= useState<Level|null> (null)
  const handleBackButton =()=>{
    setShowItem(null);
    setHeightField(0);
    setWeightField(0);
  }
  const handleCalculate = () => {
      if(heightField && weightField){
         setShowItem(calculateImc(heightField,weightField))
      } else{
        alert ("Digite todos os campos")
      }
  }
  return (
    <div className={styles.main}>
     <header>
      <div className={styles.headerConteiner} >
          <img src={PoweredImage} alt=""  width={150}/>
      </div>

      </header> 
       <div className={styles.conteiner}>
        <div className={styles.leftSide} >
          <h1> Calcule seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, 
            parâmetro adotado pela Organização Mundial de Saúde para calcular
             o peso ideal de cada pessoa</p>

        <input
        type='number'
        placeholder='Digite sua altura'
        value={heightField > 0 ? heightField : "" }
        onChange={e=> setHeightField(parseFloat(e.target.value))  }
        disabled= {showItem ? true : false}
         
        />
          <input
        type='number'
        placeholder='Digite seu peso'
        value={weightField> 0 ? weightField : "" }
        onChange={e=> setWeightField(parseFloat(e.target.value))}
        disabled= {showItem ? true : false}
       
        />
         <button onClick={handleCalculate}
          disabled= {showItem ? true : false}> Calcular </button>
        </div>
       
        <div className={styles.rightSide} >
        {!showItem && 
         <div className={styles.grid}>
        
          {levels.map((item, key)=>(
           <GridItem  key={key} item={item} />
          )) }
        
         </div>
        } { showItem && 
          <div className={styles.rightBig}>
             <div className={styles.rightArrow}
             onClick={handleBackButton}>
              <img src={ leftArrowImage}alt=""  width={25}/>
             </div>
             <GridItem item={showItem}/>
          </div>        }
        </div>

       </div>
  
  
  
  
  </div>
    
  );
}

export default App;
