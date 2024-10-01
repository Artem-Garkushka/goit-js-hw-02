function checkForSpam(message){
    const delete1 = "sale";
    const delete2 = "spam";
    const normmes = message.toLowerCase();
    if(normmes.includes(delete1) || normmes.includes(delete2)){
        return true;
    }else if(!normmes.includes(delete1) || !normmes.includes(delete2)){
        return false;
    }
}
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));