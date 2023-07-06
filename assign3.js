function addIt(){
    var tb1 = document.getElementById("myTable");     
    var row = tb1.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = document.getElementById("bname").value;
    cell2.innerHTML = document.getElementById("oname").value;
    cell3.innerHTML = document.getElementById("tin").value;
    cell4.innerHTML = document.getElementById("tout").value;
    document.getElementById("bname").value='';
    document.getElementById("oname").value='';
    document.getElementById("tin").value='';
    document.getElementById("tout").value='';
}