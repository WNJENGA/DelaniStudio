//click effect
$('.work').click(function() {
    var index=($('.work').index(this));
    $('.text')[index].classList.toggle('show');
    $('.thumbnail')[index].classList.toggle('hide');              
});
//hover effect
$('.portfolio a').hover(
    function (){
        index=$('.portfolio a').index($(this));
        $(this).addClass('hover')
        $('.description')[index].style.opacity=1;        
    },
        function (){
        index=$('.portfolio a').index($(this));
        $('.description')[index].style.opacity=0;
        $(this).removeClass('hover')                                    
    }
)
//to display alert message when one is sescribed
$('#submit').click(function(event){
    event.preventDefault();
    $('.confirmation').css('display','block') 
})

$('#close').click(function(event){$('.confirmation').css('display','none')})

//scrolling effects
const scrollOffset = 100; 
const scrollElement = document.querySelectorAll('.row');
const elementInView = (element, offset = 0) => {
    const elementTop = element.getBoundingClientRect().top;
    return (elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset));
};
const handleScrollAnimation = () =>{
    scrollElement.forEach((e,i)=>{
        if (elementInView(e, scrollOffset)) {e.classList.add('scrolled');;
        } else {e.classList.remove('scrolled');}                
    });
    
  }
window.addEventListener('scroll', () => { handleScrollAnimation();})