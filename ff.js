








/*

*/



function hel(a="33" ,s){
    console.log("furqan "  + a +" " + s)
}
function sum (a,b) {
    document.write(a+b + "<br></br>" + a * b + "<br></br>")
}
sum(4,2)
sum(14,22)
hel(32 ,"ali ")
hel(42,"da")




var s=[

["anas",21,"matric"],
["fuqamm",31,"matric"],
["jau",21,"matric"]
]
console.log(s)
for (let i = 0; i < 3; i++) {
   
    for (let b = 0; b < s.length; b++) {
        document.write(  s[i] [b]  )

    }
   
   document.write( "<br></br>")
}


function sa (a,b){
console.log("haleem " +  a +" with "+ b )
return "haleem " +  a + " with "+ b

}

console.log("birani" )
  let sad= sa("pulo","cold drink")
document.write(sad)


let faf= (s)=>{

    console.log("sad "+s)
}

faf("saff")


function vowels(str){

    let count=0;
for (let d of str) {

    if (d==="a"|| d==="e" || d==="i" || d==="o") {
        count++;
    }
    

}
console.log(count)
}

 vowels("apsas mein ohoo")






let arry=[1,5,3,4,14]

arry.forEach((sadf) => {
    console.log(sadf*2-2)
});

let saf=["furqan","ali"]

saf.forEach ( (element,ind) => {
    console.log(element +" "+ind)
}); 





let fas=[2,12,32,21]


fas.forEach(e => {
    console.log(e*e)
});




let fad=[4,1,32,21]


let af =fad.map( (f)=>{
return f+2;

});

console.log(af)



let fif=[1,5,4,2,3,6,9]


let fifa= fif.filter((d)=>{

 return d%2 !==0 ;

})

console.log(fifa)




let fifa1=[12,54,91,62,94]

let c=fifa1.filter((e)=>{
return e > 90

})
console.log(c)
let ss=[];

//let n =prompt("enter number")
/*
for(let o=1; o<=n;o++){
ss[o-1]=o;


}
console.log(ss)
*/

     var fs= document.getElementsByClassName("sd")

     console.log(fs)

     document.body.style.backgroundColor ="tan";

     var d =document.body.childNodes[3]
console.log(d)


var fa= document.getElementById("container").children[1].innerHTML
console.log(fa)

 document.getElementById("abc").setAttribute.innerHTML="<h1>wow</h1>";

// nummber math
// is paraint ye decimmal ko vale ko intger mein kar deinti hai
//  to fixed nuumber ko fixed kr deinti hai aur round about value krti hai
//to precison set fixed value in 

var num= 42.576

let sd=num.toFixed(2)
console.log(sd)




var nus= (Math.random()*10 +1).toFixed(2)
console.log(nus)



var f= new Date()


console.log(f.toDateString())







var g= document.getElementById('container').children[1]
console.log(g)
document.getElementById('container').children[0].style.fontSize='34px'

document.getElementById('container').children[0]=


g.style.fontSize='22px'

g.style.color='purple'
var asf=document.getElementById('abc')


var f=document.getElementById('abc').setAttribute('class','sa')

document.getElementById('abc').setAttribute('style','border=2px solid red')

console.log(f)


document.getElementById('abc').addEventListener('click',asfs)




function asfs (){
    
asf.classList.add('furqan')

}

let input =document.getElementById('box')
let buttons=document.querySelectorAll('button')
let string=''
console.log(buttons)

let store= Array.from(buttons)
console.log(store)
store.forEach(e => {
    console.log(e)
e.addEventListener('click',(f)=>{
if(f.target.innerHTML==='del'){

string=string.substring(0,string.length-1)
input.value=string;
}
else if(f.target.innerHTML=='Ac'){
 string = ' ';
input.value = string;
}else if (f.target.innerHTML=='='){

string=eval(string)
input.value=string
}

else{

string+= f.target.innerHTML;
input.value=string;
}

});

});
console.log(store)



function sum1 (name,...arg){
let oop=0;
    for (let i in arg) {
        console.log(i)
oop+=arg[i]

        }
   
        console.log(oop)
        console.log(name)
    }

sum1('furqqam',20,12,13,12)
sum1('furqqam',22,22,43,42)

let n='name';

let game='fortnite12'

let skins='red jade 2'


let pop={
[ `student${n}`]:'furqqan',
da : function(s,ss){
return `${this.studentname} is student of ${this.course} and live  in ${s} and  eat ${ss} `

},
course:'bsc',
salary:2,
wwe:function (i,o){

    return `${i} is online game and i love ${o}   skin`
    
    }

}

console.log(pop.da('karachi ', 'biryani') , pop.salary)
console.log(pop.wwe(game,skins))


let games='fortnite'

let skin='red jade'



function df (i,o){

return `${i} is online game and i love ${o}   skin`

}
console.log(df(games,skin))

let ful='furqan'
let ln='ali'
function ssd (e,r){

   let dd= e+" " + r
    return dd
    }
    console.log(ssd(ful,ln))
    


let off=['jayy',21,'bscs',['male','biryani']]

let [name,age,degree,[gender,food]]=off;

console.log(name,age,degree,gender,food)

let of=['jayy',23,'bcom',['male','biryani']]

for (let j in of) {
    console.log(of[j])


}

console.log(of[3]
    
)







let sas=['abdullah',41,'matic'];



let [ali ,degggr,]=sas;


console.log(degggr)




class helo{



constructor(ddd,fss){


    this.rrr=fss
    console.log('construtruc ' + ddd)
}

mesage(a){
    console.log('hi'+a)
}
static fadd(dff){
    console.log( 'jeeto pakistan and he is host by ' + dff)
    }

 r (d){

console.log('furqan is nice perssin because he love to '+ d +" and boy name is "+ this.rrr  )

 }

}

var d= new helo('fuqan bhhide', 'justin babaer' )

d.mesage(' furqan')

d.r(' eat biryani')

helo.fadd('fahad mustfa')


  /* 
function prom(a,b){

return new Promise((res,fai)=>{
console.log('fetchig data....')

setTimeout(() => {
    

 if(a,b){
        res('i am pass' +a/b)
        }else{
          fai('i am failed')
        }
$.get("https://jsonplaceholder.typicode.com/posts",function(data1){
    console.log(data1)
})

    },2000 );
        });    
}

    


prom(3,0).then((c)=>{
console.log(c)
}) .catch((x)=> {
    console.log(x)
})
*/

function j(n,m){

    console.log(n/m)
}


j(2,0)




let so=0;

/*
    let p1 =new Promise((res)=>{
    console.log('fetchig data 1....')
    
    setTimeout(() => {
        
    
            res(30)
            
            
    
        }, 2000);
            });    
        



    let p2=   new Promise((res)=>{
        console.log('fetchig data 2....')
        
        setTimeout(() => {
            
        
                res( 20)
             
                
        
            },3000 );
                });    
        
    
*/


let promisecall= function(rdata,mess){

return function (resolve,reect) {
    setTimeout(() => {
        console.log(`${mess} promised`)
    }, rdata *100);
    
    }
    
}


let p1= new Promise(promisecall(10,"first"))

let p2= new Promise(promisecall(20,"second"))

let p3= new Promise(promisecall(30,"third"))








Promise.all([p1,p2,p3]).then((gg)=>{
console.log(gg)
for (const nn in gg) {
   
    so+= gg[nn]
   
}
console.log("total"+ so)
}).catch((hh)=>{
console.log(hh)
})

/*
var lop= new XMLHttpRequest()

document.getElementById('opps').addEventListener('click',function(){


lop.onreadystatechange=function(){
if (this.readyState==4 && this.status==200) {
  console.log(this.responseText)
}else if (this.readyState==4 && this.status==404){
console.log('eroor')
}

};



lop.open('GET','file/read.txt',true)
lop.send();

})
"https://jsonplaceholder.typicode.com/users"

        console.log   ( k + "  " + resl[k].email +' name :' + resl[k].name)

*/

fetch('newjson/student.json').then( (respo)=>{
return respo.json()

}).then((resl)=>{
    console.log(resl)
    for(let k in resl)
        console.log  (resl[k].email )
    
}).catch( (eor)=>{
console.log("cant fetch")

})





async ()=> "hello"
  
test().then((r)=>{

console.log(r)

})




