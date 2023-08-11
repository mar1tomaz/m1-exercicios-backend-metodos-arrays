const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const agendarPaciente = (pacientes, pacienteAgendado) => {
    pacientes.push(pacienteAgendado);
    console.log(pacientes.join(', '));
};

const atenderPaciente = (pacientes) => {
    const pacienteAtendido = pacientes.shift();
    console.log(`Paciente atendido: ${pacienteAtendido}`);
    console.log(pacientes.join(', '));
};

const cancelarAtendimento = (pacientes, pacienteCancelado) => {
    const indicePaciente = pacientes.indexOf(pacienteCancelado);
    if (indicePaciente !== -1) {
        pacientes.splice(indicePaciente, 1);
    }
    console.log(pacientes.join(', '));
};

agendarPaciente(pacientes, 'Carlos');
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, 'Ana');