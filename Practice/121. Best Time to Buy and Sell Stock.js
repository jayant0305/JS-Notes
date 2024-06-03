const prices = [7,1,5,3,6,4];

const run=(prices)=>{
    let profit=0;
    let buy=prices[0],sell=prices[0];
    for (const item of prices) {
        let p=0;
        if(item>buy) {
            sell=item;
        }
        if(item<buy){
            buy=item;
            sell=item;
        }
        p=sell-buy;
        profit=Math.max(profit,p);
    }
    return profit;
} 

console.log(run(prices));