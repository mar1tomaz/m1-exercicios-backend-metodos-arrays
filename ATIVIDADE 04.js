const atendimentoClinica = (pacientes, operacao, nomePaciente) => {
    if (operacao === 'agendar') {
        pacientes.push(nomePaciente);
    } else if (operacao === 'atender') {
        const pacienteAtendido = pacientes.shift();
        console.log(`Paciente atendido: ${pacienteAtendido}`);
    }

    console.log(pacientes.join(', '));
};

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

atendimentoClinica(pacientes, 'agendar', 'Carlos');
atendimentoClinica(pacientes, 'atender');