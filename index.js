add = document.getElementById('add');

add.addEventListener('click', function () {
  Name = document.getElementById("name").value;
  password = document.getElementById("password").value;
  if (localStorage.getItem('itemjson') == null) {
    itemjsonarry = [];
    itemjsonarry.push([Name, password]);
    localStorage.setItem('itemjson', JSON.stringify(itemjsonarry))
  }
  else {
    itemjsonarrystr = localStorage.getItem('itemjson')
    itemjsonarry = JSON.parse(itemjsonarrystr)
    itemjsonarry.push([Name, password]);
    localStorage.setItem('itemjson', JSON.stringify(itemjsonarry))

  }

  let tbody = document.getElementById('tbody');
  let str = "";
  itemjsonarry.forEach((element, index) => {
    str += `
    <tr>
    <td class="padding">${index + 1}</td>
    <td class="padding">${element[0]}</td>
    <td class="padding">${element[1]}</td>
    <td><button type="submit" class="btn button">Delete</button></td>
    </tr>
    `
  });
  tbody.innerHTML = str;
})
function clicked(){
  
  if (localStorage.getItem('itemjson')==localStorage.getItem('itemjson')){
    localStorage.clear('itemjson')

    let con =confirm('do you want to refreash :')
    if(con){
      location.href = 'http://127.0.0.1:5500/index.html'
    }


  }

   
}
