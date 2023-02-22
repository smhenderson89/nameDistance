import testModule from "../modules/testModule.mjs";

let name = 'Scott'

function catMeow(name) {
    let data = testModule(name)
    console.log(data)
}
