let A1 = []
let A2 = []

function Nhap() {
    let A1length = prompt("Nhập vào số phần tử của A1")
    for (let i = 0; i < A1length; i++) {
        let tmp = Number(prompt("Nhập vào giá trị phần tử "))
        A1.push(tmp)
    }
    console.log(A1)

}

function Kiemtra() {
    for (let i = 0; i < A1.length; i++) {
        if (A1[i] % 2 == 0) {
            A2.push(A1[i])
        }
    }
    console.log(A2)
}

Nhap()
Kiemtra()