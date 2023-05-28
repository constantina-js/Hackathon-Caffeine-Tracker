"use client"
import { Component, ReactNode } from "react";

interface ButtonProps {
    sourceName: string;
    amountOfCaffeine: number;
}

export class Button extends Component<ButtonProps>{
    constructor(props: ButtonProps){
        super(props)
    }

    render(): ReactNode {
        return (
            <button></button>
        ) 
    }

}