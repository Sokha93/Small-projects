const insert = (num) => {
    document.form.textview.value = 
    document.form.textview.value + num;
}
const clean = () => {
    document.form.textview.value = '';
}

const back = () => {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1)
}

const equal = () => {
    let exe = document.form.textview.value;

    if(exe) {
        document.form.textview.value = eval(exe);
    }
};