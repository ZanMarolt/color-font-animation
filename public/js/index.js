const maxHeight = window.innerHeight;
const targetY = document.getElementById('overlay');

console.log('height:', maxHeight);

// expects two arrays, and returns ratio
const getValue = (input, m) => {
    return (m.output[0] + ((m.output[1] - m.output[0]) / (m.input[1] - m.input[0])) * (input - m.input[0]));
}

onmousemove = function(e){
    targetY.style.opacity = getValue(e.clientY, { input: [0, maxHeight], output: [0,1] } );
}