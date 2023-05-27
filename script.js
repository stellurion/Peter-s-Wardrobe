hat_number = 0;
outfit_number = 0;
object_number = 0;

hats = ["", "test.png", "images/hat1.png", "images/hat2.png", "images/hat3.png"]
hats_c = ["", "clothes sparkle", "clothes pants", "clothes casual"] //change

outfits = ["", "images/outfit1.png", "images/outfit2.png", "images/outfit3.png"];
outfit_c = ["", "clothes sparkle", "clothes pants", "clothes casual"]

objects = ["", "images/object1.png", "images/object2.png", "images/object3.png"];
objects_c = ["", "object sparkle", "clothes pants", "clothes casual"] //change

function hello()
{
    console.log("hi")
}

function change_clothes(increment) //circle indexing
{
    index = outfit_number + increment
    if(Math.abs(index > outfits.length-1) || Math.abs(index) < 0) //wrap around wardrobe
        outfit_number = 0;
    else
    {
        if(index < 0)
            outfit_number = outfits.length + increment;
        else
            outfit_number += increment;
    }
    document.getElementById("clothes").src = outfits[outfit_number]
    document.getElementById("clothes").className = "clothes " + outfit_c[outfit_number]
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