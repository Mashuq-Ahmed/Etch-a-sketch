// DOM Element

var x =0;

const c =document.querySelector("#container");
const b=document.createElement("button");
const bt= document.querySelector("body");

bt.appendChild(b);
b.textContent = "Select Grid size";
var y=0;
var p=0;
b.addEventListener("click",()=>{
    
    x = prompt("Enter no. of squares per side(<50 per side)");
    
    if(x!=y && x<50) {
        if(p>=1){
            const boxes = document.querySelectorAll('.row');

            boxes.forEach(row => {
            row.remove();
            });
            
        }
                                
        for (var j = 0; j <x ; j++) {
            
            const r = document.createElement("div");
            r.className = "row";
            c.appendChild(r);
            for (var i = 0; i <x ; i++) {
                const d = document.createElement("div");
                d.className = "box";
                r.appendChild(d);
        
        
        }}
        
    }
    p++;
    y =x;
    
});



