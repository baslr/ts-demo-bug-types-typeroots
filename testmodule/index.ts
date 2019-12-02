

let abc: MyInterface = { a: false, b: false };
abc.a = true;

function mytestfunction(): MyInterface {
    console.log('you called mytestfucnction');
    return abc;
}

export {
    mytestfunction
};
