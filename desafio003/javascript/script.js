function contar() {
    var ini = document.getElementById('txti').value;
    var fim = document.getElementById('txtf').value;
    var pas = document.getElementById('txtp').value;
    var res = document.getElementById('res');

    // Verifica se os valores são números
    if (isNaN(ini) || isNaN(fim) || isNaN(pas)) {
        alert('Por favor, digite apenas números nos campos!');
    } else {
        ini = Number(ini);
        fim = Number(fim);
        pas = Number(pas);

        if (ini.length === 0 || fim.length === 0 || pas.length === 0) {
            alert('[ERRO] Verifique os dados e tente novamente!');
        } else {
            res.innerHTML = 'Contando: <br>';
            
            if (pas <= 0) {
                alert('Passo inválido! Utilizando passo 1.');
                pas = 1;
            }

            if (ini < fim) {
                for (var c = ini; c <= fim; c += pas) {
                    res.innerHTML += `${c} \u{1f449}`;
                }
            } else {
                for (var c = ini; c >= fim; c -= pas) {
                    res.innerHTML += `${c} \u{1F449}`;
                }
            }

            res.innerHTML += `\u{1F3C1}`;
        }
    }
}