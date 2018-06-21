$(document).ready(function(){
    
    $('.container').addClass('hidden').addClass('visible animated fadeInUp');
    $('.section_title').addClass('hidden').viewportChecker({
        classToAdd:'visible animated fadeInUp'
    });
    $('.text').addClass('hidden').viewportChecker({
        classToAdd:'visible animated fadeInUp'
    });
    $('#footer_text').addClass('visible');
    $('#virtualization').addClass('hidden').viewportChecker({
        classToAdd:'visible animated fadeInUp'
    });  
})
var hour= new Date().getHours();
var hello_words=[ "Доброй ночи","Доброе утро" , "Добрый день" , "Добрый вечер" ]
function get_hello_word(i){
    if (i>=0 && i<=3){
        return 0
    }
    if (i>=3 && i<=11){
        return 1
    }
    if (i>=12 && i<=16){
        return 2
    }
    if (i>=17 && i<=23){
        return 3
    }
}
document.getElementById("hello").innerHTML=hello_words[get_hello_word(hour)]+", Дорогой Админ"