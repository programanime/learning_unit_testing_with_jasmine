class User{
    firstName;
    lastName;
    middleName;

    constructor(data = {}){
        this.firstName = data.firstName || "";
        this.lastName = data.lastName || "";
        this.middleName = data.middleName || "";
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

describe(`${User.name}`, () => {
    let model;
    beforeEach(()=>{
        console.log("pa todos toditos");
        model = new User({firstName:"daniel", lastName:"molina"});
    })
    describe("set de pruebas de prueba", () => {      

        it("first name defaults to empty string", () => {
            const data = {firstName:null};
            const model = new User(data);
            expect(model.firstName).toBe("");
        })
        
        it("default empty string for all properties", () => {
            //arrange
            const data = {firstName:null, lastName:null, middleName:null};

            //act
            const model  = new User(data);

            //assert
            expect(model.firstName).toBe("")
            expect(model.lastName).toBe("")
            expect(model.middleName).toBe("")
        })
    })

    describe("set de pruebas de prueba", () => {
        it("function greetings 2", () => {
            expect("true").toBe("true");
        })

        it("test model", () => {
            expect(model.firstName).toBe("daniel");
        })

        it("get fullname", () => {
            expect(model.getFullName()).toBe("daniel molina");
        })

        it("function greetings 2", () => {
            const {firstName:fn, lastName:ln, middleName:mn} = model;
            expect(fn).toBe("daniel");
        })
    })
})
