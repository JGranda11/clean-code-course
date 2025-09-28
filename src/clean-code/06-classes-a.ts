(() => {

    //Forma larga
    // class Person {
    //     public name: string;
    //     public gender: Gender;
    //     public birthdate: Date;

    //     constructor(name: string, gender:Gender, birthdate:Date){
    //         this.name = name;
    //         this.gender = gender;
    //         this.birthdate = birthdate;
    //     }
    // }

    //No aplicando el principio de responsabilidad unica

    type Gender = 'M' | 'F'

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) { }
    }

    class User extends Person {

        private lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User { //viola el principio de responsabilidad unica
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate);
        }

    }


    //const newUser = new User()//Se esperan 6 arg hasta el momento
    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'jhonas@google.com',
        'admin',
        'fernando',
        'M',
        new Date('1986-10-21')
    );

    console.log({userSettings})
})();
