const myContainer = document.getElementById('container');

let text = ''

for(let i = 1; i <= 100; i++){
    let bgBox;
    if(i % 15 === 0){
        const fizzBuzz = 'FizzBuzz';
        text = fizzBuzz;
        bgBox = 'bg-danger';
        console.log(text);
    }
    else if(i % 3 === 0){
        const fizz = 'Fizz';
        text = fizz;
        bgBox = 'bg-success';
        console.log(text);
    }
    else if(i % 5 === 0){
        const buzz = 'Buzz';
        text = buzz;
        bgBox = 'bg-warning';
        console.log(text);
    }
    else{
        console.log(i);
        bgBox = 'my-bg-box';
    }
    const boxEl = document.createElement('div');
    boxEl.className = `box ${bgBox} d-flex justify-content-center align-items-center`;
    myContainer.append(boxEl);
}

