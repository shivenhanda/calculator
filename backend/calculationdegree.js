export function calculationdegree(display) {
    try {
        display.toString();
        if (!/[0-9 a-z A-Z]/.test(display[display.length - 1]) && display[display.length - 1] != ")") {
            return display;
        }
        display = display.replace("^", "**");
        display = display.replace(/\)\s*\(/g, ")*(");
        display = display.replace(/(\d+)\s*\(/g, "$1*(");
        display = display.replace(/\)(\d+)/g, ")*$1");
        display = display.replace(/[\+\-\*\/]$/, "");
        let result=eval(display);
        return isNaN(result)?"undefined":(result=="Infinity")?"undefined":result;
    } catch (error) {
        display = display.replace(/(\d+)(sin|cos)\(/g, "$1*$2(");
        return sinCos(display);
    }
}
function sinCos(display) {
    let sin = display.match(/sin\((\d+)\)/);
    if (sin != null) {
        let sin1 = (Math.sin(parseFloat(sin[1]) * (Math.PI / 180)));
        return display.replace(sin[0], sin1);
    }

    let cos = display.match(/cos\((\d+)\)/);
    if (cos != null) {
        let cos1 = (Math.cos(parseFloat(cos[1]) * (Math.PI / 180)));
        return display.replace(cos[0], cos1)
    }
    else{
        return "Error"
    }
}