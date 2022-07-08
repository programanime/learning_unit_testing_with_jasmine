class Person{
    firstName;
    lastName;
    middleName;

    constructor(data = {}){
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.middleName = data.middleName;
    }

    get fullName(){
        return `${this.firstName} ${this.middleName[0]} ${this.lastName}`
    }

    sayMyName(){
        window.alert(this.fullName);
    }

    askMyName(){
        this.firstName = window.prompt();
    }

    getCodeName(){
        const isTestingGod = confirm("Are you a testing god?")
        if(isTestingGod){
            return "TESTING GOD";
        }else{
            return "Scrub skipping";
        }
    }
}

class Persona {
    firstName;
    lastName;
    middleName;
    fullNamePieces;

    constructor(data, personService){
        this.firstName = data.firstName;   
        this.lastName = data.lastName;
        this.middleName = data.middleName;
        this.fullNamePieces = [data.firstName, data.middleName, data.lastName];
        this.id = data.id;
        this.personService = personService;
    }

    async getMyFullUserData(){
        return await this.personService.getUserById(this.id);
    }
}

describe("person", () => {
    it("function greetings 2", () => {
        expect("").toBe("");
    })
})

describe("say my name", () => {
    let model;
    beforeEach(()=>{
        console.log("pa todos toditos");
        model = new Person({firstName:"daniel", lastName:"molina", middleName:"Nose"});
    })

    it("alerts the full name of user", () => {
        //arrange
        model.firstName = "Dylan";
        model.lastName = "Bryan";
        model.middleName = "Bryan";
        
        spyOn(window, "alert");
        spyOn(window, "prompt");
        //act
        model.sayMyName()
        //assert
        expect(window.alert).toHaveBeenCalled()
        expect(window.alert).toHaveBeenCalledWith(model.fullName)
    })

    it("when confirmeod is coding", () => {
        spyOn(window, "confirm").and.returnValue(true)
        const codeName = model.getCodeName();
        expect(codeName).toBe('TESTING GOD');
    })

    it("when not confirmeld is just another scrub", () => {
        spyOn(window, "confirm").and.returnValue(false)
        const codeName = model.getCodeName();
        expect(codeName).toBe('Scrub skipping');
    })

})

describe("mock user", () => {
    let model;
    let mockPersonService;

    beforeEach(()=>{
        const data = {firstName:"daniel", lastName:"molina", middleName:"yepes", id:1}

        mockPersonService = {
            lastId: null,
            user: {},
            async getUserById(id){
                return await id
            }
        };

        model = new Persona(data, mockPersonService);
    })

    describe("getMyFullUserData", () => {
      it('get user data by id', async () => {
          //arrange
          mockPersonService.lastId = null;
          mockPersonService.user = {firstName:"daniel", lastName:"molina", middleName:"yepes", id:1}

          //act
          const id = await model.getMyFullUserData()
              
          //assert
          expect(id).toBe(1)
      });

      it("x is true", ()=>{
        expect([1,2,3,4]).toEqual([1,2,3,4]);
      });

      it("function greetings 2", () => {
          expect("hola mundo").toMatch(/Mundo/ig);
      })
    })
})
