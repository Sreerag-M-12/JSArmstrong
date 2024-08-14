function IsArmstrong() {
    let p = document.getElementById('armstrong');
    let prime = true;
    let num = parseInt(document.getElementById('number').value);
    let sum=0;
    let t = num;
    let count = String(num).length;
    while(t!=0){
        let temp = t % 10;
        sum+=Math.pow(temp,count);
        t = Math.trunc(t/10);
    }
    if(num==sum)
        p.innerHTML = num + " is Armstrong number"
    else
        p.innerHTML = num + " is not Armstrong number"

}
