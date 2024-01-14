const form = document.querySelector('.textForm');
const display= document.querySelector('.display');
const urlInput= document.querySelector('.image-url');
const topText= document.querySelector('.top-text');
const bottomText= document.querySelector('.bottom-text');


form.addEventListener('submit',function(e){
  e.preventDefault();
  if(!urlInput.value){
    alert('Please put the url for your img!')
  }
  else{
  console.log(e.target);
  const newImgBox = document.createElement('div');
  display.appendChild(newImgBox);
  newImgBox.className= "newImgBox";
  newImgBox.style.backgroundImage=`url(${urlInput.value})`
  console.log(topText)
  const topTextArea =document.createElement('div')
  topTextArea.innerHTML=topText.value;
  topTextArea.className='topTextArea';
  newImgBox.appendChild(topTextArea);
  const botTextArea =document.createElement('div');
  botTextArea.innerHTML=bottomText.value;
  newImgBox.appendChild(botTextArea);
  botTextArea.className='botTextArea';
  // newImgBox.appendChild('bottomText.value')
  urlInput.value=null;
  topText.value=null;
  bottomText.value=null;}
})
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('newImgBox')) {
    event.target.remove();
  }
});
