function  Temperaturee(celsius) {
    return (celsius * 9/5) + 32;
}

const temp_1 = Temperaturee(104); 

console.log(temp_1); 

function Numberflats(nomerKvartiry, kvartiryNaEtazh, etazhiNaPodjezd) {
    // Количество квартир в одном подъезде
    const kvartiryNaPodjezd = kvartiryNaEtazh * etazhiNaPodjezd;
    
    // Номер подъезда
    const podjezd = Math.ceil(nomerKvartiry / kvartiryNaPodjezd);
    
    // Номер квартиры в текущем подъезде
    const kvartiraVTekushemPodjezde = nomerKvartiry - (podjezd - 1) * kvartiryNaPodjezd;
    
    // Номер этажа
    const etazh = Math.ceil(kvartiraVTekushemPodjezde / kvartiryNaEtazh);

    return {
        podjezd: podjezd,
        etazh: etazh
    };
}

    
console.log(Numberflats(21, 4, 5));     
console.log(Numberflats(60, 4, 5));     
 
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Функция для запроса у пользователя информации и формирования учетных данных
function credentials() {
    // Запрос имени, фамилии и отчества у пользователя
    let name = prompt("Введите ваше имя:");
    let surname = prompt("Введите вашу фамилию:");
    let fatherName = prompt("Введите ваше отчество:");

    // Преобразование первой буквы каждого слова в заглавную
    name = capitalize(name);
    surname = capitalize(surname);
    fatherName = capitalize(fatherName);

    // Формирование полного имени
    let fullName = `${surname} ${name} ${fatherName}`;

    // Возвращение объекта с учетными данными
    return {
        name: name,
        surname: surname,
        fatherName: fatherName,
        fullName: fullName
    };
}

let userCredentials = credentials();
console.log(userCredentials);

const promptOr = (promptText, defaultValue) => 
    (result => result === null || result === "" ? defaultValue : result)(prompt(promptText, defaultValue));

let userInput = promptOr("Введите текст:", "Значение по умолчанию");
console.log(userInput);



function loginAndPassword(correctLogin, correctPassword) {

    let userLogin = prompt("Введите логин:");
    
    if (userLogin === correctLogin) {
    
        let userPassword = prompt("Введите пароль:");
        
    
        if (userPassword === correctPassword) {
            
            return true;
        } else {
            
            return false;
        }
    } else {
        
        return false;
    }
}


let isAuthenticated = loginAndPassword("admin", "cucu");


console.log(isAuthenticated);