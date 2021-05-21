class TimeBuilder {
    constructor() {}
    time = [];

    criarGoleiro(goleiro) {
        this.time = [...this.time, {
            goleiro: goleiro
        }]
    }
    criarZagueiro(zagueiro) {
        this.time = [...this.time, {
            zagueiro: zagueiro
        }]
    }
    criarLateral(lateral) {
        this.time = [...this.time, {
            lateral: lateral
        }]
    }
    criarVolante(volante) {
        this.time = [...this.time, {
            volante: volante
        }]
    }
    criarMeia(meia) {
        this.time = [...this.time, {
            meia: meia
        }]
    }
    criarAtacante(atacante) {
        this.time = [...this.time, {
            atacante: atacante
        }]
    }
    criarCentro(centro) {
        this.time = [...this.time, {
            centro: centro
        }]
    }

    exibirTime() {
        console.log(this.time);
    }
}

// Formação: 4-4-2
var formacao3 = new TimeBuilder();

formacao3.criarGoleiro("Goleiro");
formacao3.criarZagueiro("ZagueiroE");
formacao3.criarZagueiro("ZagueiroD");
formacao3.criarLateral("LateralE");
formacao3.criarLateral("LateralD");
formacao3.criarMeia("MeiaE");
formacao3.criarMeia("MeiaD");
formacao3.criarAtacante("Atacante1");
formacao3.criarAtacante("Atacante2");
formacao3.criarAtacante("Atacante3");
formacao3.criarAtacante("Atacante4");
formacao3.exibirTime();

// Formação: 4-2-3-1
var formacao4 = new TimeBuilder();

formacao4.criarGoleiro("Goleiro");
formacao4.criarZagueiro("ZagueiroE");
formacao4.criarZagueiro("ZagueiroD");
formacao4.criarLateral("LateralE");
formacao4.criarLateral("LateralD");
formacao4.criarVolante("Volante1");
formacao4.criarVolante("Volante2");
formacao4.criarMeia("MeiaD");
formacao4.criarMeia("MeiaE");
formacao4.criarMeia("Meia");
formacao4.criarCentro("Centroavante");
formacao4.exibirTime();