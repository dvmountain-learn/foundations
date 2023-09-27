
function best(prices) {
    // Find the minimum price
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      }
    }
  
    // Find the maximum profit
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] - minPrice > profit) {
        profit = prices[i] - minPrice;
      }
    }
  
    return profit;
}

// function maxProfit(prices) {
// 	let profit = 0;
// 	for (let i = 0; i < prices.length - 1; i++) {
// 		for (let j = i + 1; j < prices.length; j++) {
// 			const currentProfit = prices[j] - prices[i];

// 			if (currentProfit > profit) {
// 				profit = currentProfit;
// 			}
// 		}
// 	}

// 	return profit;
// }

// var maxProfit = function (prices) {
// 	let profit = 0;

// 	let stockToBuy = prices[0];

// 	for (let i = 1; i < prices.length; i++) {
// 		if (stockToBuy > prices[i]) {
// 			stockToBuy = prices[i];
// 		}

// 		const currentProfit = prices[i] - stockToBuy;

// 		if (currentProfit > profit) {
// 			profit = currentProfit;
// 		}
// 	}
// 	return profit;
// };

console.log(best([1, 2, 3, 4, 5]))
// 4 - buy at $1, sell at $5

console.log(best([2, 3, 10, 6, 4, 8, 1]))
// 8 - buy at $2, sell at $10

console.log(best([7, 9, 5, 6, 3, 2]))
// 2 - buy at $7, sell at $9

console.log(best([0, 100]))
// 100 - buy at $0, sell at $100