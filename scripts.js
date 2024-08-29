const nomecursos = [
    "",
    "Enfermagem",
    "Socorrista",
    "Odontologia"
];
const tituloTexto = document.title;
let info;  // Defina a variável info fora dos blocos condicionais

if (tituloTexto === 'Enfermagem') {
    info = [
        '',
        "Enfermagem",
        24,
        1500,
        1900,
    ];
} else if (tituloTexto === 'Socorrista') {
    info = [
        '',
        "Socorrista",
        9,
        1200,
        1000,
    ];
} else if (tituloTexto === 'Odontologia') {
    info = [
        '',
        "Odontologia",
        24,
        1600,
        1900
    ];
} else {
    info = 0;
}

function corpoCursos() {
    const cursosHTML = `
        <span class="txt-cursos"><h1>Curso de ${info[1]}</h1></span>
        <div class="cont-cursos">
            <h2>Técnico Profissionalizante Semipresencial</h2>
            <h3>Informações:</h3>
            <ul>
                <li>Duração: ${info[2]} meses</li>
                <li>Disponiveis: ${info[3]} vagas</li>
                <li>Carga horária: ${info[4]} horas</li>
                <li>Diplomação: Educação Profissional Técnica de Nível Médio</li>
            </ul>
            <p>*Pré-requisitos: 18 anos completos e/ou certificado de conclusão de ensino médio.*</p>
            <h4>Certificação intermediária: O aluno poderá solicitar a certificação de Auxiliar em Enfermagem após o cumprimento de 400 horas de Estágio Curricular Supervisionado Obrigatório</h3>
            <div class="bloco-matricula"><a href="contato.html">Matricule-se</a></div>
        </div>
        <span class="bt-voltar"><a href="inicio.html">Voltar</a></span>
    `;

    document.getElementById('cursos').innerHTML = cursosHTML;
}

window.addEventListener('load', corpoCursos);
