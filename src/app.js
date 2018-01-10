let exportModule1 = require("./module1");

let main = function(){
    try{

        let output = exportModule1.option1();
        console.log(output);


        let mpromise = exportModule1.option2();
        mpromise.then(function(res){

            console.log(res);

           return exportModule1.option3();
        }).then(function(data){

            console.log(data);
            exportModule1.option4(function(name){
                console.log(name);
            })
            
            let user = "rahul"

            exportModule1.option5(function(user){
                console.log(user);
            })

        }).catch(function(err){
            console.log(err)
        })

        

    }catch(err){
        console.log(err);
    }
}

main();