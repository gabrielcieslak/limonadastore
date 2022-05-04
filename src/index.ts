

type Order = {
    bill_value: number
    position_in_line: number
    requested_lemonades: number
}

export default class orderLemonade {
    price = 5
    exchange_enabled: boolean
    cashier: number[]

    constructor(){
        this.cashier = []
        this.exchange_enabled = false;
    }

    provideExchange(orders: Order[]): number[] | null{
        this.exchange_enabled = false
        if(orders.length === 0){
            return this.cashier
        }
        orders.sort((first_element,second_element)=>{
            return first_element.position_in_line - second_element.position_in_line
        })

        const order = orders[0]

        const exchange = Math.abs(order.bill_value)-(this.price * order.requested_lemonades)

        if(exchange> 0&& this.cashier.length === 0){
            return null
        }

        if (exchange > 0){
            this.findExchange(exchange)
        }
        if (!this.exchange_enabled && exchange > 0){
            return null
        }
    }

    private findExchange(exchange: number) {
        this.cashier.sort((first_element,second_element)=>second_element - first_element)
        let money_paid: number[] = []
        for (const value of this.cashier){
            if(exchange === 0){
                break
            }
            const rest_value = exchange - value
            if(rest_value > 0){
                exchange = rest_value
                money_paid.push(value)
            } else if (rest_value === 0){
                money_paid.push(value)
                this.exchange_enabled = true
            }            
        }
        this.cleanCashier(money_paid)
    }
    
    private cleanCashier(cash_used: number[]).void{
        const remove_value = this.cashier
            .findIndex(value => value === cash_used[0])
        this.cashier.splice(remove_value)
        cash_used.shift()
        if(cash_used.length ===0){
            return
        }
        return this.cleanCashier(cash_used)
    }
}

