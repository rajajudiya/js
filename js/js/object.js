// const StudantData = document.getElementById("StudantData");
let student = [{
    fristname: "Raj",
    lastname: "Ajudiya",
    age: 17,
    gender: "male",
    address: {
        city: "surat",
        address: "amroli surat",
        state: "gujarat",
    },

    contact: "9499606395",
    email: "rajajudiya100@gmail.com",
}, {
    fristname: "deep",
    lastname: " patel",
    age: 23,
    gender: "male",
    address: {
        city: "surat",
        address: "vesu  surat",
        state: "gujarat",
    },

    contact: "9399505126",
    email: "deep@gmail.com",
}, {
    fristname: "harsh",
    lastname: " patel",
    age: 20,
    gender: "male",
    address: {
        city: "surat",
        address: "varachha  surat",
        state: "gujarat",
    },
    contact: "9499505567",
    email: "harsh@gmail.com",
}, {
    fristname: "jay",
    lastname: " kalathiya",
    age: 19,
    gender: "male",
    address: {
        city: "surat",
        address: "Amroli surat",
        state: "gujarat",
    },

    contact: "914689976",
    email: "jay@gmail.com",
}, {
    fristname: "smit",
    lastname: " parmar",
    age: 18,
    gender: "male",
    address: {
        city: "surat",
        address: "sudama chowk  surat",
        state: "gujarat",
    },

    contact: "914565888",
    email: "smit456@gmail.com",
}, {
    fristname: "raj",
    lastname: " dubay",
    age: 21,
    gender: "male",
    address: {
        city: "surat",
        address: "hirabaug surat",
        state: "gujarat",
    },
    contact: "9144667889",
    email: "raj123@gmail.com",
}, {
    fristname: "Rohit",
    lastname: " Sharma",
    age: 24,
    gender: "male",
    address: {
        city: "surat",
        address: "sudama chowk  surat",
        state: "gujarat",
    },

    contact: "914565888",
    email: "smit456@gmail.com",
}, {
    fristname: "Aarav",
    lastname: " Sharma",
    age: 24,
    gender: "male",
    address: {
        city: "surat",
        address: " udhna , surat",
        state: "gujarat",
    },

    contact: "9144567890",
    email: "Araav456@gmail.com",
}, {
    fristname: "prashant",
    lastname: " zala",
    age: 19,
    gender: "male",
    address: {
        city: "surat",
        address: " c- 816 dabholi , surat",
        state: "gujarat",
    },

    contact: "9192667890",
    email: "prashant@gmail.com",
}, {
    fristname: "Aditi",
    lastname: " patel",
    age: 20,
    gender: "femal",
    address: {
        city: "surat",
        address: " d- 991 Kataranga, surat",
        state: "gujarat",
    },

    contact: "91101231456",
    email: "Aditi@gmail.com",
}, {
    fristname: "mahesh",
    lastname: " saravaiya",
    age: 19,
    gender: "male",
    address: {
        city: "surat",
        address: "  c- 820 dabholi , surat",
        state: "gujarat",
    },

    contact: "1733121488",
    email: "mahesh123`  @gmail.com",
}, {
    fristname: "Rutam",
    lastname: " dabhi",
    age: 18,
    gender: "male",
    address: {
        city: "surat",
        address: " d- 991 Kataranga, surat",
        state: "gujarat",
    },

    contact: "9113035467",
    email: "Rutam@gmail.com",
}, {
    fristname: "bhavesh",
    lastname: "changani",
    age: 18,
    gender: "male",
    address: {
        city: "surat",
        address: " swaminarayan mandir amroli, surat",
        state: "gujarat",
    },

    contact: "4645677789",
    email: "changania@gmail.com",
}, {
    fristname: "Tushar",
    lastname: " Ahlier",
    age: 19,
    gender: "male",
    address: {
        city: "surat",
        address: "udhna junction, surat",
        state: "gujarat",
    },

    contact: "1234567892",
    email: "Tushar45@gmail.com",
}, {
    fristname: "Ajay",
    lastname: " makwana",
    age: 19,
    gender: "male",
    address: {
        city: "surat",
        address: "sitanaga, surat",
        state: "gujarat",
    },

    contact: "91101222145",
    email: "ajay78@gmail.com",
}, {
    fristname: "yash",
    lastname: " vakani",
    age: 18,
    gender: "male",
    address: {
        city: "surat",
        address: " d-19  Kataranga, surat",
        state: "gujarat",
    },

    contact: "9123456780",
    email: "yash@gmail.com",
}, {
    fristname: "het",
    lastname: "bhanderi",
    age: 17,
    gender: "male",
    address: {
        city: "surat",
        address: " Kataranga, surat",
        state: "gujarat",
    },

    contact: "91101231456",
    email: "Aditi@gmail.com",
}, {
    fristname: "jalapa",
    lastname: " patel",
    age: 17,
    gender: "female",
    address: {
        city: "surat",
        address: "mini bazar, surat",
        state: "gujarat",
    },

    contact: "9110123145",
    email: "jalpa@gmail.com",
}, {
    fristname: "Amrita",
    lastname: "domadiya",
    age: 17,
    gender: "female",
    address: {
        city: "surat",
        address: " d- 993, surat",
        state: "gujarat",
    },

    contact: "91101231456",
    email: "Amrita234@gmail.com",
}, {
    
    fristname: "Aarya",
    lastname: "ribadiya",
    age: 18,
    gender: "femal",
    address: {
        city: "surat",
        address: " d- 991 Kataranga, surat",
        state: "gujarat",
    },

    contact: "91101231456",
    email: "adajan123@gmail.com",
},]
student.forEach((object) => {

    StudantData.innerHTML += (`<div class="col-4"><div class="card p-2 rounded-3  ">
    <div class="d-flex mx-2 text-danger ">
    <h3>Name : ${object.fristname}
    </h3>
    <h3 class="mx-2">  ${object.lastname}
    </h3>
    </div>
    <h3>age :  ${object.age}
    
    </h3><h3>gender :  ${object.gender}
    </h3><h3>state : ${object.address.state}
    </h3><h3>city : ${object.address.city}
    </h3><h3>Address :  ${object.address.address}
    </h3><h3>contact :  ${object.contact}</h3><h3>
    email :  ${object.email}</h3></div></div>`);
});