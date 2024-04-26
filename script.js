function toggleMode(){
  const html = document.documentElement
   html.classList.toggle('light')
  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // }else{
  //   html.classList.add('light')

  // }
  //pegar tag img
  const img = document.querySelector('#profile img')
//substituir a imagem.
  if (html.classList.contains('light')) {
  img.setAttribute('src','./assets/avatar-light.png')

}else{
  img.setAttribute('src','./assets/avatar.png')
}
  //se tiver light mode add image light
  //se tiver sem lgiht mode manter imagem normal.



}
