function test (title ,callback) {
    try {
        callback ()
        console.log(`ok -_- ${title}`)
    } catch {
        console.log(`not ok XXX ${title}`)
        console.error(error)
    
    }
    }
    
    function expect (result) {
    
        return {
    
            toBe:expected=> {
                if (result!== expected) {
                    throw new Error (`${result} IS NOT EQUAL TO ${expected}`)
                }
            }
        }
    }

    global.test = test 
    global.expect = expect 
