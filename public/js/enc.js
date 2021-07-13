// <!DOCTYPE html>
// <html>
//     <head>
//         <script src="js/jquery-2.2.3.min.js"></script>
//     </head>
// <body>

// <img id="scream" src="pic01.jpg" alt="The Scream" width="220" height="277">
// <canvas id="myCanvas" width="220" height="277" style="border:1px solid #ffffff;">
// Your browser does not support the HTML5 canvas tag.</canvas>
// <script>



function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}



function enc()
{
    var img = document.getElementById('mr-grapher-image');
var canvas = document.createElement('canvas');
canvas.width = img.width;
canvas.height = img.height;
canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
// var pixelData = canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
// console.log(pixelData);
  console.log($("#mr-grapher-data-to-encrypt").val())
  var data=$("#mr-grapher-data-to-encrypt").val();
//===============================================
//random number generation
  x=[];
  y=[];
  
//================================================

var pwd=$("#mr-grapher-password").val();
if(pwd.length<8)
{
    alert("password length is less then 8 Character");
    return
}

const __a=parseInt(pwd[0])+80;
const __b=parseInt(pwd[1])+80;
const __c=parseInt(pwd[2])+80;
const __d=parseInt(pwd[3])+80;
const __e=parseInt(pwd[4])+80;
const __f=parseInt(pwd[5])+80;
const __g=parseInt(pwd[6])+80;
const __h=parseInt(pwd[7])+80;

        dec=""
        val_f=""
        j=0
        
        function digit(val1){
            
            
            //to cnvrt digits of lenght 4
            //4chaaracter from left side represents that passed no is negative or positive
            s="P"
            if(val1<0){                
                s="N"
                val1=Math.abs(val1)
               }
                
            val1=val1+""
            
            if (val1.length==3)
                return s+val1
            else if (val1.length==2)
                return s+"0"+val1
            else if (val1.length==1)
                return s+"00"+val1

            }
            j=0;

           

            for(var i=0;i<data.length;i+=3)
                {
                x=between(0,img.width-2);
                y=between(0,img.height-2);
                // print(data[i])
                tr=data.charCodeAt(i);   
                
                if(data.length<=i+1) tb=0
                else 
                    tb=data.charCodeAt(i+1);   
                    // print(data[i+1])

                if(data.length<=i+2)
                    tg=0
                else 
                    tg=data.charCodeAt(i+2);   
                    // print(data[i+2])


                 var pixelData = canvas.getContext('2d').getImageData(x,y, 1, 1).data;
                v1=pixelData[0]-tr
                v2=pixelData[1]-tb
                v3=pixelData[2]-tg
                
               
                val1=digit(v1)
                val2=digit(v2)
                val3=digit(v3)
                // console.log(val1)
                // console.log(val2)
                // console.log(val3)
                // #print("testing",val1,val2,val3)
                val_f=val_f+val1+val2+val3
                console.log(x+"|"+y)
                
                dec=dec+ String.fromCharCode(parseInt(x/1000)+__a)+String.fromCharCode(parseInt((x%1000)/100)+__b)+String.fromCharCode(parseInt((x%100)/10)+__c)+String.fromCharCode(x%10+__d)+String.fromCharCode(parseInt(y/1000)+__e)+String.fromCharCode(parseInt((y%1000)/100)+__f)+String.fromCharCode(parseInt((y%100)/10)+__g)+String.fromCharCode(parseInt(y%10)+__h)
                //print(j)
                console.log(String.fromCharCode(parseInt(x/1000)+__a)+String.fromCharCode(parseInt((x%1000)/100)+__b)+String.fromCharCode(parseInt((x%100)/10)+__c)+String.fromCharCode(x%10+__d)+String.fromCharCode(parseInt(y/1000)+__e)+String.fromCharCode(parseInt((y%1000)/100)+__f)+String.fromCharCode(parseInt((y%100)/10)+__g)+String.fromCharCode(parseInt(y%10)+__h))
                j+=1
                }

        dec=dec+"#*(#(%(#%@)))"+val_f
        console.log(dec);
        $("#mr-grapher-output").html(dec);
        $("#mr-grapher-data-to-decrypt").val()=dec;
        
              }

// </script>

// </body>
// </html>
