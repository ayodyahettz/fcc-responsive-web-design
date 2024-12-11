// function openModal(title, description, imgSrc, author, date) {
//   document.getElementById('modalTitle').textContent = title;
//   document.getElementById('modalDesc').textContent = description;
//   document.getElementById('modalImg').src = imgSrc;
//   document.getElementById('modalAuthor').textContent = author;
//   document.getElementById('modalDate').textContent = date;
//   document.getElementById('productModal').style.display = 'flex';
// }

// function closeModal() {
//   document.getElementById('productModal').style.display = 'none';
// }

// window.onclick = function (event) {
//   const modal = document.getElementById('productModal');
//   if (event.target === modal) {
//       closeModal();
//   }
// };


const latestBooks =[
    {
      title:"The Fourth Wing",
      description: `Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: dragon riders.
      But when you’re smaller than everyone else and your body is brittle, death is only a heartbeat away...because dragons don’t bond to “fragile” humans. They incinerate them.    
      With fewer dragons willing to bond than cadets, most would kill Violet to better their own chances of success. The rest would kill her just for being her mother’s daughter—like Xaden Riorson, the most powerful and ruthless wingleader in the Riders Quadrant.
      She’ll need every edge her wits can give her just to see the next sunrise.
      Yet, with every day that passes, the war outside grows more deadly, the kingdom's protective wards are failing, and the death toll continues to rise. Even worse, Violet begins to suspect leadership is hiding a terrible secret.
      Friends, enemies, lovers. Everyone at Basgiath War College has an agenda—because once you enter, there are only two ways out: graduate or die`,
      image: "./assets/tfw-card.jpg",
      author: "Rebecca Yarros",
      published: "2023"
    } , 
    {
      title:"The Winds of Winter",
      description: `The Winds of Winter is the planned sixth novel in the epic fantasy series A Song of Ice and Fire by American writer George R. R. Martin. The manuscript is expected to be over 1,500 pages in length. Its writing started no later than 2010, and it has been delayed several times, such that Martin has refrained from making further hard estimates for the novel's final release date. Martin stated in October 2022 that he had completed approximately three quarters of the novel, estimating that he had written approximately 1,100 to 1,200 pages, and had roughly 400 to 500 pages left. Martin has mentioned it is “probable” he will never finish Winds of Winter. He gave a similar estimate in November 2023, saying that he was "struggling" with the manuscript. In December 2024, he stated that he might never finish the novel or book series, but did reaffirm that it was his highest priority and had no plans to retire.`,
      image: "./assets/twow-card.jpg",
      author: "George R. R. Martin",
      published: "TBD"
    },
    {
      title:"Catch-22",
      description: `Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.`,
      image: "./assets/c22-card.jpg",
      author: "Joseph Heller",
      published: "1961"
    },
    {
      title:"The Witcher: The Last Wish",
      description: `Geralt the Witcher—revered and hated—is a man whose magic powers, enhanced by long training and a mysterious elixir, have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary murderer: his targets are the multifarious monsters and vile fiends that ravage the land and attack the innocent.
  
      But not everything monstrous-looking is evil and not everything fair is good... and in every fairy tale there is a grain of truth.`,
      image: "./assets/tw-card.jpg",
      author: "Andrezej Sapkowski",
      published: "1993"
    },
    {
      title:"American Psycho",
      description: `Patrick Bateman is twenty-six and works on Wall Street. He is handsome, sophisticated, charming and intelligent. He is also a psychopath. Taking us to head-on collision with America's greatest dream—and its worst nightmare—American Psycho is a bleak, bitter, black comedy about a world we all recognize but do not wish to confront.`,
      image: "./assets/ap-card.jpg",
      author: "Brett Easton Ellis",
      published: "1980" 
    }
  ];
  
  const popularBooks =[
    {
      title:"The Lord of the Rings",
      description: `One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them. In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.
      From Sauron's fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion.
      When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom.
      The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider.`,
      image: "./assets/lotr-card.jpg",
      author: "J.R.R. Tolkien",
      published: "1954"
    } , 
    {
      title:"the witcher",
      description: `During the highly competitive initiation that follows, Beatrice renames herself Tris and struggles alongside her fellow initiates to live out the choice they have made. Together they must undergo extreme physical tests of endurance and intense psychological simulations, some with devastating consequences. As initiation transforms them all, Tris must determine who her friends really are—and where, exactly, a romance with a sometimes fascinating, sometimes exasperating boy fits into the life she's chosen. But Tris also has a secret, one she's kept hidden from everyone because she's been warned it can mean death. And as she discovers unrest and growing conflict that threaten to unravel her seemingly perfect society, she also learns that her secret might help her save those she loves . . . or it might destroy her.`,
      image: "./assets/divergent-card.jpg",
      author: "Veronica Roth",
      published: "2011"
    },
    {
      title:"Hamlet",
      description: `Among Shakespeare's plays, "Hamlet" is considered by many his masterpiece. Among actors, the role of Hamlet, Prince of Denmark, is considered the jewel in the crown of a triumphant theatrical career. Now Kenneth Branagh plays the leading role and co-directs a brillant ensemble performance. Three generations of legendary leading actors, many of whom first assembled for the Oscar-winning film "Henry V", gather here to perform the rarely heard complete version of the play. This clear, subtly nuanced, stunning dramatization, presented by The Renaissance Theatre Company in association with "Bbc" Broadcasting, features such luminaries as Sir John Gielgud, Derek Jacobi, Emma Thompson and Christopher Ravenscroft. It combines a full cast with stirring music and sound effects to bring this magnificent Shakespearen classic vividly to life. Revealing new riches with each listening, this production of "Hamlet" is an invaluable aid for students, teachers and all true lovers of Shakespeare - a recording to be treasured for decades to come.`,
      image: "./assets/hamlet-card.jpg",
      author: "Willam Shakespeare",
      published: "1601"
    },
    {
      title:"A Game of Thrones",
      description: `Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister forces are massing beyond the kingdom’s protective Wall. To the south, the king’s powers are failing—his most trusted adviser dead under mysterious circumstances and his enemies emerging from the shadows of the throne. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the frozen land they were born to. Now Lord Eddard Stark is reluctantly summoned to serve as the king’s new Hand, an appointment that threatens to sunder not only his family but the kingdom itself.`,
      image: "./assets/got-card.jpg",
      author: "George R. R. Martin",
      published: "1996"
    },
    {
      title:"The Hunger Games",
      description: `Could you survive on your own in the wild, with every one out to make sure you don't live to see the morning?
      In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.
      Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love.`,
      image: "./assets/thg-card.jpg",
      author: "Suzanne Collins",
      published: "2008" 
    }
  ];
  
  const eBooks = [
    {
      title:"The Patrick Melrose Novels",
      description: `For more than twenty years, acclaimed author Edward St. Aubyn has chronicled the life of Patrick Melrose, painting an extraordinary portrait of the beleaguered and self-loathing world of privilege. This single volume collects the first four novels—Never Mind, Bad News, Some Hope, and Mother’s Milk, a Man Booker finalist—to coincide with the publication of At Last, the final installment of this unique novel cycle.
      By turns harrowing and hilarious, these beautifully written novels dissect the English upper class as we follow Patrick Melrose’s story from child abuse to heroin addiction and recovery. Never Mind, the first novel, unfolds over a day and an evening at the family’s chateaux in the south of France, where the sadistic and terrifying figure of David Melrose dominates the lives of his five-year-old son, Patrick, and his rich and unhappy American mother, Eleanor. From abuse to addiction, the second novel, Bad News opens as the twenty-two-year-old Patrick sets off to collect his father’s ashes from New York, where he will spend a drug-crazed twenty-four hours. And back in England, the third novel, Some Hope, offers a sober and clean Patrick the possibility of recovery. The fourth novel, the Booker-shortlisted Mother’s Milk, returns to the family chateau, where Patrick, now married and a father himself, struggles with child rearing, adultery, his mother’s desire for assisted suicide, and the loss of the family home to a New Age foundation.`,
      image: "./assets/pm-card.jpg",
      author: "Edward St. Aubyn",
      published: "2012"
    } , 
    {
      title:"The Giraffe and the Pelly and Me",
      description: `The Ladderless Window-Cleaning Company certainly doesn't. They don’t need a pail, either, because they have a pelican with a bucket-sized beak. With a monkey to do the washing and Billy as their manager, this business is destined for success. Now they have their big break—a chance to clean all 677 windows of the Hampshire House, owned by the richest man in all of England! That’s exciting enough, but along the way there are surprises and adventures beyond their wildest window-washing dreams.
      Billy's biggest wish is to turn a weird old wooden house into a wonderful sweet shop. But then he finds a giraffe, a pelly and a monkey living inside - Now they're the Ladderless Window Cleaning Company! They become best friends, and now that they have a promising job to carrout out, there's a chance that Billy's scrumptious, galumptious dream just might come true...`,
      image: "./assets/tgatpam-card.jpg",
      author: "Roald Dahl",
      published: "1985"
    },
    {
      title:"Everything is F*cked: A Book About Hope",
      description: `We live in an interesting time. Materially, everything is the best it’s ever been—we are freer, healthier and wealthier than any people in human history. Yet, somehow everything seems to be irreparably and horribly f*cked—the planet is warming, governments are failing, economies are collapsing, and everyone is perpetually offended on Twitter. At this moment in history, when we have access to technology, education and communication our ancestors couldn’t even dream of, so many of us come back to an overriding feeling of hopelessness.
      What’s going on? If anyone can put a name to our current malaise and help fix it, it’s Mark Manson. In 2016, Manson published The Subtle Art of Not Giving A F*ck, a book that brilliantly gave shape to the ever-present, low-level hum of anxiety that permeates modern living. He showed us that technology had made it too easy to care about the wrong things, that our culture had convinced us that the world owed us something when it didn’t—and worst of all, that our modern and maddening urge to always find happiness only served to make us unhappier. Instead, the “subtle art” of that title turned out to be a bold challenge: to choose your struggle; to narrow and focus and find the pain you want to sustain. The result was a book that became an international phenomenon, selling millions of copies worldwide while becoming the #1 bestseller in 13 different countries.`,
      image: "./assets/etif0card.jpg",
      author: "Mark Manson",
      published: "2019"
    },
    {
      title:"The Adventures of Sherlock Holmes",
      description: `The Adventures of Sherlock Holmes is the series of short stories that made the fortunes of the Strand magazine, in which they were first published, and won immense popularity for Sherlock Holmes and Dr Watson. The detective is at the height of his powers and the volume is full of famous cases, including 'The Red-Headed League', 'The Blue Carbuncle', and 'The Speckled Band'.`,
      image: "./assets/taosh-card.jpg",
      author: "Arthur Conan Doyle",
      published: "1998"
    },
    {
      title:"The Maze Runner",
      description: `When Thomas wakes up in the lift, the only thing he can remember is his name. He’s surrounded by strangers—boys whose memories are also gone.
      Nice to meet ya, shank. Welcome to the Glade.
      Outside the towering stone walls that surround the Glade is a limitless, ever-changing maze. It’s the only way out—and no one’s ever made it through alive.
      Everything is going to change.
      Then a girl arrives. The first girl ever. And the message she delivers is terrifying.
      Remember. Survive. Run.`,
      image: "./assets/tmr-card.jpg",
      author: "James Dashner",
      published: "2009" 
    }
  ];
  
  
  function displayBooks(books, sectionId){
    const container =document.querySelector(`#${sectionId} .container`);
  
    container.innerHTML = '';
  
    books.forEach((book) => {
      //create card element
      const card = document.createElement('div');
      card.classList.add('card');
  
      //add background image to the card
      card.style.backgroundImage = `url(${book.image})`;
      card.style.backgroundSize = '100% 100%';
  
  
      //set click event for opening modal
      card.onclick =() => openModal(book);
  
      container.appendChild(card);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    displayBooks(popularBooks, 'popular');
    displayBooks(latestBooks, 'latest');
    displayBooks(eBooks, 'ebooks');
  })
  
  function openModal(book){
    const modal = document.querySelector('.modal');
    const modalContent = `
    <div class="modal-content"> 
      <div class="modal-left">
        <img src="${book.image}" alt="${book.title}">
      </div>
      <div class="modal-right">
        <h3>${book.title}</h3>
        <p>${book.description}</p>
        <p><strong>Author: </strong> ${book.author}</p>
        <p><strong>Published: </strong> ${book.published}</p>
      </div>
    </div>
    <span class="close" onclick="closeModal()">&times;</span>`;
  
    modal.innerHTML = modalContent;
    modal.style.display = 'flex';
  }
  
  function closeModal(){
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
  }
  
  document.addEventListener('DOMContentLoaded', () =>{
    displayBooks(books);
  })
  
  window.onclick = function (event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
  };