
interface Bird{
    eat(): void;

}

//segregación

interface FlyingBird{
    fly(): void;
}

interface RunningBird{
    run(): void;
}

interface SwimmerBird{
    swim(): void;
}

class Tucan implements Bird, FlyingBird{

    public fly(){

    }

    public eat(){

    }

    public swim(){}
}

class Humminbird implements Bird, FlyingBird{
    public fly(){

    }

    public eat(){

    }

}

class Ostrich implements Bird, RunningBird {

    
    public eat(){

    }
    public run(){}

}

class Penguin implements Bird, SwimmerBird {

    public eat(){

    }

    public swim(){}

}

//Si la interfaz sigue agregando metodos, se va a seguir violentando el principio

//Solución, "segregar"

