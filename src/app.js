import { MyForm } from './formComponent'
let name = ""
let gender = ""
let region = ""
let type = []
function populateRegion() {
    var obj = {
        Regions: [
            {
                "regionName": "New york",
                "regionValue": "New York"
            },
            {
                "regionName": "Alaska",
                "regionValue": "Alaska"
            },
            {
                "regionName": "Amsterdam",
                "regionValue": "Amsterdam"
            }
        ]
    };
    var optionHtml = '<option selected disabled value="">Choose the region to apply</option>'
    for (var i = 0; i < obj.Regions.length; i++) {
        optionHtml += '<option value=' + obj.Regions[i]['regionValue'] + '>' + obj.Regions[i]['regionName'] + '</option>';
        document.getElementById('userRegion').innerHTML = optionHtml;
    }
}
document.body.onload = populateRegion();
function handleSubmit(event) {
    event.preventDefault();
    name = document.getElementById('username').value
    gender = document.querySelector('input[name="gender"]:checked').value
    region = document.getElementById('userRegion').options[document.getElementById('userRegion').selectedIndex].text;
    let checkboxes = document.querySelectorAll('input[name="hobbies"]:checked')
    for (var i = 0; i < checkboxes.length; i++) {
        type.push(checkboxes[i].value)
    }

    const myForm = new MyForm(name, gender, region, type);
    var object = {};
    console.log(myForm.getInfo());
    object = myForm.getInfo();
    var jsonOb = JSON.stringify(object);
    console.log(jsonOb);
    activateSavedTab(object);
}
function activateSavedTab(object) {
    var sel = document.querySelector('#userUser');
    document.getElementById('uname').innerText = object.name
    document.getElementById('ustatus').innerText = object.gender
    document.getElementById('uregion').innerText = object.region
    document.getElementById('utype').innerText = object.type

    bootstrap.Tab.getOrCreateInstance(sel).show();
}
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);



