const  {add , subtract ,multiply} = require ("./math_operation")



test (" should ADD numbers" ,() => {
    const result =add (7,2)
    const expected= 9
    expect(result).toBe(expected)
})

test (" should multiply numbers" ,() => {
    const result =multiply (7,2)
    const expected= 14
    expect(result).toBe(expected)
})


// to run main.js :===> node --require ./setup_global.js main.js