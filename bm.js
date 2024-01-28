function buttonClick() {
    event.preventDefault();
    let gender = parseInt(document.getElementById("gender").value);
    let agevalue = parseInt(document.getElementById("agevalue").value);
    let heightf = parseInt(document.getElementById("height-f").value);
    let heighti = parseInt(document.getElementById("height-i").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if (gender && agevalue && heightf && heighti && weight) {
        let height = (heightf * 0.3048) + (heighti * 0.0254);
        let bmi = weight / (height * height);
        let resultele = document.getElementById("results");
        let category = ' ';

        if (bmi < 18.6) {
            category = 'Underweight';
        } else if (bmi >= 18.6 && bmi < 24.9) {
            category = 'Normal Weight';
        } else if (bmi >= 24.9 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        let msg = " Your BMI : " + bmi.toFixed(2) + "<br> ";
        msg += " Category : " + category;
        resultele.innerHTML = msg;
        resultele.style.borderStyle = "dashed";
        resultele.style.borderColor = "black ";
        resultele.style.borderWidth = "2px ";

    } else {
        alert("Please enter all values");
    }
}
