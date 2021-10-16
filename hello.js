const arr = ["5","2","3"];
const sorted = arr.sort((a,b)=>{
    return(a-b);
});

//console.log("sorted", arr);
//console.log(typeof(10));

const users = [
    {
        "name": "Luffy",
        "city": "Ahmedabad",
        "countryCode": "IND",
        "friends": [
            {
                "name": "Emma"
            },
            {
                "name": "Gabi"
            }
        ]
    },
    {
        "name": "Gabi",
        "city": "New York",
        "countryCode": "USA",
        "friends": [
            {
                "name": "Luffy"
            },
            {
                "name": "Norman"
            }
        ]
    },
    {
        "name": "Emma",
        "city": "Vadodara",
        "countryCode": "IND",
        "friends": [
            {
                "name": "Norman"
            }
        ]
    },
    {
        "name": "Norman",
        "city": "Vadodara",
        "countryCode": "IND",
        "friends": [
            {
                "name": "Emma"
            }
        ]
    }
]

const createFilteredArray = (inputArray, isValid) => {
    const resultArray = [];
    for(let i = 0; i < inputArray.length; i++) {

        //ToDo Implement required logic
        //Hint : if user isValid store in result
        const a=isValid(inputArray[i])
        if( a==true)
        {
            resultArray.push(inputArray[i]);
        }
        

    }
    return resultArray;
}

const findUsersWhoseFriendIsNorman = (user) =>{

    
}
const findUsersFromINDIA = (user) => {
    // TODO return true or false based on given condtion
    if( user.countryCode == "IND")
    {
        return true ;
    }
 
}

//Todo: Write findUsersWhoseFriendIsNorman
//Hint : Write similar function as above with requried logic

const prettyConsoleLog = (message, data) => console.log(message, JSON.stringify(data, null, 4))
prettyConsoleLog("findUsersFromINDIA", createFilteredArray(users, findUsersFromINDIA));
prettyConsoleLog("findUsersWhoseFriendIsNorman", createFilteredArray(users, findUsersWhoseFriendIsNorman));

