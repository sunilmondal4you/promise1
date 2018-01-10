let exportModule1 = require("./module1");

let main = function(){
    try{

        let output = exportModule1.option1();
        console.log(output);


        let mpromise = exportModule1.option2();
        mpromise.then(function(res){

            console.log(res);

            exportModule1.option3();
        }).then(function(data){
            console.log(data);
            
        }).catch(function(err){
            console.log(err)
        })

        

    }catch(err){
        console.log(err);
    }
}

main();