"use strict";
let n = "";
let nbefore = "";
window.addEventListener("DOMContentLoaded",
    function(){
        $("header").textillate({
            loop: false, 
            minDisplayTime: 2000, 
            initialDelay: 2000, 
            autoStart: true, 
            in: {
                effect: "fadeInLeftBig", 
                delayScale: 1.5, 
                delay: 50, 
                sync: false, 
                shuffle: true 
            }
        });

        $(function(){
            ScrollReveal().reveal("#btn1", { duration: 9000 });
        });
        setTimeout(
            function(){
                let popMessage = "いらっしゃい！おみくじ引いてって！";
                window.alert(popMessage);

            },
            "5000"
        );
        
    },false
);

    let soundEndflag = "0";
    const btn1 = document.getElementById("btn1");
    const omikujiText = document.getElementById("omikujiText");
    const omikujiTextImage = document.getElementById("omikujiTextImage");

    btn1.addEventListener("click",
    function(){
        if(soundEndflag === "1"){
            soundControl("end","");
        }
        /*let n = Math.floor(Math.random() * 3);

        switch (n){
            case 0:
                btn1.textContent = "Very Happy!!";
                btn1.style.color = "#FF0000";
                btn1.style.fontSize = "40px";
                break;
            case 1:
                btn1.textContent = "Happy!";
                btn1.style.color = "#FFF001";
                btn1.style.fontSize = "70px";
                break;
            case 2:
                btn1.textContent = "UnHappy...";
                btn1.style.color = "#261e1c";
                btn1.style.fontSize = "40px";
                break;
        }*/
    
        /*let resultText = ["大吉!!!!","吉!!!!","中吉!!!","小吉!!","末吉","凶。。"];
        let resultColor = ["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
        let resultFontSize = ["90px","80px","70px","60px","50px","40px"];*/
        let resultText = ["img/daikichi.png","img/chukichi.png","img/syokichi.png","img/suekichi.png","img/daikyo.png"];
        let resultMaxSpeed = [10,8,8,5,5];
        let resultMaxSize = [25,25,25,30,25];
        let resultImage = ["img/star.png","img/water2.png","img/redLeaves10.png","img/snowflakes.png","img/zenitsu.png"];
        let resultSound = ["sound/omikuji_sound1.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound4.mp3","sound/omikuji_sound3.mp3"];
        
        //let n = Math.floor(Math.random() * resultText.length);

        /*omikujiText.textContent = resultText[n];
        omikujiText.style.color = resultColor[n];
        omikujiText.style.fontSize = resultFontSize[n];*/

        while(n==nbefore){
            n = Math.floor(Math.random() * resultText.length);
        }
        nbefore = n;

        omikujiTextImage.src = resultText[n];
        omikujiTextImage.classList.add("omikujiPaper");
        omikujiTextImage.addEventListener("animationend",
            function(){
                omikujiTextImage.classList.remove("omikujiPaper");
            },false
        );

        w_sound = resultSound[n];
        soundControl("start",w_sound);
        soundEndflag = "1";

        $(document).snowfall("clear");

        setTimeout(
            function(){
                $(document).ready(function(){
                    $(document).snowfall({
                        maxSpeed : resultMaxSpeed[n],
                        minSpeed : 1,
                        maxSize : resultMaxSize[n],
                        minSize :1,
                        image : resultImage[n]
                    });
                });
            },
            "200"
        );

        /*$(document).ready(function(){
            $(document).snowfall({
            maxSpeed : resultMaxSpeed[n], 
            minSpeed : 1, 
            maxSize : resultMaxSize[n], 
            minSize : 1, 
            image : resultImage[n]
            });
        });*/
    }, false
    );
    let w_sound
    let music
    function soundControl(status,w_sound){
        if(status === "start"){
            music = new Audio(w_sound);
            music.currentTime = 0;
            music.play();
        }else if(status === "end"){
            music.pause();
            music.currentTime = 0;
        }
    }