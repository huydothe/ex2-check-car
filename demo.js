const fixMoney = 5000;

function checkMoney(money) {
    if(money >= fixMoney) {
        return true;
    } else {
        return false;
    }
}

function timeOut(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             test()
        }, 100)
    })
}
function myFunction(){
    timeOut().then((data)=> {
        document.getElementById("result").innerHTML = data;
    })
}



async function test(){
    let inputMoney = +document.getElementById("money").value
    let check = checkMoney(inputMoney);
    if(check){
          document.getElementById("result").innerHTML = 'Enough';


    }else  {
        // resolve("not enough");
        await console.log(123)
    }
}