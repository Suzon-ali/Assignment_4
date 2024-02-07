
function calculateMoney(ticketSale) {
    let netEarning = 0;

    const totalTicketPrice  = 120 * ticketSale;
    const darowanKhoroch = 500;
    const otherCost = 8 * 50 ;

    netEarning = totalTicketPrice - (darowanKhoroch + otherCost);
    if(ticketSale >= 0){
        return netEarning
    }else{
        return "Invalid Number"
    }
}




function checkName(name) {
    const lastGoodLetters = ["A", "y", "i", "e", "o", "u", "w"];
    if (typeof name === "string") {
        const strArray = name.split('');
        const lastLetter = strArray[strArray.length - 1].toLowerCase();

        for (let i = 0; i < lastGoodLetters.length; i++) {
            const theLetter = lastGoodLetters[i].toLowerCase();
            if (lastLetter === theLetter ) {
                return "Good Name";
            } 
        }
        return "Bad Name";
        
    } else {
        return "invalid";
    }
}







function deleteInvalids(array) {
    let numberArray = [];
    if(Array.isArray(array)){
        for(let i = 0; i <= array.length; i++){
            if(typeof array[i] === "number") {
                if(!isNaN(array[i])){
                    numberArray.push(array[i]);
                }
            }
        }
        return numberArray;
    }else{
        return "Invalid Array"
    }
}





function password(obj) {
    let password = '';
    let property = 0 ;
    for(let p in obj){
        if(obj.hasOwnProperty(p)){
            property ++
        }
    }

    if(property === 3){
        let birthYearString = obj.birthYear.toString();
        let birthYearStr = birthYearString.split('');
        if(birthYearStr.length === 4){
            let website = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
            let name = obj.name;
            let birthYear = obj.birthYear;
            password = website.concat("#") + name.concat('@')+birthYear;
        }else{
            return "invalid"
        }
        
    }else{
        return "invalid"
    }

    return password
}







function monthlySavings(arr , livingCost) {

    let totalLowPayment = 0;
    let totalHighPayment = 0;
    for(let i=0; i <= arr.length; i++){
        if(arr[i] < 3000){
            totalLowPayment += arr[i]
        }
        if(arr[i] >= 3000){
            totalHighPayment += arr[i]
        }
    } 

    const totalTax = totalHighPayment / 100 * 20;
    const netHighPayment =  totalHighPayment - totalTax ;
    const totalNetPayment = totalLowPayment + netHighPayment;
    const totalSavings = totalNetPayment - livingCost ;

    if(!Array.isArray(arr) && livingCost !== "number"){
        return "invalid input" 
    } else if(totalSavings >= 0){
        return totalSavings;
    }else{
        return "earn more"
    }

}
