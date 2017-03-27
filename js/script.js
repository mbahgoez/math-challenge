$(document).ready(function(){

    var score = 0;
    var wrong = 0;
    var jawaban = null;
    var ans = null;

    var setResult = function(){
        $("span.score").text(score);
        $("span.wrong").text(wrong);

        $("table td input").val("");
    }

    setResult();


    var questionTambah = function(){
        var a = Math.random();
        var b = Math.random();
        var nilaia = Math.round(a*10);
        var nilaib = Math.round(b*10);
        $(".soal").text(nilaia+"+"+nilaib+"= ?");
        ans = nilaia+nilaib;
    }

    var questionKurang = function(){
        var a = Math.random();
        var b = Math.random();
        var nilaia = Math.round(a*10);
        var nilaib = Math.round(b*10);
        $(".soal").text(nilaia+"-"+nilaib+"= ?");
        ans = nilaia-nilaib;
    }

    var questionKali = function(){
        var a = Math.random();
        var b = Math.random();
        var nilaia = Math.round(a*10);
        var nilaib = Math.round(b*10);
        $(".soal").text(nilaia+"x"+nilaib+"= ?");
        ans = nilaia*nilaib;
    }

    var questionBagi = function(){
        var a = Math.random();
        var b = Math.random();
        var nilaia = Math.round(a*10);
        var nilaib = Math.round(b*10);
        $(".soal").text(nilaia+":"+nilaib+"= ?");
        ans = nilaia/nilaib;
    }


    var questionPangkat = function(){
        var a = Math.random();
        var b = Math.random();
        var nilaia = Math.round(a*10);
        var nilaib = Math.round(b*10);
        $(".soal").html(nilaia+"<sup>"+nilaib+"</sup>= ?");
        ans = Math.pow(nilaia, nilaib);
    }

    questionPangkat();


    $("form").submit(function(e){
    e.preventDefault();
    var jawaban = $("form table input").val();

    if(jawaban == ans){
        score++;
        console.log(score);
    } else {
        wrong++;
        alert("Jawaban Salah yang benar : "+ans);
    }
    setResult();

    var acakpertanyaan = Math.round(Math.random()*3);
    console.log(acakpertanyaan);

    questionPangkat();

        // if(acakpertanyaan == 0){
        //     questionTambah();
        // } else if(acakpertanyaan == 1){
        //     questionKurang();
        // } else if(acakpertanyaan == 2){
        //     questionKali();
        // } else if(acakpertanyaan == 3){
        //     questionBagi();
        // }
    });



});
