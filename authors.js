



const authors = [
    {
        id: "anna-nowak",
        name: "Anna Nowak",
        role: "Redaktor naczelna",
        class: "3A",
        avatar: "https://picsum.photos/200/300.webp",
        bio: "Lubi reportaże i fotografię. Prowadzi dział Kultura.",
        email: "anna.nowak@gazetka.edu",
        socials: { instagram: "#", x: "#", github: "#" },
        interests: ["reportaż", "film", "fotografia"],
    },
    {
        id: "maskiu",
        name: "maksiu sosna",
        role: "Dziennikarz sportowy",
        class: "2C",
        avatar: "https://picsum.photos/200/300.webp",
        bio: "Biega, gra w siatkówkę, pisze relacje z meczów.",
        email: "bartek.kowalski@gazetka.edu",
        socials: { instagram: "#", x: "#",github: "#" },
        interests: ["siatkówka", "bieganie", "analiza"],
    },
    {
        id: "celina-maj",
        name: "Celina Maj",
        role: "Popularnonaukowa",
        class: "1B",
        avatar: "https://picsum.photos/200/300.webp",
        bio: "Zafascynowana kosmosem i biologią molekularną.",
        email: "celina.maj@gazetka.edu",
        socials: { instagram: "#", x: "#", github:"#" },
        interests: ["astronomia", "biologia", "czytanie"],
    },
    {
        id: "daniel-wisniewski",
        name: "Daniel Wiśniewski",
        role: "Reporter szkolny",
        class: "2A",
        avatar: "https://picsum.photos/200/300.webp",
        bio: "Na tropie wszystkiego, co dzieje się w szkole.",
        email: "daniel.wisniewski@gazetka.edu",
        socials: {instagram: "#" , x: "#" ,github: "#" },
        interests: ["wydarzenia", "wywiady", "podcasty"],
    },
    {
        id: "ewa-lewandowska",
        name: "Ewa Lewandowska",
        role: "Felietonistka",
        class: "4D",
        avatar: "https://picsum.photos/200/300.webp",
        bio: "Pisze opinie i felietony o aktualnych tematach.",
        email: "ewa.lewandowska@gazetka.edu",
        socials: { instagram: "#" ,x: "#" ,github: "#" },
        interests: ["publicystyka", "muzyka", "teatr"],
    },
];
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