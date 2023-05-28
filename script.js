hat_number = 0;
outfit_number = 0;
object_number = 0;

hats = ["", "images/hat1.png", "images/hat2.png", "images/hat3.png"]
hats_c = hats_c = ["", "glasses", "sun", "grad_hat"] //change

outfits = ["", "images/outfit1.png", "images/outfit2.png", "images/outfit3.png"];
outfit_c = ["", "grad", "pants", "casual"]

objects = ["", "images/object1.png", "images/object2.png", "images/object3.png"];
objects_c = ["", "ball", "bread", "rose"] //change

function alerting() 
{
    alert("More about the Petrs!!!");
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




function change_hat(increment) //circle indexing
{
    index = hat_number + increment
    if(Math.abs(index > hats.length-1) || Math.abs(index) < 0) //wrap around wardrobe
        hat_number = 0;
    else
    {
        if(index < 0)
            hat_number = hats.length + increment;
        else
            hat_number += increment;
    }
    document.getElementById("hat").src = hats[hat_number]
    document.getElementById("hat").className = "hat " + hats_c[hat_number]
}
function back_hat()
{
    change_hat(-1)
}
function forward_hat()
{
    change_hat(1)
}



function change_object(increment) //circle indexing
{
    index = object_number + increment
    if(Math.abs(index > objects.length-1) || Math.abs(index) < 0) //wrap around wardrobe
        object_number = 0;
    else
    {
        if(index < 0)
            object_number = objects.length + increment;
        else
            object_number += increment;
    }
    document.getElementById("object").src = objects[object_number]
    document.getElementById("object").className = "object " + objects_c[object_number]
}
function back_object()
{
    change_object(-1)
}
function forward_object()
{
    change_object(1)
}


function load()
{
    document.getElementById("arrow_left").addEventListener("click", back)
    document.getElementById("arrow_right").addEventListener("click", forward)
    document.getElementById("arrow_left_hat").addEventListener("click", back_hat)
    document.getElementById("arrow_right_hat").addEventListener("click", forward_hat)
    document.getElementById("arrow_left_object").addEventListener("click", back_object)
    document.getElementById("arrow_right_object").addEventListener("click", forward_object)
}
