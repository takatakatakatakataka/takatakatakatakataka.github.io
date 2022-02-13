$(function() {
    
    let t = 0
    let timer
    let hp = 100
    let restHp = 100
    let img 
    let index 
    let answer 
     
    
    start()
    
    function start(){
      
      restHp  = 100
      $('.replyBtn').hide()
      t= 0
      let panel =[]
      for (let i = 0; i < 16; i++) {
        panel.push(i)
      }

      for (let i = 0; i < 16; i++) {       
        let alter = panel[i] 
        let r = Math.floor(Math.random()*panel.length)
        
        panel[i] = panel[r]
        panel[r] = alter
      }
      
      $('#numbers').html('')
      
      for (let i = 0; i < 16; i++) {
        panelNum = panel[i] +1
        $('#numbers').prepend('<div>' + panelNum+ '</div>')     
      }
      
      $('#damage').hide()
      
       img = ['dog','cat','bird']   
       index = Math.floor(Math.random()*10/4 )
       answer = img[index]

      $('.img img').attr('src', img[index] + '.jpg')
      console.log(answer);

      $("#startScene p").css('opacity',0)

      $('.reply button').remove() 
  } 

$('.replyBtn').click(function(){

  $('.replyBtn').hide()

  for (let i = 0; i < img.length; i++) {
    $('.reply').append('<button>' + img[i]+ '</button>');
  }

  $('.reply button').click(function(){
    if($(this).html() === answer){
      $('.reply button').remove()
      clearInterval(timer)
      $('#startScene').show()
      $(".startBtn").html("CLEAR !!" + "<br>" + "TRY AGAIN");
      count = 0
      let score = $("#timer span").html() * $("#hp span").html()

      $("#startScene p").html("Your Score : " + score);

         if($("#record span").html() < score  || $("#record span").html() == 0){
            
           $("#record span").html(score);
           }


          $(".startBtn").html("CLEAR !!" + "<br>" + "TRY AGAIN");
          $("#startScene").show();
          start();
          $("#startScene p").css('opacity','1');
 
         }else if($(this).html() !== answer){
          restHp = 0
          
          $('#hp span').html(restHp)
          if(restHp <= 0){
              $('#hp span').html(0)
              $("#record span").html(0)
              $(".startBtn").html("GAME OVER !!" + "<br>" + "TRY AGAIN");
              $('#startScene').show()
              $('.reply button').remove()
              $("#startScene p").html("Your Record : " + $("#timer span").html() * $("#hp span").html());
              clearInterval(timer)

              count = 0
              miss = 0
              start()
          
      }
    }
  })
})


    
    $('.startBtn').click(function(){
      $('#timer span').html(30)
      $('.replyBtn').show()
      $('#startScene').hide()
      $('#hp span').html(100)
      let count =  1
      let miss = 0
      
      $('#numbers div').click(function(){
     
        console.log(restHp);
        if(parseInt($(this).html()) === count){
          $(this).addClass('hit')  
            
          count++
        
          $(this).css('background-color','#5092dd')
         

          if(count === 17){
              clearInterval(timer)
              $('#startScene').show()
              $(".startBtn").html("CLEAR !!" + "<br>" + "TRY AGAIN");
              count = 0
      
          $(".startBtn").html("CLEAR!!" + "<br>" + "TRY AGAIN");
       
          $("#startScene").show();
       
          if($("#record span").html() - $("#timer span").html() > 0 || $("#record span").html() == 0){
            
            $("#record span").html($("#timer span").html());
          }
              start()
      
            }
         
          }
          else if(parseInt($(this).html()) !== count){
            
              $(this).css('background-color','red')
              
              miss ++
              hp = restHp 
              let damage =  (miss * 5) + (Math.floor(Math.random() * 10) * miss)
             
               restHp = hp - damage
            $('#hp span').html(restHp)
            $('#damage span').html(damage)
      $('#damage').show()

              if(restHp <= 0){
            $('#hp span').html(0)
            $("#record span").html(0)
                $(".startBtn").html("GAME OVER !!" + "<br>" + "TRY AGAIN");
              $('#startScene').show()
              clearInterval(timer)

              count = 0
              miss = 0
              start()
              
          }
          }
        } )  
        timer =  setInterval(time,1000)
        let rest
      function time (){
        t++
        rest = 30-t
        $('#timer span').html(rest) 
        
        if(rest <= 0){
          $('#timer span').html(0)
          $("#record span").html(0)
          $("#startScene p").html(0)
          $("#startScene p").css('opacity','0')
         
              $(".startBtn").html("GAME OVER !!" + "<br>" + "TRY AGAIN");
            $('#startScene').show()
            clearInterval(timer)
  
            count = 0
            miss = 0
            start()
            
        }
      }
    })
    
  
  });


