//Instructions: Given the following data, implement a function that calculates the total sales and total tax, grouped by company.
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
  var resultsObj = {};
  for (var j = 0; j < salesData.length; j++) {
    var currentComp = salesData[j];
    var currCompName = currentComp.name;
    var currCompProv = currentComp.province;
    var totalSales = 0;
    var totalTaxes = 0;
    if (currCompName in resultsObj) {
      totalSales = calcSales(currentComp);
      resultsObj[currCompName].totalSales += totalSales;
      resultsObj[currCompName].totalTaxes += totalSales * (taxRates[currCompProv]);
    } else {
      totalSales += calcSales(currentComp);
      totalTaxes = totalSales * (taxRates[currCompProv]);
      resultsObj[currentComp.name] = { totalSales: totalSales, totalTaxes: totalTaxes };
    }
  }
  return resultsObj;
}

function calcSales(currentComp) {
  var compSales = 0;
  for (var i = 0; i < currentComp.sales.length; i++) {
    compSales += currentComp.sales[i];
  }
  return compSales;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
