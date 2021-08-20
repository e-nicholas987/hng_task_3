
const myName = [...'Emeka Iwuanyanwu'];
myName.forEach((letter, ind) => {
    setTimeout(() => {
        document.getElementById('name').textContent += letter
    }, ind * 300)
});

