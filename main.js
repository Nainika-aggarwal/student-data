
var verifyRoll = function(roll){
    const rows = document.getElementsByTagName('tr');
    for (let i of rows) {
        if (i.children[1].innerHTML == roll) {
            return false;
        }
    }
    return true;
}

var deleteRow =() => {
    let t=document.getElementById("tableid");
    let n=t.getElementsByClassName("delete");
    for(let i=0;i<=n.length;i++)
        {
            if(n[i].checked)
            {
                t.deleteRow(i);
                i--;
                n.length--;
            }
        }
}

var edit = () => {
    const roll = prompt("Enter the roll number you want to edit");
    const rows = document.getElementsByTagName('tr');
    let j = 0;
    for (let i of rows) {
        if (i.children[1].innerHTML == roll) {
            const n = prompt("Enter new name");
            const o = prompt("Enter new passout year");
            const q = prompt("Enter new stream");

            if(o == null && o.trim( )== '' && q == null && q.trim() == '')
            {
                return;
            }
            i.children[2].innerHTML = n;
            i.children[3].innerHTML = o;
            i.children[4].innerHTML = q;
            return;
        }
        j++;
    }
    if (j == rows.length) {
        alert("No such rollno");
        return;
    }
}
var input_data = () => {

    let rows = "";
    const name = document.getElementById("name").value;
    const roll = document.getElementById("rollno").value;
    const year = document.getElementById("year").value;
    const stream = document.getElementById("stream").value;
    if( roll == null || /[^0-9]/.test(roll)){
        alert("Enter correct roll number");
        document.getElementById("rollno").value = "";
        return;
    }
    else if(verifyRoll(roll) == false){
        alert("Roll Number already present");
        return;
    }
    else if(name == null || /[^a-zA-Z]/.test(name)){
                alert("Enter correct Name");
                document.getElementById("name").value = "";
                return;
        }
    else if(year == null || /[^0-9]/.test(year)){
                alert("Enter correct Year");
                document.getElementById("year").value = "";
                return;
    }
    else if(stream == null || /[^a-zA-Z]/.test(stream)){
                alert("Enter correct Stream");
                document.getElementById("stream").value = "";
                return;
    }
    else if(name != null && name.trim() !== '' && roll != null && roll.trim() !== '' && year != null && year.trim() !== '' && stream != null && stream.trim() !== '')
    {
        $(`tbody`).append(`<tr><td>${name}</td><td>${roll}</td><td>${year}</td><td>${stream}</td><td><input class="delete" type="checkbox" /></td></tr>`);
    }
    else
    {
        window.alert("Enter Data correctly")
    }
    let frm = document.getElementsByName('form1')[0];
    frm.reset();
}
