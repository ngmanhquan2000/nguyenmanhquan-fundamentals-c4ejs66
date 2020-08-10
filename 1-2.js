let A1 = []
let A2 = []
let A3 = []

function Nhap() {
    let A1lengh = prompt("Nhập vào số phần tử của A1")
    for (let i = 0; i < A1lengh; i++) {
        let tmp = prompt("Nhập vào giá trị phần tử ")
        A1.push(tmp)
    }
    console.log(A1)

    let A2lengh = prompt("Nhập vào số phần tử của A2")
    for (let i = 0; i < A2lengh; i++) {
        let tmp = prompt("Nhập vào giá trị phần tử ")
        A2.push(tmp)
    }
    console.log(A2)
}



Nhap()
for (let i = 0; i < A1.length; i++) {
    for (let j = 0; j < A2.length; j++) {
        if (A1[i] != A2[j]) {
            console.log(A1[i])
        }
    }
}