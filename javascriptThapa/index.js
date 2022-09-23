// var a=10;
// var b="20";
// console.log(a-b);// 1.bug in jacascript
// var c="java";
// var d="Script";
// console.log(c+d);
// var x=null;
// console.log(typeof(x));//2.bug in javascript



// var a=2343;
// var b="faman";
// console.log(isNaN(a));
// console.log(isNaN(b));



// var num=34;
// // var newNum=num++;//firstly '=' assingment operator is execute then post increment '++'
//  console.log(num);
// // console.log(newNum);
// var newNum=++num; firstly pree increment opertor execute then assingment operator
// console.log(num);
// console.log(newNum);



// var a=32;
// var b=a--;
// console.log(a);//firstly '=' assingment operator is execute then post decrement --'
// console.log(b);//firstly pree decrement opertor execute then assingment operator

// var a=3;
// b=3;
// console.log(a>=b);
 

// console.log(3**3);
// console.log(10**-2);





// var a=5;
// var b=10;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a);
// console.log(b);


// var year=2100;
// debugger;
// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0){
//             console.log("this year "+year+" is  a leap year");

//         }else{
//             console.log("this year "+year+" is not a leap year");
//         }

//     }else{
//         console.log("this year "+year+" is  a leap year");
//     }

// }else{
//     console.log("this year "+year+" is not a leap year");
// }  







// var s=4,l=5 ,w=3,r=6;
// var area="triangle";
// switch(area){
//     case 'square':
//         console.log("the area of square is : "+(s*4));
//         break;
//     case 'rectangle':
//         console.log("the area of rectangle is : "+(l*w));
//         break;
//     case 'triangle':
//         console.log("the area of triangle is : "+(l*s/2));
//         break;
//     case 'circle':
//         console.log("the area of circle is : "+22/7*r**2);
//         break;
//         default:
//             console.log("plz enter valid");
// }


// var number=8
// for(var a=1;a<=10;a++){
//     var b=number*a;
//     console.log(number+" * "+a+" = "+b);
// }














///////////////////////function///////////////////////////






// function sum(){
//     var a=167,b=2;
//     var total=a+b;
//     return total;
//     // console.log(total);
// }
//   var x=sum();
//   console.log(x);












// function sum(value1,value2){//fucntion parameters
//     var a=value1,b=value2;
//     var total=a+b;
//     return total;
//     // console.log(total);
// }
//   var x=sum(34,34);//function argument
//   console.log(x);




////////////print table of a number without using cancatination property////////////////
       
// for(var a=1;a<=10;a++){
//     var b=4;
//     console.log( ` ${b} * ${a} = ${b*a}` );
// }




////////////////Default Parameters/////////////////////
 
// function mul(a,b){
// function mul(a,b=5){//set default value for 2nd parameter
//     return a*b;
// }
// // console.log(mul(5,6));
// console.log(mul(5,6));



// /media/raza/B0A69A50A69A17461/webdevelopment/css/flex/website_layout using_flex
// const sum=



////////////Arrays in javascript/////////////////

// var a=["farman","virtual","university","pakistan","india","php"];
// for(var i=0;i<a.length;i++){
    //     console.log(a[i]);
    
    // }
    // console.log(`length of array 'a' is =${a.length}`);
    
    
    


// /////////////////For in Loop in javascript/////////////////
// //for in loop use only in arrays in entire javascript programming//
// //for in loop gives us indexs of all elementa in the the array
//  var a=["farman","virtual","university","pakistan","india","php"];
//  for(var b in a){
    //     //  console.log(a[b]);
    //     console.log(b);
    //     }




 /////////////////for of Loop in javascript////////////////
 //for of loop use only in arrys  in the entire programming in javascript this function is lounch in ECMA Script 2015
    //  var a=["farman","virtual","university","pakistan","india","php"];
    //  for(var b of a){
        //      console.log(b);//for of loop gives of value of elemtns of arrays
        //  }
        
        
        
        
        
        
        
        //////////////forEach loop in javascript///////////////////////
        //forEach loop use only in arrays 
        //forEach loop gives us index value and arrays in which that element is used 
        //forEacg loop is a combination of 'forin' and 'for of' loops
        
        //  var a=["farman","virtual","university","pakistan","india","php"];
        // a.forEach(function(element, index, array){
            //     console.log(element+" index: "+index+" array: ");
            // });
            
            
            ////////////indexOf////////////////
             var a=["farman","virtual","university","pakistan","india","php","farman"];
             var b=a.indexOf('farman');
             console.log(b);//indexOf method return us index numnumber of element
        