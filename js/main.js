let index = 0;
let infos = [
  {
    "for" : "East Rembo",
    "infos" : "",
    "hotline" : [
      {
        name: "BRGY. EAST REMBO HOTLINE",
        phoneNumber : "7728-1588/8881-5397 (85)",
        email : ""
      },
      {
        name: "DRRM (DISASTER RISK REDUCTION AND MANAGEMENT) EAST REMBO",
        phoneNumber : "8651-3512",
        email : ""
      },
      {
        name: "BDRRM (BRGY DISASTER RISK REDUCTION AND MANAGEMENT) CAD HOTLINE",
        phoneNumber : "09683494625",
        email : ""
      },
      {
        name: "East Rembo Health Center",
        phoneNumber : "8832-6474",
        email : ""
      },
    ]
  },
  {
    "for" : "West Rembo",
    "infos" : "",
    "hotline" : [
      {
        name: "PCPP (POLICE COMMUNITY PRECINT PEMBO) WEST REMBO",
        phoneNumber : "7755-9467",
        email : ""
      },
      {
        name: "C3 (Command Control and Communication Center) HOTLINE",
        phoneNumber : "8236-5790",
        email : ""
      },
      {
        name: "BDRRM (BRGY DISASTER RISK REDUCTION AND MANAGEMENT) CAD HOTLINE",
        phoneNumber : "09683494625",
        email : ""
      } 
    ]
  },
]

function simulate(){
  document.querySelector(".qr").style.display = "none"
  document.querySelector(".barangay").style.display = "grid"
}

function showHotline(id){
  document.querySelector(".barangay").style.display = "none"
  document.querySelector(".main-screen").style.display = "grid"
  index = id;
}

// Generating contacts
function generateVCFFile(contacts) {
    let vcfContent = 'data:text/vcard;charset=utf-8,';
    contacts.forEach(contact => {
      vcfContent += 'BEGIN:VCARD\n';
      vcfContent += `VERSION:4.0\n`;
      vcfContent += `FN:${contact.name}\n`;
      vcfContent += `TEL;TYPE=CELL:${contact.phoneNumber}\n`;
      vcfContent += `EMAIL:${contact.email}\n`;
      vcfContent += 'END:VCARD\n';
    });
    return vcfContent;
}

function downloadContacts(){
  const vcfFileContent = generateVCFFile(infos[index].hotline);
  const downloadLink = document.createElement('a');
  downloadLink.href = vcfFileContent;
  downloadLink.download = `${infos[index].for}.vcf`;
  downloadLink.click();
}

/*
const contacts = [
  { name: 'John Doe', phoneNumber: '1234567890', email: 'john@example.com' },
  { name: 'Jane Smith', phoneNumber: '0987654321', email: 'jane@example.com' }
];
*/
