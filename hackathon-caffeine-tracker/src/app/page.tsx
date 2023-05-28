"use client"
import './styles.css'
import css from './styles.module.css';
import { Counter } from './Components/Counter';
import { CaffeineSource } from './Components/CaffeineSource';
import data from './caffeine-sources.json'

export default function Home() {

  let counterProps = {
    totalCaffeine: 0,
    message:''
  };

  

  return (
    <main>
      <h1>Hackathon Caffeine Tracker</h1>
      <h2>Keep track of your caffeine consumption as you hack!</h2>
      <Counter {...counterProps}></Counter>
      <div className={css.buttonContainer}>

      </div>
    </main>
  )
}
