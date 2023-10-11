let text = ''

for(let i = 1; i <= 100; i++){
    if(i % 15 === 0){
        const fizzBuzz = 'FizzBuzz';
        text = fizzBuzz;
        console.log(text);
    }
    else if(i % 3 === 0){
        const fizz = 'Fizz';
        text = fizz;
        console.log(text);
    }
    else if(i % 5 === 0){
        const buzz = 'Buzz';
        text = buzz;
        console.log(text);
    }
    else{
        console.log(i);
    }
}

