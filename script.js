function darkmode() {
    let bd = document.body;
    let nav = document.getElementsByClassName("navbar");
    let navlnk = document.getElementsByClassName("nav-link");
    let tx = document.getElementsByClassName("text-box");
    let im = document.getElementsByClassName("logo");
    let nbt = document.getElementsByClassName("navbar-toggler");
    let nbi = document.getElementsByClassName("navbar-toggler-icon");
    let ft = document.getElementsByClassName("wrapper");
    let pop = document.getElementsByClassName("popup");
    bd.classList.toggle("darkmode");
    for (let i =0; i< nav.length; i++){
        nav[i].classList.toggle("darkmodenav");
        nav[i].classList.toggle("bg-light")
    }
    for (let i =0; i< navlnk.length; i++){
        navlnk[i].classList.toggle("darkmodenav");
    }
    for (let i =0; i< tx.length; i++){
        tx[i].classList.toggle("darkmodetxt");
    }
    for (let i =0; i< im.length; i++){
        im[i].classList.toggle("darkmodeimg");
    }
    for (let i =0; i< nbt.length; i++){
        nbt[i].classList.toggle("darkmodenbt");
    }
    for (let i =0; i< nbi.length; i++){
        nbi[i].classList.toggle("darkmodenbi");
    }
    for (let i =0; i< ft.length; i++){
        ft[i].classList.toggle("darkmodeft");
    }
    for (let i =0; i< pop.length; i++){
        pop[i].classList.toggle("darkmodepop");
    }
}

function popform(){
    document.getElementById("popupform").style.display="block";
}

function closeform(){
    document.getElementById("popupform").style.display="none";
}

function sendform(){
    let from = document.getElementById("first").value + " " + document.getElementById("last").value;
    let mail = document.getElementById("mail").value;
    let tel = document.getElementById("tel").value;
    let mess = document.getElementById("message").value;
    mess = mess.replace('\n','%0D%0A');
    let subject = "Reach Out From " + from;
    let body = mess +"%0D%0AMy email is:" + mail
        + "%0D%0AMy phone number is: " + tel +"%0D%0ABest Regards, %0D%0A" + from;
    window.open('mailto:bachar.maya@gmail.com?subject='+subject+'&body='+body);
    let form = document.getElementById("myForm");
    form.reset();
    closeform();
}

function messageok(form){
    if (form.message.value.length < 5){
        alert("Please Write more that 5 characters");
        return false;
    } else return true;
}