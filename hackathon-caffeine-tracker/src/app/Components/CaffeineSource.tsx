"use client"
import { Component, ReactNode } from "react";
import css from '../styles.module.css';
import Image from 'next/image';

interface CaffeineProps {
    name: string;
    amount: number;
    servingAmount: number;
    onClickFunc: Function;
}

export class CaffeineSource extends Component<CaffeineProps>{
    constructor(props: CaffeineProps){
        super(props);
    }

    render(): ReactNode {
        const { name, amount, servingAmount, onClickFunc } = this.props;
        return (

            <div className={css.caffeineSource} id={name}>
                <Image src={'/../public/caffeine-molecule.jpg'} width={140} height={140}/>
                <span>{name}</span>
                <br/>
                <span>{amount} / {servingAmount}mg</span>
                <button onClick={() => {onClickFunc(amount)}}>Select</button>
            </div>
        ) 
    }

}