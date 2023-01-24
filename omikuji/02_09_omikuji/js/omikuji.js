"use strict";
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
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",
    function(){
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
    
        let resultText = ["大吉!!!!","吉!!!!","中吉!!!","小吉!!","末吉","凶。。"];
        let resultColor = ["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
        let resultFontSize = ["55px","50px","45px","40px","35px","30px"];
        let n = Math.floor(Math.random() *resultText.length);
        btn1.textContent = resultText[n];
        btn1.style.color = resultColor[n];
        btn1.style.fontSize = resultFontSize[n];

        let resultMaxSpeed = ["10","10","8","5","5","5"];
        let resultMaxSize = ["30","30","20","15","20","20"];
        let resultImage = ["img/star.png","img/sakura_hanabira.png","img/sakura_hanabira.png",
                            "img/sakura_hanabira.png","img/leaf.png","img/snowflakes.png"];

        $(document).snowfall("clear");

        $(document).ready(function(){
            $(document).snowfall({
            maxSpeed : resultMaxSpeed[n], 
            minSpeed : 1, 
            maxSize : resultMaxSize[n], 
            minSize : 1, 
            image : resultImage[n]
            });
        });
    }, false
    );