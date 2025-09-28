(() => {


    function getMovieById(movieId: string) {
        console.log({ movieId });
    }

    function getActorsByMovieId(id: string) {
        console.log({ id });
    }

    function getActorBioById(ActorId: string) {
        console.log({ ActorId });
    }

    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    } //Desestructuración de objetos
    //Sin perder el tipado

    // Crear una película
    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor', birthdate);
        return true;

    }


    // Continuación

    /*
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if (isDead) {
            result = 1500;
        } else {
            if (isSeparated) {
                result = 2500;
            } else {
                if (isRetired) {
                    result = 3000;
                } else {
                    result = 4000;
                }
            }
        }

        return result;
    }
    */

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        // Es bueno especificar el tipo de dato que va a retornar la función

        if (isDead) {
            return 1500;
        }
        if (isSeparated) {
            return 2500;
        }
        // if (isRetired) {
        //     return 3000;
        // } else {
        //     return 4000;
        // }   
        return isRetired ? 3000 : 4000;

    }

    const getPayAmount2 = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        // Es bueno especificar el tipo de dato que va a retornar la función

        if (isDead) return 1500;

        if (isSeparated) return 2500;

        return (isRetired) ? 3000 : 4000;

    }
})();