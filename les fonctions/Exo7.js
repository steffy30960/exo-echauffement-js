//exo7

function maFonction(Age, Genre)
{
    if (Genre == "femme" && Age < 18)
    {
    return "Vous êtes une femme et vous êtes mineur";
    }
    if (Genre == "femme" && Age >= 18)
    {
    return "Vous êtes une femme et vous êtes majeur";
    }
    if (Genre== "homme" && Age < 18)
    {
    return "Vous êtes un homme et vouis êtes mineur";
    }
    if (Genre == "homme" && Age >= 18)
    {
    return "Vous êtes un homme et vous êtes majeur";
    }
}
console.log(maFonction(12, "femme"));
console.log(maFonction(37, "femme"));
console.log(maFonction(16, "homme"));
console.log(maFonction(56, "homme"));