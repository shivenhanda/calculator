export function calculation(display) {
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
        display=display.replace(/(\d+)(sin|cos)\(/g,"$1*$2(")
        return sinCosR(display);
    }
}

function sinCosR(display) {
    try {
        let sin = display.match(/sin\((\d+)\)/);
        if (sin != null) {
            return display.replace(sin[0], Math.sin(sin[1]))
        }
        let cos = display.match(/cos\((\d+)\)/);
        if (cos != null) {
            return display.replace(cos[0], Math.cos(cos[1]))
        }
    }
    catch (error) {
        return "Error"
    }
}
