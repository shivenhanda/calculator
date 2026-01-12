import { useEffect } from "react";


export default function CalculateResult({ display, action, decimal, setDisplay, setpreviousValue, setLoading }) {
    useEffect(() => {
        const url =
            action === "Radian"
                ? "https://calculator-70if.onrender.com/calculate"
                : "https://calculator-70if.onrender.com/calculatedegree";

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ expression: display })
        })
            .then(res => res.json())
            .then(data => {
                setpreviousValue(display);
                setDisplay(data.result.toFixed(decimal));
            })
            .finally(() => setLoading(false));
    }, []);
    return null;
}