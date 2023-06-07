///////QUESTION NO 1

function displayFormData() {
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    
    document.getElementById('result').innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
    `;
}

/////////QUESTION NO 2

function showDetails(itemIndex) {
    let detailsDiv = document.getElementById('details-' + itemIndex);
    let showMoreBtn = document.getElementById('show-more-' + itemIndex);
    
    if (detailsDiv.style.display === 'none') {
        detailsDiv.style.display = 'block';
        showMoreBtn.innerHTML = 'Read less';
    } else {
        detailsDiv.style.display = 'none';
        showMoreBtn.innerHTML = 'Read more';
    }
}


////////////QUESTION NO 3

let currentEditIndex = -1;
        
function addStudent() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let grade = document.getElementById('grade').value;
    
    if (name === '' || age === '' || grade === '') {
        alert('Please fill in all the fields.');
        return;
    }
    
    if (currentEditIndex === -1) {
       
        let table = document.getElementById('studentTable');
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        
        cell1.innerHTML = name;
        cell2.innerHTML = age;
        cell3.innerHTML = grade;
        cell4.innerHTML = '<button class="delete-button" onclick="deleteRow(this)">Delete</button> ' +
                          '<button class="edit-button" onclick="editRow(this)">Edit</button>';
    } else {
       
        let table = document.getElementById('studentTable');
        let row = table.rows[currentEditIndex];
        row.cells[0].innerHTML = name;
        row.cells[1].innerHTML = age;
        row.cells[2].innerHTML = grade;
        row.cells[3].innerHTML = '<button class="delete-button" onclick="deleteRow(this)">Delete</button> ' +
                                  '<button class="edit-button" onclick="editRow(this)">Edit</button>';
        
        currentEditIndex = -1;
    }
    
   
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('grade').value = '';
}

function deleteRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editRow(button) {
    let row = button.parentNode.parentNode;
    let name = row.cells[0].innerHTML;
    let age = row.cells[1].innerHTML;
    let grade = row.cells[2].innerHTML;
    
    
    document.getElementById('name').value = name;
    document.getElementById('age').value = age;
    document.getElementById('grade').value = grade;
    
    document.getElementById('hiddenForm').style.display = 'block';
    currentEditIndex = row.rowIndex;
}

////////////////ZOOMIN AND ZOOMOUT..


function zoomIn() {
    let paragraph = document.getElementById("paragraph");
    let fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
    fontSize += 10;
    paragraph.style.fontSize = fontSize + "px";
  }

  function zoomOut() {
    let paragraph = document.getElementById("paragraph");
    let fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
    fontSize -= 10;
    paragraph.style.fontSize = fontSize + "px";
  }

  



