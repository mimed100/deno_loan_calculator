import { Annuity_Loan, Bullet_Loan, Amortized_Loan } from "./src/loan_calculation.ts"

var loan_amount = 500000 // total amount of loan
var period = 5           // amount of payment intervalls, here displayed in years
var interest_rate = 6    // percentage of interest

// annuity loan = constant intervall payment (common)
let annuity_Loan = new Annuity_Loan(loan_amount, period, interest_rate).get_table()
console.table(annuity_Loan)

// bullet loan = pay entire loan amount at the end of the period
let bullet_Loan = new Bullet_Loan(loan_amount, period, interest_rate).get_table()
console.table(bullet_Loan)

// amortized loan = constant amortization with varying intervall payments
let amortized_Loan = new Amortized_Loan(loan_amount, period, interest_rate).get_table()
console.table(amortized_Loan)
