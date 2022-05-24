function mygit() {

    bDate = document.getElementById("age").value;
    var BornDate = new Date(bDate);
    var now = new Date();

    var diffYear = now.getFullYear() - BornDate.getFullYear();

    let a = (" Your age is: " + diffYear + " Years ");

    document.getElementById("result").innerHTML = a;
}