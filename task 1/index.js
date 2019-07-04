function error () {
    let input = document.getElementById('name_input');

    input.addEventListener('input', (e) => {
        if (e.target.value !== e.target.defaultValue) {
            input.className = 'red';
        } else input.className = '';
    });
};

error();

// альтернативный код решения задачи

// (function () {
//     document.getElementById('name_input').addEventListener('input', (e) => {
//         if (e.target.value !== e.target.defaultValue) {
//             document.getElementById('name_input').className = 'red';
//         } else document.getElementById('name_input').className = '';
//     });
// }());