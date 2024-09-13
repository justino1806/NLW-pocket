const start = () => {
    let count = 0
    while (true) {
        let opcao = "cadastrar"
        switch (opcao) {
            case "cadastrar":
                console.log("Vamos cadastrar")
                break;
            case "listar":
                console.log("Vamos listar")
            case "sair":
                return
        }
    }
}

start()