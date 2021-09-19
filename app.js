var initialprice = document.querySelector('#initial_price');
var quantity = document.querySelector('#quantity');
var currentprice = document.querySelector('#current_price');
var submit_btn = document.querySelector('#submit_btn');
var output_box = document.querySelector('#output_box');

submit_btn.addEventListener('click',submitHandler);

function submitHandler()
{
    var ip = Number(initialprice.value);
    var qty = Number(quantity.value);
    var curr = Number(currentprice.value);
    calculate(ip,qty,curr);
}

function calculate(initial,quantity,current)
{
    if(initial>current)
    {
        var loss= (initial-current)*quantity;
        var lossPercentage = (loss/initial)*100;
        show_output(` you have made loss of ${loss} and loss percentage of ${lossPercentage}% `);
        //output_box.style.color('red');
    }
    else if(initial<current)
    {
        var profit = quantity*(current-initial);
        var profitPercentage = (profit/initial)*100;
        show_output(`you have made profit of ${profit} and profit percentage is ${profitPercentage}%`);
        //output_box.style.color('green');
    }

    else
    {
        show_output("no gain no pain and no pain no gain");
    }

}

function show_output(message)
{
    output_box.innerHTML=message;
}



