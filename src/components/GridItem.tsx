import { Level } from '../helpers/imc';
import styles from './Griditem/Griditem.module.css'
import upImage from '../assets/up.png'
import downImage from '../assets/down.png'
 type Props = {
    item:Level,
 }
export const GridItem = ({item}: Props)=>{
    return (
        <div className={styles.main} style={{backgroundColor:item.color }}>
            <div className={styles.gridIcon} >
                {item.icon === 'up' && <img src={upImage} width="30" /> }
                {item.icon === 'down' && <img src={downImage} width="30" /> }
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            <div className={styles.gridInfo}>
                { item.yourImc && 
                <div className={styles.yourImc}> Seu IMC é {item.yourImc} kg/m²,
               </div>

                }
                <>
                IMC está entre <strong>{item.imc[0] }</strong> e <strong>{item.imc[1] }</strong>
                </>
            </div>
            
        </div>
    )
}