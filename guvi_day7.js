
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();

request.onload=function()
{
    var result=JSON.parse(request.response);
    console.log(result);
//Get all the countries from the Asia continent /region using the Filter function
  let res=result.filter((e)=>e.region=="Asia");
  console.log(res);
  //Get all the countries with a population of less than 2 lakhs using Filter function
  let res1=result.filter((e)=>e.population<200000);
  console.log(res1);
  //Print the following details name, capital, flag using forEach function
  result.forEach(myFun);
  function myFun(item)
  {
     console.log(`${item.name} ${item.capital} ${item.flag}`)
  }
  //Print the total population of countries using reduce function
    let last=result.map((e)=>e.population).reduce((previousValue, currentValue) => previousValue +currentValue,0)
    console.log(last);
   
}

