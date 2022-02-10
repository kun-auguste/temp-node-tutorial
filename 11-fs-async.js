const {readFile,writeFile} = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf-8',
(err,result)=>{
    if(err){
        console.log(err);
        return(null)
    }
    const firstText = result;
    readFile('./content/second.txt', 'utf-8', 
    (err,result)=> {
        if(err){
            console.log(err);
            return(null);
        }
        const secondText = result;
        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${firstText}, ${secondText}`, {flag:'a'},
            (err,result)=>{
                if(err){
                    console.log(err);
                    return(null)
                }
                console.log('done with write task');
        })
    })
})
console.log('starting next task');