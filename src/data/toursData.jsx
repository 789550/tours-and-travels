import moher1 from "../assets/moher1.webp";
import moher2 from "../assets/moher2.jpg";
import moher3 from "../assets/moher3.jpg";
import moher4 from "../assets/moher4.jpg";
import moher5 from "../assets/moher5.webp";
import moher6 from "../assets/moher6.jpg";
import iceland1 from "../assets/iceland1.webp";
import iceland2 from "../assets/iceland2.jpg";
import iceland3 from "../assets/iceland3.jpg";
import iceland4 from "../assets/iceland4.jpg";
import iceland5 from "../assets/iceland5.jpg";
import iceland6 from "../assets/iceland6.jpg";
import hawai1 from "../assets/hawai1.webp";
import hawai2 from "../assets/hawai2.jpg";
import hawai3 from "../assets/hawai3.jpg";
import hawai4 from "../assets/hawai4.webp";
import hawai5 from "../assets/hawai5.jpg";
import hawai6 from "../assets/hawai6.jpg";
import falls1 from "../assets/falls1.jpg";
import falls2 from "../assets/falls2.webp";
import falls3 from "../assets/falls3.jpg";
import falls4 from "../assets/falls4.jpg";
import falls5 from "../assets/falls5.jpg";
import falls6 from "../assets/falls6.jpg";
import africa1 from "../assets/africa1.jpg";
import africa2 from "../assets/africa2.webp";
import africa3 from "../assets/africa3.webp";
import africa4 from "../assets/africa4.webp";
import africa5 from "../assets/africa5.webp";
import africa6 from "../assets/africa6.png";
import africa7 from "../assets/africa7.webp";
import phill1 from "../assets/phill1.webp";
import phill2 from "../assets/phill2.webp";
import phill3 from "../assets/phill3.webp";
import phill4 from "../assets/phill4.webp";
import phill5 from "../assets/phill5.webp";
import phill6 from "../assets/phill6.webp";
import bora1 from "../assets/bora1.jpg";
import bora2 from "../assets/bora2.webp";
import bora3 from "../assets/bora3.webp";
import bora4 from "../assets/bora4.jpg";
import bora5 from "../assets/bora5.jpg";
import bora6 from "../assets/bora6.jpg";
import bora7 from "../assets/bora7.jpg";
import kyoto1 from "../assets/kyoto1.jpg";
import kyoto2 from "../assets/kyoto2.jpg";
import kyoto3 from "../assets/kyoto3.jpg";
import kyoto4 from "../assets/kyoto4.jpg";
import kyoto5 from "../assets/kyoto5.jpg";
import kyoto6 from "../assets/kyoto6.jpg";
import thor1 from "../assets/thor1.webp";
import thor2 from "../assets/thor2.jpg";
import thor3 from "../assets/thor3.jpg";
import thor4 from "../assets/thor4.jpg";
import thor5 from "../assets/thor5.jpg";
import thor6 from "../assets/thor6.jpg";
import thor7 from "../assets/thor7.jpg";
import alps1 from "../assets/alps1.jpg";
import alps2 from "../assets/alps2.jpg";
import alps3 from "../assets/alps3.jpg";
import alps4 from "../assets/alps4.jpg";
import alps5 from "../assets/alps5.jpg";
import alps6 from "../assets/alps6.jpg";
import alps7 from "../assets/alps7.jpg";
import turnip1 from "../assets/turnip1.webp";
import turnip2 from "../assets/turnip2.jpg";
import turnip3 from "../assets/turnip3.jpg";
import turnip4 from "../assets/turnip4.jpg";
import turnip5 from "../assets/turnip5.jpg";
import turnip6 from "../assets/turnip6.jpg";
import turnip7 from "../assets/turnip7.jpg";
import niagara1 from "../assets/niagara1.jpg";
import niagara2 from "../assets/niagara2.jpeg";
import niagara3 from "../assets/niagara3.jpg";
import niagara4 from "../assets/niagara4.jpeg";
import niagara5 from "../assets/niagara5.jpeg";
import niagara6 from "../assets/niagara6.jpeg";
import niagara7 from "../assets/niagara7.jpg";



const tours = [

  {
    id: 1,
    name: "Cliffs of Moher, Ireland",
    description: "Known for being Ireland’s most scenic attraction, the cliffs rise high above the ocean, up to 702 feet at their highest point. They are home to many species of wildlife including guillemots, razorbills, and puffins. ",
    images: [moher1, moher2, moher3, moher4, moher5, moher6],
      tourPlan: [
        { day: 1, activities: "Arrive in Dublin, settle into accommodation. Explore Dublin city center, visit Trinity College and Dublin Castle." },
        { day: 2, activities: "Visit the Guinness Storehouse. Stroll through St. Stephen's Green and Grafton Street." },
        { day: 3, activities: "Travel to Galway (about 2.5 hours by car or train). Explore Galway city, including Eyre Square and Galway Cathedral." },
        { day: 4, activities: "Day trip to Connemara National Park. Visit Kylemore Abbey and Gardens." },
        { day: 5, activities: "Travel to the Cliffs of Moher (about 1.5 hours by car). Spend the day exploring the cliffs and the visitor center." },
        { day: 6, activities: "Visit Doolin village and experience traditional Irish music. Optional: take a boat tour to the Aran Islands" },
        { day: 7, activities: "Travel to Killarney (about 2.5 hours by car). Explore Killarney National Park and Ross Castle." },
        { day: 8, activities: "Drive the scenic Ring of Kerry route. Visit Skellig Ring and other scenic spots along the way" },
        { day: 9, activities: "Travel to Cork (about 1.5 hours by car). Explore Cork city, including the English Market and St. Fin Barre's Cathedral" },
        { day: 10, activities: "Depending on flight times, explore more of Cork or return to Dublin for departure." }
      ],
    price: "$1570"
  },


  {
    id: 2,
    name: "Iceland",
    description: "This country is full of diverse landscapes but each one is as beautiful as the next. From mountains and valleys, to canyons, waterfalls and basalt column rock formations, Iceland is an adventurer’s dream.",
    images: [iceland1, iceland2, iceland3, iceland4, iceland5, iceland6],
    tourPlan: [
      { day: 1, activities: "Arrive in Reykjavik, Iceland's capital. Explore Reykjavik city center, including Hallgrimskirkja and Harpa Concert Hall." },
      { day: 2, activities: "Take a day trip along the Golden Circle route. Visit Thingvellir National Park, Geysir geothermal area, and Gullfoss waterfall." },
      { day: 3, activities: "Drive along the South Coast. Visit Seljalandsfoss and Skogafoss waterfalls, and the black sand beaches of Reynisfjara." },
      { day: 4, activities: "Travel to Vatnajokull National Park. Explore Skaftafell and Svartifoss waterfall." },
      { day: 5, activities: "Visit Jokulsarlon Glacier Lagoon and Diamond Beach. Optional: Glacier hike or boat tour among the icebergs." },
      { day: 6, activities: "Drive through the East Fjords region. Explore quaint villages and enjoy the scenic coastal views." },
      { day: 7, activities: "Travel to Akureyri (the capital of North Iceland). Visit Lake Myvatn and its geothermal areas, including Hverir and Dimmuborgir." },
      { day: 8, activities: "Drive to Husavik, Iceland's whale watching capital. Take a whale watching tour (seasonal) or visit the Whale Museum" },
      { day: 9, activities: "Travel to West Iceland. Explore the Snaefellsnes Peninsula, including Snaefellsjokull National Park and Kirkjufell mountain" },
      { day: 10, activities: "Return to Reykjavik. Optional: Visit Blue Lagoon for relaxation before departure" }
    ],
    price: "$1750"
  },


  {
    id: 3,
    name: "Hawai",
    description: "With spectacular beaches, lush forests, hidden waterfalls, and incredible volcanos, Hawaii offers beautiful scenery on its main islands. Every island has its own unique personality with a wide range of things to do.",
    images: [hawai1, hawai2, hawai3, hawai4, hawai5, hawai6],
    tourPlan: [
      { day: 1, activities: "Arrive in Honolulu, Oahu. Explore Waikiki Beach and Diamond Head Crater." },
      { day: 2, activities: "Drive to the North Shore of Oahu. Visit the Dole Plantation, Waimea Bay, and Banzai Pipeline." },
      { day: 3, activities: "Visit Pearl Harbor and the USS Arizona Memorial. Explore the Pacific Aviation Museum and Battleship Missouri Memorial." },
      { day: 4, activities: "Explore downtown Honolulu, including Iolani Palace and the Hawaii State Capitol. Visit Bishop Museum for Hawaiian culture and history." },
      { day: 5, activities: "Fly to Maui (approximately 30-minute flight). Explore Lahaina town and enjoy a sunset at Kaanapali Beach." },
      { day: 6, activities: "Drive the Road to Hana, stopping at waterfalls, beaches, and scenic viewpoints. Visit Haleakala National Park and the Pools of Oheo (Seven Sacred Pools)." },
      { day: 7, activities: "Explore Upcountry Maui, including the towns of Makawao and Kula. Visit a lavender farm or the Maui Winery at Ulupalakua Ranch." },
      { day: 8, activities: "Explore South Maui beaches like Makena Beach and snorkel at Molokini Crater (if weather permits). Visit Iao Valley State Park and Maui Tropical Plantation." },
      { day: 9, activities: "Spend a day relaxing on the beaches of Maui or exploring local markets and shops." },
      { day: 10, activities: "Departure. Depending on flight times, enjoy a final morning in Maui or return to Honolulu for departure" }
    ],
    price: "$1350"
  },


  {
    id: 4,
    name: "Palouse Falls, Washington",
    description: "Located in the state park named after it, Palouse Falls is a famous muse for artists and photographers looking to capture Washington state's natural beauty. The falls are accessible all year.",
    images: [falls1, falls2, falls3, falls4, falls5, falls6],
    tourPlan: [
      { day: 1, activities: "Arrive in Spokane, Washington. Explore Riverfront Park and downtown Spokane." },
      { day: 2, activities: "Drive from Spokane to Palouse Falls State Park (about 2 hours). Visit Palouse Falls and enjoy the scenic views." },
      { day: 3, activities: "Spend the day hiking around Palouse Falls State Park. Explore nearby viewpoints and enjoy photography opportunities." },
      { day: 4, activities: "Travel to Walla Walla (about 1.5 hours by car). Visit local wineries and vineyards in the Walla Walla Valley." },
      { day: 5, activities: "Explore downtown Walla Walla and its historic district. Visit Whitman Mission National Historic Site." },
      { day: 6, activities: "Return to Spokane (about 4 hours by car). Optional: Visit more attractions in Spokane or relax." },
      { day: 7, activities: "Drive to Mount Rainier National Park (about 4 hours). Explore the park, including Paradise and Sunrise areas." },
      { day: 8, activities: "Hike trails in Mount Rainier National Park. Visit Christine Falls and other scenic spots." },
      { day: 9, activities: "Drive to Seattle (about 2 hours). Explore Pike Place Market and the Space Needle." },
      { day: 10, activities: "Depending on flight times, explore more of Seattle or depart." }
    ],
    price: "$1570"
  },


  {
    id: 5,
    name: "Cape Town, South Africa",
    description: "Cape Town is a long way from anywhere, but the views from Table Mountain and the miles of stunning beaches make it well worth the trip. It is a city that locates in between the mountains and the ocean that is a very livable place to live.",
    images: [africa1, africa2, africa3, africa4, africa5, africa6, africa7],
    tourPlan: [
      { day: 1, activities: "Arrive in Cape Town, check into accommodation. Relax and explore the nearby area." },
      { day: 2, activities: "Visit Table Mountain (weather permitting). Explore the V&A Waterfront and Two Oceans Aquarium." },
      { day: 3, activities: "Drive along the Cape Peninsula. Visit Cape Point, Cape of Good Hope, and Boulders Beach (penguin colony)." },
      { day: 4, activities: "Take a day trip to Stellenbosch wine region. Visit wineries for tastings and enjoy the scenic vineyards." },
      { day: 5, activities: "Take a morning ferry to Robben Island (historical prison tour). Visit District Six Museum to learn about apartheid history." },
      { day: 6, activities: "Explore Kirstenbosch National Botanical Garden. Optional: Hike in the nearby Newlands Forest or visit Rhodes Memorial." },
      { day: 7, activities: "Relax at Camps Bay or Clifton Beach. Explore the trendy Kloof Street and enjoy local cafes and shops." },
      { day: 8, activities: "Visit Constantia wine route for more wine tastings. Explore Groot Constantia and its historic wine estate." },
      { day: 9, activities: "Visit Iziko South African Museum and Company's Garden. Explore the Zeitz Museum of Contemporary Art Africa (MOCAA)." },
      { day: 10, activities: "Depending on flight times, visit more local markets or shops. Depart from Cape Town." }
    ],
    price: "$1380"
  },


  {
    id: 6,
    name: "Legazpi, Philippines",
    description: "The explosive volcano towers over the city and its perfect conical shape can be seen from every corner of Legazpi. It is the main draw to the city, but for the best views, I suggest you visiting Sumlang Lake, Lingon Hill, Legazpi boulevard or Mayon Volcano observatory.",
    images: [phill1, phill2, phill3, phill4, phill5, phill6],
    tourPlan: [
      { day: 1, activities: "Arrive in Legazpi City, check into accommodation. Relax and explore Legazpi Boulevard for views of Mayon Volcano." },
      { day: 2, activities: "Visit Cagsawa Ruins Park, with views of Mayon Volcano. Explore the ATV adventure park for lava trail and zipline activities." },
      { day: 3, activities: "Visit Hoyop-Hoyopan Cave in Camalig. Explore Quitinday Green Hills in Camalig for a nature hike and viewpoint." },
      { day: 4, activities: "Travel to Donsol (about 1 hour by car). Experience whale shark watching (seasonal, best from November to June)." },
      { day: 5, activities: "Enjoy a day of relaxation in Donsol. Optional: Firefly watching at night in Donsol River." },
      { day: 6, activities: "Travel to Sorsogon City (about 2 hours by car). Visit Bulusan Lake and Bulusan Volcano Natural Park." },
      { day: 7, activities: "Explore Subic Beach in Matnog. Visit Tikling Island and Juag Lagoon for snorkeling and marine life." },
      { day: 8, activities: "Return to Legazpi City. Visit Lignon Hill for panoramic views of Legazpi and Mayon Volcano." },
      { day: 9, activities: "Visit Embarcadero de Legazpi for shopping and dining. Explore Albay Park and Wildlife for local flora and fauna." },
      { day: 10, activities: "Depending on flight times, visit local markets or shops. Depart from Legazpi City." }
    ],
    price: "$1295"
  },


  {
    id: 7,
    name: "Bora Bora, French Polynesia",
    description: "Considered to be one of the most beautiful islands in the world, there’s no doubt why this lush island with brilliant blue water is at the top of the list. The tropical luxury continues into the over-water bungalows that provide a stay right out on the ocean as your own little spot of paradise.",
    images: [bora1, bora2, bora3, bora4, bora5, bora6, bora7],
    tourPlan: [
      { day: 1, activities: "Arrive at Bora Bora Airport, transfer to your resort. Check-in and relax at your overwater bungalow or beachfront villa." },
      { day: 2, activities: "Take a lagoon excursion on a traditional outrigger canoe. Snorkel in the coral gardens and swim with tropical fish." },
      { day: 3, activities: "Explore Bora Bora's lagoon on a guided jet ski tour. Visit the iconic Motu Tapu and Matira Beach." },
      { day: 4, activities: "Hike or take a guided tour to the top of Mount Otemanu. Enjoy breathtaking views of the island and lagoon." },
      { day: 5, activities: "Spend the day snorkeling in Bora Bora's famous Coral Gardens. Relax on the beach and enjoy the crystal-clear waters." },
      { day: 6, activities: "Indulge in a spa day at your resort. Enjoy massages and treatments inspired by Polynesian traditions." },
      { day: 7, activities: "Take a guided island tour by 4x4 or bicycle. Visit local villages, historical sites, and scenic viewpoints." },
      { day: 8, activities: "Experience a thrilling shark and ray feeding excursion. Swim among blacktip reef sharks and stingrays in their natural habitat." },
      { day: 9, activities: "Participate in cultural activities such as pareo (sarong) tying or Tahitian dance lessons. Learn about local traditions and crafts." },
      { day: 10, activities: "Relax at your resort or explore the local markets. Transfer to Bora Bora Airport for departure." }
    ],
    price: "$1550"
  },


  {
    id: 8,
    name: "Kyoto, Japan",
    description: "Why go to Kyoto and what Kyoto cultural diversity can offer us, with which the traditional and modern world intertwine. Cultural attractions, uji tea and the art of acting combine to make the city's unique character a unique experience for every traveller to Japan.Kyoto Tower is the first activity to see.",
    images: [kyoto1, kyoto2, kyoto3, kyoto4, kyoto5, kyoto6],
    tourPlan: [
      { day: 1, activities: "Arrival in Kyoto. Check into accommodation and explore the neighborhood around your hotel or guesthouse" },
      { day: 2, activities: "Visit Kinkaku-ji (Golden Pavilion) and Ryoan-ji Temple in the morning. In the afternoon, explore Arashiyama Bamboo Grove and Tenryu-ji Temple." },
      { day: 3, activities: "Explore Fushimi Inari Taisha early in the morning to avoid crowds. In the afternoon, visit Gion District and Yasaka Shrine" },
      { day: 4, activities: "Visit Kiyomizu-dera Temple and explore the Higashiyama District, including Sannenzaka and Ninenzaka streets." },
      { day: 5, activities: "Take a day trip to Nara. Visit Todai-ji Temple, Nara Park, and Kasuga Taisha Shrine." },
      { day: 6, activities: "Visit Nijo Castle in the morning. In the afternoon, explore the Kyoto Imperial Palace Park and Kyoto Handicraft Center." },
      { day: 7, activities: "Explore the Philosopher's Path and visit Ginkaku-ji (Silver Pavilion). In the afternoon, visit Nanzen-ji Temple and nearby Eikan-do Zenrin-ji Temple." },
      { day: 8, activities: "Take a day trip to Osaka. Visit Osaka Castle, Dotonbori District, and Shinsaibashi Shopping Arcade." },
      { day: 9, activities: "Visit the Kyoto International Manga Museum and Nishiki Market. In the afternoon, explore the Kyoto Station area and Kyoto Tower." },
      { day: 10, activities: "Departure day. Depending on flight times, visit any remaining Kyoto attractions or do some last-minute shopping." }
    ],
    price: "$1250"
  },


  {
    id: 9,
    name: "Thor’s Well, Oregon",
    description: "Thor’s Well is located in Yachats, a small, remote town, and is situated very close to the popular Cape Perpetua.Essentially, if you look straight into it, it appears to be bottomless, though it is actually quite shallow at just 20 feet in depth.",
    images: [thor1, thor2, thor3, thor4, thor5, thor6, thor7],
    tourPlan: [
      { day: 1, activities: "Arrive in Portland, Oregon. Rent a car and drive to your accommodation on the Oregon coast (about 1.5 to 2 hours)." },
      { day: 2, activities: "Visit Cannon Beach and explore Haystack Rock. Walk along the beach and enjoy the coastal scenery." },
      { day: 3, activities: "Drive to Astoria, visit the Columbia River Maritime Museum. Explore the Astoria Column for panoramic views of the area." },
      { day: 4, activities: "Drive to Cape Perpetua Scenic Area. Visit Thor's Well and the Spouting Horn." },
      { day: 5, activities: "Visit Heceta Head Lighthouse and hike the nearby trails. Explore Sea Lion Caves (optional)." },
      { day: 6, activities: "Drive to Florence, Oregon. Visit Old Town Florence and browse local shops and galleries." },
      { day: 7, activities: "Explore the Oregon Dunes National Recreation Area. Optional: Take a dune buggy tour or go sandboarding." },
      { day: 8, activities: "Drive to Coos Bay. Visit Shore Acres State Park and its beautiful gardens." },
      { day: 9, activities: "Visit Bandon and explore the Bandon Beach and Face Rock State Scenic Viewpoint. Optional: Visit the West Coast Game Park Safari." },
      { day: 10, activities: "Drive back to Portland (about 4 to 5 hours). Depending on flight times, explore Portland or depart." }
    ],
    price: "$1500"
  },


  {
    id: 10,
    name: "The Alps, Europe",
    description: "Pictures really can’t describe the magnitude and beauty of the Alps. The bright green valleys give way to the colossal mountains creating picturesque scenes.The Dolomites are a particularly impressive part of the mountain range as well.",
    images: [alps1, alps2, alps3, alps4, alps5, alps6, alps7],
    tourPlan: [
      { day: 1, activities: "Arrive in Munich, Germany. Explore the city center, including Marienplatz and the Viktualienmarkt." },
      { day: 2, activities: "Travel to Garmisch-Partenkirchen (about 1 hour by train or car). Visit Zugspitze, Germany's highest peak, via cable car." },
      { day: 3, activities: "Explore Partnach Gorge and hike around the area. Visit Eibsee Lake for stunning views of Zugspitze." },
      { day: 4, activities: "Travel to Innsbruck, Austria (about 1.5 hours by train or car). Explore Innsbruck's Old Town, including the Golden Roof and Imperial Palace." },
      { day: 5, activities: "Visit Bergisel Ski Jump and enjoy panoramic views of the Alps. Explore Swarovski Crystal Worlds in Wattens (optional)." },
      { day: 6, activities: "Travel to Zermatt, Switzerland (about 3.5 hours by train via Visp). Explore Zermatt village and enjoy views of the Matterhorn." },
      { day: 7, activities: "Take the Gornergrat Railway for spectacular views of the Matterhorn and surrounding peaks. Explore Gorner Gorge or visit the Matterhorn Museum." },
      { day: 8, activities: "Travel to Chamonix, France (about 3 hours by train via Martigny). Explore Chamonix town and take the Aiguille du Midi cable car for panoramic views." },
      { day: 9, activities: "Visit Mer de Glace glacier by Montenvers Railway. Enjoy hiking or take the Mont Blanc Tramway for more mountain views." },
      { day: 10, activities: "Depending on flight times, explore more of Chamonix or return to Geneva for departure." }
    ],
    price: "$1700"
  },


  {
    id: 11,
    name: "Turnip Rock, Michigan",
    description: "Turnip Rock isn’t exactly the most famous of attractions in the United States, but that’s due to lack of knowledge, not lack of magnificence.It’s a very small island that you can spot from Lake Huron’s shorelines in Port Austin, Michigan.",
    images: [turnip1, turnip2, turnip3, turnip4, turnip5, turnip6, turnip7],
    tourPlan: [
      { day: 1, activities: "Arrival in Detroit, Michigan. Check into accommodation and relax." },
      { day: 2, activities: " Drive from Detroit to Port Austin (about 2.5 hours). Explore the town and nearby attractions." },
      { day: 3, activities: "Visit Turnip Rock via kayak or boat tour (make sure to book in advance). Spend time exploring the rock and its surroundings." },
      { day: 4, activities: "Relaxation day in Port Austin. Enjoy the local beaches or visit nearby attractions like Port Crescent State Park." },
      { day: 5, activities: "Drive to Frankenmuth (about 2 hours). Explore this charming Bavarian-style town." },
      { day: 6, activities: "Enjoy activities in Frankenmuth such as visiting Bronner's Christmas Wonderland or taking a riverboat cruise." },
      { day: 7, activities: "Travel to Traverse City (about 2.5 hours). Explore the city and its beautiful surroundings." },
      { day: 8, activities: "Visit Sleeping Bear Dunes National Lakeshore (about 40 minutes from Traverse City). Enjoy hiking and sightseeing." },
      { day: 9, activities: "Drive back to Detroit (about 4 hours). Spend the day exploring Detroit's cultural and historical attractions." },
      { day: 10, activities: "Departure day. Depending on flight times, visit any remaining Detroit attractions before heading to the airport." }
    ],
    price: "$1530"
  },


  {
    id: 12,
    name: "Niagara Falls, New York",
    description: "New York is home to many amazing attractions, but Niagara Falls is arguably one of those that everyone will tell you not to miss.It’s right on the border between the USA and Canada, and it’s a must-see attraction, for sure.These falls earn over 30 million visitors on an annual basis, and it’s no surprise!",
    images: [niagara1, niagara2, niagara3, niagara4, niagara5, niagara6, niagara7],
    tourPlan: [
      { day: 1, activities: "Arrival in Buffalo, New York. Check into accommodation and explore downtown Buffalo." },
      { day: 2, activities: "Visit Niagara Falls State Park on the New York side. Explore the American Falls, Bridal Veil Falls, and Luna Island." },
      { day: 3, activities: "Take a Maid of the Mist boat tour to experience the falls up close." },
      { day: 4, activities: "Explore Niagara Gorge Discovery Center and hike the Niagara Gorge Trail System." },
      { day: 5, activities: "Visit Old Fort Niagara in nearby Youngstown for historical insights." },
      { day: 6, activities: "Drive to Lewiston and take a jet boat tour on the Niagara River for a thrilling experience." },
      { day: 7, activities: "Relaxation day at Niagara-on-the-Lake, Ontario, exploring wineries and historical sites." },
      { day: 8, activities: "Drive back to Buffalo and visit the Buffalo Zoo or Albright-Knox Art Gallery." },
      { day: 9, activities: "Explore Canalside in Buffalo, take a boat tour, or visit the Naval & Military Park." },
      { day: 10, activities: " Departure day. Depending on flight times, visit any remaining Buffalo attractions before heading to the airport." }
    ],
    price: "$1360"
  }
];

export default tours;
