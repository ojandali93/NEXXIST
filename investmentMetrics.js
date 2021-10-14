export function calculateCashFlow(home){
    const currentItem = document.getElementsByClassName(`cash-flow-value ${home['mls']}`)
    let cashFlowMortgage = parseInt(home['total_revenue']) - parseInt(home['monthly_mortgage'])
    console.log(cashFlowMortgage)
    let cashFlowNoMortgage = parseInt(home['total_revenue']) - parseInt(home['monthly_no_mortgage'])
    console.log(cashFlowNoMortgage)
    console.log(currentItem[0])
    currentItem[0].innerHTML = `$${cashFlowMortgage} / $${cashFlowNoMortgage}`
}