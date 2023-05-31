"use client"
import './styles.css'
import css from './styles.module.css';
import { useState } from 'react';
import { Counter } from './Components/Counter';
import { CaffeineSource } from './Components/CaffeineSource';
import data from './caffeine-sources.json'

export default function Home() {

  const [totalCaffeine, setCaffeine] = useState(0);
  const [message, setMessage] = useState(``)

  let dataRows = [[]];
  let dataRowsIndex = 0;
  let dataCount = 0;
  for(let i=0; i<data.length-1; i++){
    if(dataCount < 3) {
      dataRows[dataRowsIndex].push(data[i])
      dataCount++;
    } else {
      dataRowsIndex++;
      dataRows[dataRowsIndex] = [];
      dataCount = 0;
    }
  }

  const onCaffeineClick = (addedAmount:number) => {
    setCaffeine(totalCaffeine + addedAmount);
    if(totalCaffeine >= 10000){
        setMessage('How are you not dead yet? Do you need me to call 911?');
      } else if (totalCaffeine < 10000 && totalCaffeine >= 1000){
        setMessage('Seriously stop and go get yourself some water');
      } else if(totalCaffeine < 1000 && totalCaffeine >= 400){
        setMessage(`Okay you're good you should stop now`);
    }
    return;
  }

  const resetCounter = () => {
    setCaffeine(0);
    setMessage('');
    return;
  }

  const counterProps = {totalCaffeine, message}

  return (
    <main>
      <h1>Hackathon Caffeine Tracker</h1>
      <h2>Keep track of your caffeine consumption as you hack!</h2>
      <Counter {...counterProps}></Counter>
      <div className={css.buttonContainer}>
        <table>
          <tbody>
          {
            dataRows.map(x => {
            return (
              <tr>
                {x.map((y) => {
                    const caffeineSourceProps = {...y, onClickFunc: onCaffeineClick}
                    return (
                      <td>
                        <CaffeineSource {...caffeineSourceProps}></CaffeineSource>
                      </td>
                    )
                })}
              </tr>
            )
            })
          }
          </tbody>
        </table>
      </div>

      <button className={css.resetButton} onClick={()=> {resetCounter()}}>Reset Counter</button>
    </main>
  )
}
