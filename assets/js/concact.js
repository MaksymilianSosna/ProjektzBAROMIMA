const site = {
  meta: {
    title: "Gazetka Szkolna Online",
    description: "Artykuły uczniów o kulturze, sporcie, nauce i życiu szkoły.",
    language: "pl-PL",
  },
  nav: [
    { label: "Start", path: "index.html" },
    { label: "O autorach", path: "autorzy.html" },
    { label: "Kategorie", path: "kategorie.html" },
    { label: "Aktualności", path: "aktualnosci.html" },
    { label: "Kontakt", path: "kontakt.html" },
  ],
  social: [
    { id: "facebook", label: "Facebook", url: "#" },
    { id: "instagram", label: "Instagram", url: "#" },
  ],
  contact: {
    email: "redakcja@gazetka.edu",
    phone: "+48 600 000 000",
    address: "ul. Szkolna 1, 00-000 Miasto",
    mapImage: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.870871121654!2d14.438072761717336!3d35.8952877702937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e502f96fff9bf%3A0x79c098d200eae6d8!2sMaypole%20Attard!5e0!3m2!1spl!2spl!4v1761741673481!5m2!1spl!2spl%22%20width=%22400%22%20height=%22300%22",
  },
};

let section = document.querySelector("section");

function addText(){
    for(i=0; site.contact.length; i++){
        let div = document.createElement("div");
        let pOne = document.createElement("p");
        let pTwo = document.createElement("p");
        let pThree = document.createElement("p");
        let iframe = document.createElement("iframe");

        pOne.innerText = site.contact[i].email;
        pTwo.innerText = site.contact[i].phone;
        pThree.innerText = site.contact[i].address;
        iframe.src = site.contact[i].mapImage; 

        section.appendChild(div);
        div.appendChild(pOne);
        div.appendChild(pTwo);
        div.appendChild(pThree);
        div.appendChild(iframe);


    }
}

addText();

    let main = document.querySelector("main");

    function createAuthor() {
    for (let i = 0; i < authors.length; i++) {
        const section1 = document.createElement("section");
        const h1_name = document.createElement("h1");
        const p_role = document.createElement("p");
        const p_class = document.createElement("p");
        const img_avatar = document.createElement("img");
        const p_email = document.createElement("p");
        const p_socials = document.createElement("p");
        const p_interests = document.createElement("p");
        const p_bio = document.createElement("p");
        h1_name.innerText = authors[i].name;
        p_role.innerText = authors[i].role;
        p_class.innerText = authors[i].class;
        img_avatar.src = authors[i].avatar;
        p_email.innerText = authors[i].email;
        // if(authors[i].socials.instagram == undefined){
        //     p_socials.innerText.authors[i].socials.instagram = "";
        // }
        // else if(authors.socials.x !== undefined){
        //     p_socials.innerText.authors[i].socials.x = "";
        // }
        // else if(authors.socials.github !== undefined){
        //     p_socials.innerText.authors[i].socials.github = "";
        // }
        p_socials.innerText = authors[i].socials.instagram + authors[i].socials.x + authors[i].socials.github;
        p_interests.innerText = authors[i].interests;
        p_bio.innerText = authors[i].bio;
        section1.appendChild(h1_name);
        section1.appendChild(p_role);
        section1.appendChild(p_class);
        section1.appendChild(img_avatar);
        section1.appendChild(p_email);
        section1.appendChild(p_socials);
        section1.appendChild(p_interests);
        section1.appendChild(p_bio);
        main.appendChild(section1);
    }
   
}
 createAuthor();

