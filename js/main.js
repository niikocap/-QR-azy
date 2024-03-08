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
function generateVCF(contact) {
  const vcf = `
  BEGIN:VCARD
  VERSION:3.0
  FN:${contact.name}
  TEL;TYPE=CELL:${contact.phoneNumber}
  EMAIL:${contact.email}
  END:VCARD
  `;
  return vcf.trim();
}

function generateVCFFile(contacts) {
  let vcfContent = 'data:text/vcard;charset=utf-8,';
  contacts.forEach(contact => {
    vcfContent += encodeURIComponent(generateVCF(contact)) + '%0A';
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