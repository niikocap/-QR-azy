let index = 0;
let backLocation = "";
let infos = [
  {
    "for" : "East Rembo",
    "hotline" : [
      {
        name: "BRGY. EAST REMBO HOTLINE (BRGY HALL LOBBY)",
        phoneNumber : "7728-1588",
      },
      {
        name: "BRGY. EAST REMBO HOTLINE (BANTAY BAYAN)",
        phoneNumber : "8881-5397",
      },
      {
        name: "BRGY. EAST REMBO HOTLINE (BRGY HALL SECOND FLOOR )",
        phoneNumber : "8881 5385",
      },
      {
        name: "DRRM (DISASTER RISK REDUCTION AND MANAGEMENT) EAST REMBO",
        phoneNumber : "8651-3512",
      },
      {
        name: "BDRRM (BRGY DISASTER RISK REDUCTION AND MANAGEMENT) CAD HOTLINE",
        phoneNumber : "09683494625",
      },
      {
        name: "East Rembo Health Center",
        phoneNumber : "8832-6474",
      },
    ]
  },
  {
    "for" : "West Rembo",
    "hotline" : [
      {
        name: "PCPP (POLICE COMMUNITY PRECINT PEMBO) WEST REMBO",
        phoneNumber : "7755-9467",
      },
      {
        name: "C3 (Command Control and Communication Center) HOTLINE",
        phoneNumber : "8236-5790",
      },
      {
        name: "BDRRM (BRGY DISASTER RISK REDUCTION AND MANAGEMENT) CAD HOTLINE",
        phoneNumber : "09683494625",
      } 
    ]
  },
]

function simulate(){
  document.querySelector(".qr").style.display = "none"
  document.querySelector(".bgy").style.display = "grid"
}

function showHotline(id){
  document.querySelector(".bgy").style.display = "none"
  document.querySelector(".main-screen").style.display = "grid"
  index = id;
  backLocation = "home"
  document.querySelector(".back").style.display = "grid"
}

function showBigOneInfo(){
  document.querySelector(".barangay").style.display = "none"
  document.querySelector(".bigone").style.display = "grid"
  backLocation = "barangay"
  document.querySelector(".back").style.display = "none"
  document.querySelector(".back1").style.display = "grid"
}

function  back(){
  if(backLocation == "home"){
    backLocation = "";
    document.querySelector(".main-screen").style.display = "none"
    document.querySelector(".bgy").style.display = "grid"
    document.querySelector(".back").style.display = "none"
  }else if(backLocation == "barangay"){
    document.querySelector(".bigone").style.display = "none"
    document.querySelector(".barangay").style.display = "grid"
    document.querySelector(".back").style.display = "grid"
    backLocation = "home"
  }
}
// Generating contacts
function generateVCFFile(contacts) {
  let vcard = '';
    contacts.forEach(contact => {
       vcard += "BEGIN:VCARD\nVERSION:3.0\nFN:" + contact.name + "\nTEL;TYPE=CELL:" + contact.phoneNumber + "\nEND:VCARD\n";
    });

    return vcard;
}

function downloadContacts(){
  const vcfFileContent = generateVCFFile(infos[index].hotline);
  let blob = new Blob([vcfFileContent], { type: "text/vcard" });
  let url = URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = `${infos[index].for}.vcf`;
  downloadLink.textContent = `${infos[index].for}`;
  downloadLink.click();
}

/*
const contacts = [
  { name: 'John Doe', phoneNumber: '1234567890', email: 'john@example.com' },
  { name: 'Jane Smith', phoneNumber: '0987654321', email: 'jane@example.com' }
];
*/

/*
function domReady(fn) {
  if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
  ) {
      setTimeout(fn, 1000);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}

let scanning = true;
domReady(function () {

  // If found you qr code
  function onScanSuccess(decodeText, decodeResult) {
      if(scanning){
        scanning = false;
        getBarangays(decodeText + decodeResult);
      }
  }

  let htmlscanner = new Html5QrcodeScanner(
      "my-qr-reader",
      { fps: 10, qrbos: 250 }
  );
  htmlscanner.render(onScanSuccess);
});

function getBarangays(id){
  let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      try {
        infos = JSON.parse(req.responseText);
        scanned = true;
        infos = infos.record
        document.querySelector(".barangay").style.display = "grid"
        document.querySelector(".qr").style.display = "none"
      } catch (e) {
      
      }
      scanning = true;
    }
  };

  req.open("GET", "https://api.jsonbin.io/v3/b/"+id+"/latest", true);
  req.setRequestHeader("X-Master-Key", "$2a$10$qk/TyqoLHRIEc/al97jGQO3nKyBD0X94btk/oskAhE/MI5sKXIofW");
  req.send();
}
*/