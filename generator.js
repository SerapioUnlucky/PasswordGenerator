const output = document.getElementById('generated_pwd');

function generate_pwd(event){

    const length = 20,
    charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,;:!?./#{[|@]}&';

    let pwd = '';

    for(let i = 0, n = charset.length; i < length; ++i){

        pwd += charset.charAt(Math.floor(Math.random() * n));

    }

    output.innerHTML = pwd;

}
