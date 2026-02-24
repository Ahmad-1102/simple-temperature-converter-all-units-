document.querySelector('.js-convert-btn').addEventListener('click', convertTemperature);
function convertTemperature() {
    let showResult= document.querySelector('.js-result');
    let degrees = Number(document.querySelector('.js-degrees-input').value);
    let unit = String(document.querySelector('.js-unit-from-select').value);
    let unitTo = String(document.querySelector('.js-unit-to-select').value);
    showResult.textContent = '';
    let result;
    let C = {
        'F':(degrees*9/5)+32,
        'K':degrees+273.15,
        'R':(degrees+273.15)*9/5,
        'RE':degrees*4/5
    }
    let toC = {
        'F':(degrees-32)*5/9,
        'K':degrees-273.15,
        'R':(degrees/1.8)-273.15,
        'RE':degrees*5/4
    }
    let newDeg = toC[unit];
    let cTo = {
        'F':(newDeg*9/5)+32,
        'K':newDeg+273.15,
        'R':(newDeg+273.15)*9/5,
        'RE':newDeg*4/5
    }
    if (unit === 'C' && ['F', 'K', 'R', 'RE'].includes(unitTo)) {
        result = C[unitTo];
        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
    } else if (unit === unitTo) {
        result = degrees;
        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
    } else if (['F', 'K', 'R', 'RE'].includes(unit) && unitTo === 'C') {
        result = toC[unit];
        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
    } else if (['F', 'K', 'R', 'RE'].includes(unit) && ['F', 'K', 'R', 'RE'].includes(unitTo)) {
        result = cTo[unitTo]
        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
    } else {
        showResult.textContent = 'Please enter valid units (C, F, K, R, RE)';
    }
    return(result);
                }
