

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}



function dec()
{
console.log("decrypter of mr.Grapher")

    var img = document.getElementById('mr-grapher-image');
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

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
    __a=parseInt(pwd[0])+80;
    __b=parseInt(pwd[1])+80;
    __c=parseInt(pwd[2])+80;
    __d=parseInt(pwd[3])+80;
    __e=parseInt(pwd[4])+80;
    __f=parseInt(pwd[5])+80;
    __g=parseInt(pwd[6])+80;
    __h=parseInt(pwd[7])+80;
    // console.log(__a+"++"+__b+"++"+__c)

        console.log($("#mr-grapher-data-to-decrypt").val());
        data=$("#mr-grapher-data-to-decrypt").val();


        dec2=data.split("#*(#(%(#%@)))")//#Splitting Cordinates and partial values
        dec=dec2[0]
        dec1=dec2[1]
        console.log(dec)
        //console.log(dec1.lenght)
        // #dec stores coardinates 
        // #dec1 stores Partial values
        p_value=[]
        inc=""
        // prparseInt((dec1)
        // prparseInt(("Newtesting")
        for(var i=0 ; i<dec1.length;i+=4)
        {
            if(dec1[i]=="N"){
                // console.log("testingN")
                
                
                p_value.push((parseInt(dec1.substring(i+1,i+4)))*-1)
            }
                                         
            else
            {
                // console.log("TestingP");
                // console.log(parseInt(dec1.substring(i+1,i+4)))
                p_value.push(parseInt(dec1.substring(i+1,i+4)))
            //prparseInt(("TestingOutside")
            }

        }
            
                
                                         
                                         
     
        
        // prparseInt((p_value)
        // prparseInt((dec)
        // prparseInt((type(dec))
        // r=len(data)
        // prparseInt(("Length of data is b:-",r, '   ',type(dec))
        y=0
        // pix = im.load()
        // console.log(p_value)

        for(var d=0;d<dec.length;d+=8)
        {
            console.log(d+"__________________________________________________________________________________________")
            console.log(dec.charCodeAt(d)+"==========================================");
            _a=( dec.charCodeAt(d)-__a)*1000
            _b=(  dec.charCodeAt(d+1)-__b)*100
            _c=(  dec.charCodeAt(d+2)-__c)*10
            _d=  dec.charCodeAt(d+3)-__d
            _e=(  dec.charCodeAt(d+4)-__e)*1000
            _f=( dec.charCodeAt(d+5)-__f)*100
            _g=(  dec.charCodeAt(d+6)-__g)*10
            _h=  dec.charCodeAt(d+7)-__h


            console.log(_a+"|"+_b+"|"+_c+"|"+_d)
            x_cord=_a+_b+_c+_d
            y_cord=_e+_f+_g+_h
            console.log(x_cord+"++++"+y_cord)
            // prparseInt((x_cord,y_cord)
            
            
            if(x_cord<img.width && y_cord<img.height){
               // prparseInt(("othrrtwise")
               v= canvas.getContext('2d').getImageData(x_cord,y_cord, 1, 1).data;
                // v=pix[x_cord,y_cord]
                // prparseInt((v)
                console.log(v)
            
                //#Obtaining actual values
                // if((v[0]-parseInt(p_value[y]))<125 && (v[1]-parseInt(p_value[y+1]))<125 && (v[2]-parseInt(p_value[y+2]))<125 && p_value.lenght>y+2){
                    
                    a1=String.fromCharCode(v[0]-parseInt((p_value[y])))
                    b1=String.fromCharCode(v[1]-parseInt((p_value[y+1])))
                    c1=String.fromCharCode(v[2]-parseInt((p_value[y+2])))
                    inc=inc+a1+b1+c1 
                // }
                // else {
                //     console.log("kuchh to gdbd hai dyaa")
                 // }
            }
            y+=3;
            console.log(y+"+++++++++++++++++++++++++++++++++++++++++++++++++++");
        }
        console.log(inc)
        $("#mr-grapher-output").html(inc);
    }
// {/* <!-- 
// </script>

// </body>
// </html>


//      --> */}
