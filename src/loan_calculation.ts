import {round} from "https://deno.land/x/math@v1.1.0/mod.ts";

export class Bullet_Loan {
    amount: number;
    period:number;
    interest_rate:number;
    constructor(amount: number, period: number, interest_rate: number){
        this.amount = amount
        this.period = period
        this.interest_rate = interest_rate
    }  
    get_table(){
        var residual_debt = this.amount
        var interest_cost = parseFloat(round(residual_debt*(this.interest_rate/100),2))
        var payment = interest_cost
        var amortization = 0

        var interest_cost_sum = 0
        var payment_sum = 0

        var table = []
        table.push(["Period", "Residual Debt", "Interest Cost", "Amortization", "Annuity Payment"])

        for(let i=1; i <= this.period; i++){
            table.push(["Year "+i, residual_debt, interest_cost, amortization, payment])
            interest_cost_sum += interest_cost
            payment_sum += payment
            if (i == this.period-1) {
                payment = residual_debt+interest_cost
                amortization = this.amount
                table.push(["Year "+(i+1), residual_debt, interest_cost, amortization, payment])
                interest_cost_sum += interest_cost
                payment_sum += payment
                break
            }
        }     
        console.log("Total interest costs: ", parseFloat(round(interest_cost_sum,2)))
        return table
    }
}

export class Annuity_Loan {
    amount: number;
    period:number;
    interest_rate:number;
    constructor(amount: number, period: number, interest_rate: number){
        this.amount = amount
        this.period = period
        this.interest_rate = interest_rate
    }
    get_table(){
        var residual_debt = this.amount
        var interest_cost = this.amount*(this.interest_rate/100)
        var payment = parseFloat(round(this.amount*(((this.interest_rate*0.01)*(((this.interest_rate*0.01)+1))**this.period)/(((1+(this.interest_rate*0.01))**this.period)-1)),2))
        var amortization = payment-interest_cost
        var interest_cost_sum = 0
        var table = []
        table.push(["Period", "Residual Debt", "Interest Cost", "Amortization", "Annuity Payment"])

        for(let i=1; i <= this.period; i++){
            table.push(["Year "+i, residual_debt, interest_cost, amortization, payment])
            interest_cost_sum += interest_cost

            residual_debt = parseFloat(round(residual_debt- amortization,2))
            interest_cost = parseFloat(round(residual_debt*(this.interest_rate/100),2))
            amortization = parseFloat(round(payment - interest_cost,2))
        }
        console.log("Total interest_cost: ", parseFloat(round(interest_cost_sum,2)))
        return table
    }
}

export class Amortized_Loan {
    amount: number;
    period:number;
    interest_rate:number;
    constructor(amount: number, period: number, interest_rate: number){
        this.amount = amount
        this.period = period
        this.interest_rate = interest_rate
    }
    get_table(){
        var residual_debt = this.amount
        var interest_cost = parseFloat(round(this.amount*(this.interest_rate/100),2))
        var amortization = parseFloat(round(this.amount/this.period,2))
        var payment = parseFloat(round(interest_cost + amortization,2))
        var interest_cost_sum = 0
        var table = []
        table.push(["Period", "Residual Debt", "Interest Cost", "Amortization", "Annuity Payment"])

        for(let i=1; i <= this.period; i++){
            table.push(["Year "+i, residual_debt, interest_cost, amortization, payment])
            interest_cost_sum += interest_cost

            residual_debt -= amortization
            interest_cost = parseFloat(round(residual_debt*(this.interest_rate/100),2))
            payment = interest_cost + amortization
        }
        console.log("Total interest_cost: ", parseFloat(round(interest_cost_sum,2)))
        return console.table(table)
    }
}
