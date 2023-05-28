"use client"
import { Component, ReactNode } from "react";

interface CaffeineProps {
    sourceName: string;
    amountOfCaffeine: number;
}

export class CaffeineSource extends Component<CaffeineProps>{
    constructor(props: CaffeineProps){
        super(props)
    }

    render(): ReactNode {
        return (
            <div>
            </div>
        ) 
    }

}