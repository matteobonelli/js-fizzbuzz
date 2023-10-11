const myContainer = document.getElementById('container');



for(let i = 1; i <= 100; i++){
    let bgBox;
    const fizz = 'Fizz';
    const buzz = 'Buzz';
    const fizzBuzz = 'FizzBuzz';
    const boxEl = document.createElement('div');
    if(i % 15 === 0){
        bgBox = 'bg-danger';
        boxEl.innerHTML = fizzBuzz;
        console.log(fizzBuzz);
    }
    else if(i % 3 === 0){
        bgBox = 'bg-success';
        boxEl.innerHTML = fizz;
        console.log(fizz);
    }
    else if(i % 5 === 0){
        bgBox = 'bg-warning';
        boxEl.innerHTML = buzz;
        console.log(buzz);
    }
    else{
        console.log(i);
        bgBox = 'my-bg-box';
        boxEl.innerHTML = i;
    }
    
    boxEl.className = `box ${bgBox} d-flex justify-content-center align-items-center fw-bold fs-4 shadow`;
    myContainer.append(boxEl);
}

