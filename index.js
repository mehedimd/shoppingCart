const arr = [];

function myFunc(x) {
    let myLength = x.length
    console.log(myLength)

    document.querySelector('#total-product').innerText = myLength;

    for (let i = 0; i < myLength; i++) {
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td>$(heading)</td>
        <td></td>
       `
    }
}

function display(x) {


    let heading = x.parentNode.children[0].innerText;

    let price = x.parentNode.children[1].children[0].innerText;

    // console.log("product name is : " + heading + " product price is : " + price);

    const obj = {
        heading: heading,
        price: price
    }
    arr.push(obj);


    myFunc(arr);

}