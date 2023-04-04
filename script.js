for(let i = 0; i < 3; i++)
{
    let sectns = document.createElement("section");
    sectns.setAttribute("id",`${i}`);
    document.body.appendChild(sectns);
    if(i === 0) {
        let head = document.createElement("h1")
        let img = document.createElement("img")
        head.textContent = "My Favorite Composer";
        img.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/b/be/Sergei_Rachmaninoff_cph.3a40575.jpg")
        document.getElementById("0").appendChild(head)
        document.getElementById("0").appendChild(img);
    }
    else if(i === 1) {
        let para = document.createElement("p")
        let blockq = document.createElement("blockquote")
        let alink = document.createElement("a")
        para.textContent = "Sergei Vasilyevich Rachmaninoff[a][b] (1 April [O.S. 20 March] 1873 - 28"
         +"March 1943) was a Russian composer, virtuoso pianist, and conductor.";
        blockq.setAttribute("cite","https://en.wikipedia.org/wiki/Sergei_Rachmaninoff");
        blockq.textContent = "Rachmaninoff is widely considered one of the finest pianists of his day"
        +"and, as a composer, one of the last great representatives of Romanticism"
        +"in Russian classical music. Early influences of Tchaikovsky,"
        +"Rimsky-Korsakov, and other Russian composers gave way to a thoroughly"
        +"personal idiom notable for its song-like melodicism, expressiveness and"
        +"rich orchestral colours.";
        alink.setAttribute("href","https://en.wikipedia.org/wiki/Sergei_Rachmaninoff");
        alink.setAttribute("class","link");
        alink.textContent = "Learn more";
        document.getElementById("1").appendChild(para)
        document.getElementById("1").appendChild(blockq)
        document.getElementById("1").appendChild(alink)
        para.style.background = "beige"
        alink.style.background = "beige"
    }
    else {
        let head = document.createElement("h2");
        let ul = document.createElement("ul");
        for(let x = 0; x < 3; x++) {
            let li = document.createElement("li")
            ul.appendChild(li);
        }
        head.textContent = "Why is this my favorite composer?";
        let liElems = ul.querySelectorAll("li");


        liElems[0].textContent = "His music is intricate as it is meaningful"
        liElems[1].textContent = "He is very self consious aobut his music"
        liElems[2].textContent = "He crafted his music to express himself and his nationality"
        
        document.getElementById("2").appendChild(head);
        document.getElementById("2").appendChild(ul);

        ul.style.background = "beige"
    }
}


