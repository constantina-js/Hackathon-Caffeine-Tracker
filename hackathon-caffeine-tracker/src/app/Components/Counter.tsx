"use client"
import { Component, ReactNode } from "react";
import css from '../styles.module.css';

interface CounterProps {
    totalCaffeine: number;
    message: string;
}

export class Counter extends Component<CounterProps>{
    constructor(props: CounterProps){
        super(props)
    }

    render(): ReactNode {
        const { totalCaffeine, message } = this.props;
        return (
            <div className={css.counter}>
                <h2>{totalCaffeine}mg of caffeine has been consumed</h2>
                <h3>{message}</h3>
            </div>
        ) 
    }

}