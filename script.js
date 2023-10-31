let request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    let result = JSON.parse(request.response);
    console.log(result);


    //print all countires from Asia continent
    console.log("**********************Asia continent countries***************************");
    let res =result.filter((res)=>res.region=="Asia");
    
   for(let i of res){
        console.log(`country name: ${i.name.common}`);
    } 
    console.log("****************country name less than 2 lakhs*************************");
    let pop =result.filter((ele)=>ele.population<200000);
    for(let j of res){
        console.log(`country name :${j.name.common}  population :${j.population}`);
    }
    console.log("**************************flag country name and its capital************************")
    //name , capital,flag print using forEach
        res.forEach(element => {
            if(element.capital==undefined)
            {
                element.capital="0";
            }
            console.log(`${element.flag} ${element.name.common} ==> ${element.capital[0]}`);
        });

     //Total population of Asia countires
     console.log("populations")
     let total1 = result.reduce((acc,cv)=>{
        return cv.population + (typeof acc === "object" ? acc.mark : acc);
     },0);
     let total = res.reduce((acc,cv)=>{
        return cv.population + (typeof acc === "object" ? acc.mark : acc);
     },0);
     console.log(`all countries Total populatio is : ${total1}`);
     console.log(`Total populatio of Asia countires is : ${total}`);

    // print country which uses us dollars
    console.log("********************filter which country currencie is us dollar******************************")
     let currncy =result.filter((ele)=>{
        const{currencies={}}=ele;
        return Object.keys(currencies).includes("USD");
     });
     console.log(currncy);
}

