hat_number = 0;
outfit_number = 0;
object_number = 0;

hats = ["", "test.png", "images/hat1.png", "images/hat2.png", "images/hat3.png"]
outfits = ["", "images/outfit1.png", "images/outfit2.png", "images/outfit3.png"];
objects = ["", "images/object1.png", "images/object2.png", "images/object3.png"];

function hello()
{
    console.log("hi")
}

function change_clothes(increment)
{
    if(outfit_number + increment > outfits.length-1 || outfit_number + increment < 0) //wrap around wardrobe
        outfit_number = 0;
    else
        outfit_number += increment;

    console.log(outfits[outfit_number])
    //dyanmically change image path
    document.getElementById("clothes").innerHTML = `<img id = "clothes" class = "clothes" src = "${outfits[outfit_number]}" width = "200"> `;
}
function back()
{
    change_clothes(-1)
}
function forward()
{
    change_clothes(1)
}


// function change_hat(increment)
// {
//     if(hat_number + increment > hats.length-1 || hat_number + increment < 0) //wrap around wardrobe
//         hat_number = 0;
//     else
//         hat_number += increment;

// }

// function change_object(increment)
// {
//     if(hat_number + increment > hats.length-1 || hat_number + increment < 0) //wrap around wardrobe
//         hat_number = 0;
//     else
//         hat_number += increment;
//}


function load()
{
    document.getElementById("arrow_left").addEventListener("click", back)
    document.getElementById("arrow_right").addEventListener("click", forward)
}