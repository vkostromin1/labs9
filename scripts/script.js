function checkFirstName() {
    var first = document.getElementById("firstname").value;
    var regex = /^[a-zA-Z\s]{2,30}$/;

    if (regex.test(first)) {
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Введено правильно";
        return true;
    }
    else {
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Введите от 2 до 30 букв";
        return false;
    }
}

function checkLastName() {
    var last = document.getElementById("lastname").value;
    var regex = /^[a-zA-Z\s]{2,30}$/;

    if (regex.test(last)) { 
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Введено правильно";
        return true;
    }
    else {
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Введите от 2 до 30 букв";
        return false;
    }
}



function checkMail() {
    var mail = document.getElementById("mail").value;
    var regex = /^[a-zA-Z\s\.\,\d\@\ ]{5,30}$/;

    if (regex.test(mail)) { 
        document.getElementById("mail_Check").style.color = "green";
        document.getElementById("mail_Check").innerHTML = "Введено правильно";
        return true;
    }
    else {
        document.getElementById("mail_Check").style.color = "red";
        document.getElementById("mail_Check").innerHTML = "Введено не правильно";
        return false;
    }
}


function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\d{3}-(\d{3})-(\d{2})-\d{2}$/;

    if (regex.test(phone)) { 
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Введено правильно";
        return true;
    }
    else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Введено не правильно";
        return false;
    }
}

function checkCount() {
    var count = document.getElementById("quantity").value;
    var regex = /^[1-4]$/;

    if (regex.test(count)) { 
        document.getElementById("count_Check").style.color = "green";
        document.getElementById("count_Check").innerHTML = "Введено правильно";
        return true;
    }
    else {
        document.getElementById("count_Check").style.color = "red";
        document.getElementById("count_Check").innerHTML = "Введено не правильно";
        return false;
    }
}

function outputData() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var phone = document.getElementById("phone").value;
    var mail = document.getElementById("mail").value;
    var time = document.getElementById("time").value;
    var quantity = document.getElementById("quantity").value;

    if (firstname != "" && lastname != ""  && mail != "" && phone != "" && time != "" && quantity != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Здравствуйте, " + firstname + " " + lastname + "!" + "</br>";
        document.getElementById("summary").innerHTML += "На ваш телефон: +7-" + phone + " и почту: " + mail + ".</br>";
        document.getElementById("summary").innerHTML += "Будет приходить рассылка в " + time + " " + quantity + " раз в месяц";
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").innerHTML = "Пожалуйста заполните все строки";
    }
}


const fadeOut = (el, timeout) => {
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.display = 'none';
    }, timeout);
  };

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    let display = event.currentTarget.style.display
    fadeOut(btn, 1000)
});

const ChangeColor = (el, timeout) => {
    el.style.backgroundColor = 'salmon';
    el.style.color = 'white';
};

const order = document.querySelector('#sendOrder');

order.addEventListener('click', (e) => {
    let display = event.currentTarget.style.display
    ChangeColor(order, 1000)
});