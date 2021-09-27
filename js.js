// $(".txt").on("keyup",function(e){
//   if(e.keyCode == 13 && $(".txt").val() != ""){  ////13  means enter button
//     var task = $("<div class='task'></div>").text($(".txt").val());
//     let icon1 = $("<i class='icon-trash-empty'></i>").click(function(){ //przycisk usuwania
//       let p = $(this).parent();
//       p.fadeOut(function(){
//         p.remove();
//       });
//     });
//     let icon2 = $("<i class='icon-ok'></i>").click(function(){  ////przycisk dodawania
//       let p = $(this).parent();
//       p.fadeOut(function(){
//         $(".completed").append(p);
//         p.fadeIn();
//       })
//       $(this).remove();
//     });
//     task.append(icon1, icon2);
//     $(".notcompleted").append(task); ////dodawanie nowych tasków
//     $(".txt").val(""); ////czyszczenie inputa
//   };
// });
let txt = document.querySelector(".txt");
let notCompleted = document.querySelector(".notCompleted");
let completed = document.querySelector(".completed");

txt.addEventListener('keyup', function(e){
  if(e.keyCode == 13 && txt.value != ""){
    let task = document.createElement("div"); //dodawanie tasków
    task.classList.add('task');
    task.innerText = txt.value;
    notCompleted.appendChild(task);
    txt.value = "";

    let icon1 = document.createElement('i');  //dodawanie icony ptaszka
    icon1.classList.add('icon-ok');
    task.appendChild(icon1);

    let icon2 = document.createElement('i');  //dodawanie icony śmietnika
    icon2.classList.add('icon-trash-empty');

    icon1.addEventListener("click", function(){ //funkcja dodawania tasków do 'wykonanych' 
      notCompleted.removeChild(task);
      task.removeChild(icon1);
      completed.appendChild(task);
      task.appendChild(icon2);
    }) 
    icon2.addEventListener("click", function(){ //funkcja usuwania tasków
      completed.removeChild(task);
    })
       
  }
})