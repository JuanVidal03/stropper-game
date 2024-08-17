export const verifyDifficulty = (dificultad) => {

    switch (dificultad) {
        case 'nivel dios':
            return 1000
            break;
        case 'legendario':
            return 2000
            break;
        case 'normal':
            return 3000
            break;

        default:
            return 'No hay ociones disponibles';
            break;
    }
}