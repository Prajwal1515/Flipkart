function loadCoupon(){
  document.getElementsByClassName('coupon')[0].style.display='block';
  document.getElementsByTagName('body').style.opacity='0.6'    
}
const couponClose = () =>{
  document.getElementsByClassName('coupon')[0].style.display='none';
  document.getElementsByTagName('body').style.opacity='1'
  
}
function changeMode(){
  let mybody=document.body;
  mybody.classList.toggle('mydark')
}