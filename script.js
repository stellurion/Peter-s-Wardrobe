outfit_number = 0;

hats = [];
wardrobe = ["images/outfit1.png", "images/hat1.png"]; //save special coordinates as well

function change_clothes(increment)
{
    console.log("here")
    if(outfit_number + increment > wardrobe.length-1 || outfit_number + increment < 0) //wrap around wardrobe
        outfit_number = 0;
    else
        outfit_number += increment;
    
    document.getElementById("clothes").innerHTML = `<img src = ${wardrobe[outfit_number]} id = "clothes">`;
}

function load()
{
    document.getElementById("arrow_right").addEventListener("click", change_clothes(1))
    document.getElementById("arrow_left").addEventListener("click", change_clothes(-1))
}