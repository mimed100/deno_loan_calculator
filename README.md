## Usage example
Deno module to get information about loan payments of different loan types. 


```js
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
```

### Test via commandline
```js
deno run --allow-net "https://deno.land/x/loan_calculator@v1.0.0/test.ts"
```
### Output
![alt text](/output_img.png)


## Thank you for the helpful modules that were used in this module!
### https://deno.land/x/math@v1.1.0

