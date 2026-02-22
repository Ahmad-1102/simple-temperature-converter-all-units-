function convertTemperature() {
                    let result;
                    let showResult= document.querySelector('.js-result');
                    let degrees = Number(document.querySelector('.js-degrees-input').value);
                    let unit = String(document.querySelector('.js-unit-from-input').value.toUpperCase());
                    let unitTo = String(document.querySelector('.js-unit-to-input').value.toUpperCase());
                    showResult.textContent = '';
                    if (unit === 'C' && unitTo === 'F') {
                        result = (degrees*9/5)+32;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'C' && unitTo === 'K') {
                        result = degrees+273.15;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'C' && unitTo === 'R') {
                        result = (degrees+273.15)*9/5;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'C' && unitTo === 'RE') {
                        result = degrees*4/5;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'F' && unitTo === 'C') {
                        result = (degrees-32)*5/9;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'F' && unitTo === 'K') {
                        result = 5/9*(degrees-32)+273.15;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'F' && unitTo === 'R') {
                        result = degrees+459.67;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'F' && unitTo === 'RE') {
                        result = 4/9*(degrees-32);
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'K' && unitTo === 'C') {
                        result = degrees-273.15;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'K' && unitTo === 'F') {
                        result = 9/5*(degrees-273.15)+32;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'K' && unitTo === 'R') {
                        result = degrees*9/5;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'K' && unitTo === 'RE') {
                        result = (degrees-273.15)*4/5;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'R' && unitTo === 'C') {
                        result = (degrees/1.8)-273.15;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'R' && unitTo === 'F') {
                        result = degrees-459.67;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'R' && unitTo === 'K') {
                        result = degrees*5/9;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'R' && unitTo === 'RE') {
                        result = 4/9*(degrees-491.67);
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'RE' && unitTo === 'C') {
                        result = degrees*5/4;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'RE' && unitTo === 'F') {
                        result = 9/4*degrees+32;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'RE' && unitTo === 'K') {
                        result = degrees*5/4+273.15;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === 'RE' && unitTo === 'R') {
                        result = degrees*9/4+491.67;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (unit === unitTo) {
                        result = degrees;
                        showResult.textContent = `${result.toFixed(2)} °${unitTo}`;
                    } else if (!['C', 'F', 'K', 'R', 'RE'].includes(unit.toUpperCase()) || !['C', 'F', 'K', 'R', 'RE'].includes(unitTo.toUpperCase())) {
                        showResult.textContent = `Please enter valid units (C, F, K, R, RE)`;
                    } else if (!['C', 'F', 'K', 'R', 'RE'].includes(unit.toUpperCase()) && !['C', 'F', 'K', 'R', 'RE'].includes(unitTo.toUpperCase())) {
                        showResult.textContent = `Please enter valid units (C, F, K, R, RE)`;
                    } else {
                        showResult.textContent = 'Invalid unit';
                        return('Invalid unit');
                    }
                    return(result);
                }