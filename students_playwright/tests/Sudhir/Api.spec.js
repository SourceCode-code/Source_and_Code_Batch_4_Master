
const { test, expect, request } = require("@playwright/test")
const { exitCode } = require("process")

test("verify GET API", async ({ request }) => {

  let req = await request.get("https://jsonplaceholder.typicode.com/posts")

  console.log(await req.status())
  console.log(await req.json()) 

  let response = await req.json()

  expect(req.status()).toBe(200)

  expect(response[0].title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")


})

test("verify POST API ", async ({ request }) => {

  let req = await request.post("https://jsonplaceholder.typicode.com/posts", {
    data: {
      "ID": "01000",
      "title": "demo POST QUERTY",
      "body": "THIS IS DEMO API TO CREATE A POST DATA ",
      "REESUT TYPE ": "POST"
    }
  })
  let responsepost = await req.json()
  console.log(responsepost)
  expect(req.status()).toBe(201)
  expect(responsepost.title).toEqual("demo POST QUERTY")
})


//.toBeOK() a automatic aseeration for api success status code

test("verify PUT API ", async ({ request }) => {

  let req = await request.put("https://jsonplaceholder.typicode.com/posts/1", {
    data: {
      "ID": "01000",
      "title": "demo POST QUERTY",
      "body": "THIS IS DEMO API TO CREATE A POST DATA ",
      "number":"987456"
     
    }
  })
  let responsepost = await req.json()
  console.log(responsepost)
  expect(req.status()).toBe(200)
  expect(responsepost.number).toEqual("123456")
})


test("test1",async({request})=>{

    const req= await request.get("https://jsonplaceholder.typicode.com/posts")
    console.log(req.status())


})