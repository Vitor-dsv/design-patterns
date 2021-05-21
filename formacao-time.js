function Time(goleiro, zagueiroE, zagueiroD, lateralE, lateralD, volanteUm, volanteDois, volanteTres, volanteQuatro, meiaE, meiaD, meio, atacanteUm,
    atacanteDois, atacanteTres, atacanteQuatro, centroavante) {
    return {
        goleiro: goleiro,
        zagueiroE: zagueiroE,
        zagueiroD: zagueiroD,
        lateralE: lateralE,
        lateralD: lateralD,
        volanteUm: volanteUm,
        volanteDois: volanteDois,
        volanteTres: volanteTres,
        volanteQuatro: volanteQuatro,
        meiaE: meiaE,
        meiaD: meiaD,
        meio: meio,
        atacanteUm: atacanteUm,
        atacanteDois: atacanteDois,
        atacanteTres: atacanteTres,
        atacanteQuatro: atacanteQuatro,
        centroavante: centroavante
    }
}

// Sitema de formação 4-4-2
const formacao1 = Time(
    "Goleiro",
    "ZagueiroE", "ZagueiroD",
    "LateralE", "LateralD",
    null, null, null, null,
    "MeiaE", "MeiaD", null,
    "AtacanteUm", "AtacanteDois", "AtacanteTres", "AtacanteQuatro");

console.log("Formação 4-2-2: ", formacao1);

// Sitema de formação 4-2-3-1
const formacao2 = Time(
    "Goleiro",
    "ZagueiroE", "ZagueiroD",
    "LateralE", "LateralD",
    "Volante1", "Volante2", null, null,
    "MeiaE", "MeiaD", "Meio",
    null, null, null, null,
    'Centroavante'
);

console.log("Formação 4-2-3-1: ", formacao2);