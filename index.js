var no_el=document.getElementById("No");
var yes_el=document.getElementById("Yes");
var chap_el = document.getElementById("chap");
var good_el = document.getElementById("good");
var left;
var bottom;
var clicked=0;

no_el.addEventListener("click", just);
yes_el.addEventListener("click", wow);

function just(){
    clicked++;
    left=Math.floor(Math.random()*151)-90;
    bottom=Math.floor(Math.random()*391)-150;
    no_el.style.left=left+"px";
    no_el.style.bottom=bottom+"px";
    if(clicked===3){
        no_el.innerText="what is opposite of NO"
    }else if(clicked===4){
        no_el.innerText="Still No"
    }else if(clicked===5){
        no_el.innerText="Whyyyyyy???"    
    }else{
        no_el.innerText="No"
    }
}

function wow(){
    no_el.style.visibility="hidden"
    good_el.innerText="You said Yesssss!!!!!"
    chap_el.setAttribute("src","./resources/yayy.gif")
}