

let numberOfFlips = 0;
const simpleFlipCoinFunction = function () {
    let x = 0;
    let result = "";

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            x = Math.ceil(Math.random() * 2)
            if (x == 1) { resolve("fej") }
            if (x == 2) { reject("írás") }
        }, 100)
    })
    myPromise.then(data => { document.querySelector("#simpleHeadOrTail").innerHTML = data; console.log(data) })
        .catch(err => { document.querySelector("#simpleHeadOrTail").innerHTML = err; console.log(err) });
    numberOfFlips += 1;
    document.querySelector("#spanForNumberOfFlips").innerHTML = numberOfFlips;
}

const flipCoinFunctionWithAsync = function () {
    score = document.querySelector("#headOrTailWithAsync")
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            x = Math.ceil(Math.random() * 2);
            if (x == 1) { resolve("fej") };
            if (x == 2) { reject("írás") }
        }, 500)
    })
    score.innerHTML = '<span style="color:grey">kérés feldolgozása</span>'
    async function myAwait() {
        try {
            const value = await myPromise;
            score.innerHTML = value;
        }
        catch (err) {
            score.innerHTML = err
        }
    }
    myAwait();
    //console.log(myPromise)

}

let won = 0;
let flips = 1;
const flipCoinFunction = function () {
    let x = 0;
    result = "";
    let score = document.querySelector("#headOrTail");
    score.innerHTML = "";
    document.querySelector("#youWon").innerHTML = "";
    const myPromise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            x = Math.ceil(Math.random() * 2); console.log(x); flips += 1;
            if (x == 1) { resolve("fej - ") }
            if (x == 2) { reject("írás : nem nyert") }
        }, 100);

    })

    myPromise1.then(data => {
        console.log(data); result += data;

        const myPromise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                x = Math.ceil(Math.random() * 2); console.log(x);
                if (x == 1) { resolve("fej - ") }
                if (x == 2) { reject("írás : nem nyert") }
            }, 100);

        })
        myPromise2.then(data => {
            console.log(data); result += data;

            const myPromise3 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    x = Math.ceil(Math.random() * 2); console.log(x);
                    if (x == 1) { resolve("fej - ") }
                    if (x == 2) { reject("írás : nem nyert") }
                }, 100);

            })
            myPromise3.then(data => {
                console.log(data); result += data;

                const myPromise4 = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        x = Math.ceil(Math.random() * 2); console.log(x);
                        if (x == 1) { resolve("fej - ") }
                        if (x == 2) { reject("írás : nem nyert") }
                    }, 100);

                })
                myPromise4.then(data => {
                    console.log(data); result += data;

                    const myPromise5 = new Promise((resolve, reject) => {
                        setTimeout(() => {
                            x = Math.ceil(Math.random() * 2); console.log(x);
                            if (x == 1) { resolve("fej : Ön nyert!"); won += 1 }
                            if (x == 2) { reject("írás : majdnem nyert ...") }
                        }, 100);

                    })
                    myPromise5.then(data => {
                        console.log(data); result += data; score.innerHTML = result;
                        document.querySelector("#youWon").innerHTML = "NYERT"
                    }).catch(err => {
                        console.log(err);
                        result += err; score.innerHTML = result
                    })

                }).catch(err => { console.log(err); result += err; score.innerHTML = result })

            }).catch(err => { console.log(err); result += err; score.innerHTML = result })

        }).catch(err => { console.log(err); result += err; score.innerHTML = result })

    }).catch(err => { console.log(err); result += err; score.innerHTML = result })
    document.querySelector("#wonNumber").innerHTML = won;
    document.querySelector("#numberOfFlips").innerHTML = flips;

}

let won2 = 0;
let flips2 = 1;
let value_ = 0;
const flipCoinFunctionWithAwait = function () {
    let x = 0;
    result = "";
    let score = document.querySelector("#headOrTail2");
    score.innerHTML = "";

    //score.innerHTML = '<span style="color:grey">kérés feldolgozása</span>'
    let step = 0;
    const myFunction = function () {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                x = Math.ceil(Math.random() * 2); console.log(x); flips2 += 1;
                if (x == 1) { resolve("fej - ") }
                if (x == 2) { reject("írás") }
            }, 100);
        })

        async function myAwait() {
            try {
                value_ = await myPromise;
                console.log(value_)
                score.innerHTML += value_;
                //myFunction();
            }
            catch (err) {
                score.innerHTML += err;
            }
        }
        console.log(value_)
        myAwait();
        console.log(value_)
        step = step + 1;
        document.querySelector("#numberOfFlips2").innerHTML = step;
    }
    myFunction();
}

const weatherApiFunction = function () {
    const myTemperature = document.querySelector("#temperature");
    const myPressure = document.querySelector("#pressure");
    const fetchInit = {
        method: "GET",
        headers: new Headers(),
        mode: "cors",
        cache: "default"
    }
    const myFetch = fetch("http://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&APPID=664b47be53a8259005e05686937f61d4", fetchInit)
    myFetch.then(data => data.json()).then(data => {
        myTemperature.innerHTML = (data.main.temp - 272.15).toFixed(1);
        myPressure.innerHTML = data.main.pressure
    }).catch(err => console.log(err))
}

let a = ""
const quotationFromBibleFunction = function () {
    const quotation = document.querySelector("#quotationFromBible");
    quotation.innerHTML = "kérés feldolgozás alatt"
    const fetchInit = {
        method: "GET",
        mode: "cors",
        headers: new Headers,
        cache: "default"
    }
    const myFetch = fetch("http://quotes.rest/bible/verse.json", fetchInit);


    myFetch.then(data => data.json()).catch(err => console.log(err))
        .then(data => {
            a = data;
            console.log(a);
            if (data.contents == undefined) {
                quotation.innerHTML = `hibakód: ${data.error.code}, üzenet: ${data.error.message}`;
                console.log(data);
            }
            else { quotation.innerHTML = data.contents.verse; console.log(data) }
        })
        .catch(err => {
            if (err.contents == undefined) {
                quotation.innerHTML = `hibakód: ${err.error.code}, üzenet: ${err.error.message}`;
                console.log(err);
            }
            else {
                console.log(err);
                quotation.innerHTML = err.contents.verse;
            }



            console.log(err); quotation.innerHTML = "hiba"
        })
}

let value = ""
const quotationFromBibleFunctionWithAwait = function () {
    const quotation = document.querySelector("#quotationFromBible2");
    quotation.innerHTML = "kérés feldolgozás alatt"
    const fetchInit = {
        method: "GET",
        mode: "cors",
        headers: new Headers,
        cache: "default"
    }
    const myFetch = fetch("http://quotes.rest/bible/verse.json", fetchInit);
    async function myAwait() {
        try {
            value = await myFetch;
            value = await value.json();

            if (value.contents == undefined) {
                console.log(value.error.code)
                console.log(value.error.message)
                console.log(value)
                quotation.innerHTML = `hibakód: ${value.error.code}, üzenet: ${value.error.message}`
            }
            else { quotation.innerHTML = value.contents.verse }

        }
        catch (err) {
            console.log(err)
            quotation.innerHTML = `hibakód: ${value.error.code}, üzenet: ${value.error.message}`
        }
    }
    myAwait();
}

const weatherApiFunctionWithAwait = function () {
    const myTemperature = document.querySelector("#temperature2");
    const myPressure = document.querySelector("#pressure2");
    myTemperature.innerHTML = "feldolgozás alatt";
    myPressure.innerHTML = "feldolgozás alatt";
    const fetchInit = {
        method: "GET",
        headers: new Headers(),
        mode: "cors",
        cache: "default"
    }
    const myFetch = fetch("http://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&APPID=664b47be53a8259005e05686937f61d4", fetchInit)

    async function myAwait() {
        try {
            value = await myFetch;
            value = await value.json();
            myTemperature.innerHTML = value.main.temp;
            myPressure.innerHTML = value.main.pressure;
        }
        catch (err) {
            console.log("error")
        }
    }
    myAwait();
}

const sendingData = function () {
    const content = document.querySelector("#inputForSendingData").value;
    console.log("content: ", content);
    document.querySelector("#postedData").innerHTML = "kérés feldolgozása folyamatban";

    let data = {
        body: content,
    };
    const fetchInit = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        body: JSON.stringify(data)
    }

    const myFetch = fetch("https://jsonplaceholder.typicode.com/posts", fetchInit)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.querySelector("#postedData").innerHTML = data.body
        });
}

const myFunction1 = function () {
    let x = 0;
    document.querySelector("#myScreen1").innerHTML = "adatok feldolgozása folyamatban";
    for (let i = 0; i < 1000000000; i++) {
        x = x + 1;
   }
    document.querySelector("#myScreen1").innerHTML = x;

}


const myFunction4 = function () {
    let x = 0;
    document.querySelector("#myScreen4").innerHTML = "adatok feldolgozása folyamatban";
    console.log("egy");
    const myPromise = new Promise((resolve) => {
        console.log("kettő");
        setTimeout(() => {
            console.log("három");
            for (let i = 0; i < 1000000000; i++) {
                x = x + 1;
            }
            resolve(x);
            console.log("négy");
        }, 0)
        console.log("öt");

    })
    /*async function myAwait() {
        const value = await myPromise;
        document.querySelector("#myScreen4").innerHTML = value;
    }
    myAwait();*/
    console.log("hat");
    myPromise.then(data=>{document.querySelector("#myScreen4").innerHTML =data; console.log("hét");})
}


