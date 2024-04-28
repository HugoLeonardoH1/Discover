function toggleMode(){
  const html = document.documentElement
   html.classList.toggle('light')

  /*pegar tag img*/
  const img = document.querySelector('#profile img')
/*substituir a imagem.*/
  if (html.classList.contains('light')) {
  img.setAttribute('src','./assets/Avatar-lightHugo.png')

}else{
  img.setAttribute('src','./assets/Avatar-dark.png')
}
  /*se tiver light mode add image light*/
  /*se tiver sem lgiht mode manter imagem normal.*/



}
