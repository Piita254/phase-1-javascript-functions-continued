function saturdayFun(activity) {
    // If no activity is provided, default to "roller-skate"
    if (!activity) {
        activity = "roller-skate";
    }
    return `This Saturday, I want to ${activity}!`;
}

let activity = "roller-skate";
console.log(saturdayFun(activity)); 

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};
console.log(mondayWork());
function wrapAdjective(visualFlair = "*") {
    return function(adjective = "special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
}


const encouragingPromptFunction = wrapAdjective("!!!"); 
console.log(encouragingPromptFunction("amazing")); 
console.log(encouragingPromptFunction()); 
