 
 let exportModule = {

    "option1" : function(){
        let a=10;
        let b=20;
        console.log(a+b);
        return a+b;
    },

    "option2": function(){
        return new Promise (function(resolve,reject){
            try{
                let a=100, b=200;
                console.log(a+b);

                resolve (a+b)
            }catch(err){
                console.log(err);
            }
        })
    },

    "option3" : function(){
        return new Promise((resolve,reject)=>{
            try{
                let x=1000;
                let y=2000;

                resolve (x+y)
            }catch(err){
                console.log(err);
            }
        })
    }
 }

 module.exports = exportModule;