function mean(list) {
    var total = 0, i;
    for (i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total / list.length;
}


var e = function (itteration) {
  

 
    var steps = [];

    for(var i = 1; i <= itteration; i++){
        var x = 0;
        var step = 0;

        while (x < 1){
            x += Math.random();
            step++;
        }

        steps.push(step);
    }

    return mean(steps);

}


var showResult = function (n) {
    var n = parseInt(document.getElementById('n').value);

    document.getElementById('showResult').innerHTML = e(n).toFixed(6);

    document.getElementById('hide').style.display = 'block';
}

var enter = function (e) {

    if (e.keyCode === 13){
        showResult();
    }
}