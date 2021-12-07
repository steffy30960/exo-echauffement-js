//exo4

function maFonction (nb1, nb2)
{
  if (nb1 > nb2)
  {
    return "Le premier nombre est plus grand";
  }

  if (nb1 < nb2)
  {
    return "Le premier nombre est plus petit ";
  }
  if (nb1 == nb2)
  {
    return "Les deux nombres sont identiques";
  }
}
console.log(maFonction(2,8));
console.log(maFonction(3,1));
console.log(maFonction(2,2));

