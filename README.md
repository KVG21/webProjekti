Web-ohjelmoinnin projekti Kvgwolt 19.04.2022

Ryhmän tausta

Tietotekniikan ryhmä 7, jäsenet Maija-Elina Kolkka, Niko Hytinkoski, Topias Junno ja Aatu Huttula, luokalta TVT21KMO Oulun ammattikorkeakoulusta sai kurssilta IN00CT06-3001, Web-ohjelmoinnin sovellusprojekti - Kevät 2022, tehtäväkseen luoda ruoankotiinkuljetus web-sovelluksen. Ryhmän yhteinen kurssiarvosana tavoite oli saada kurssista vähintään hyväksytty arvosana, mutta sovelluksella tavoitellaan arvosanoja 3–5. Ryhmässä on osaajia frontendista ja backendista, minkä vuoksi työtehtävät jakautui jokaisen jäsenen kesken oman osaamisalueen perusteella.

Jäsenten tehtävät

Jäsenten yksityiskohtaiset tehtävät projektissa on jaettu Kanban-metodilla GitHub-projektissa. Tietokannan luomiseen, ideointiin, viestinnän tehtäviin, koodin siistimiseen, projektin tuomiseen Heroku-palvelimelle ja sovelluksen tyylittelyyn osallistuivat kaikki. Jäsenet auttoivat toisiaan osaamisensa mukaan. Jäsenet kantoivat itsenäisen vastuun omasta työstään, aktiivisuudestaan, raportoinnistaan sekä palavereihin osallistumisesta ja onnistuivat tässä lähes moitteettomasti.

- Kolkan tehtävänä oli alustaa selaimen etusivu, luoda hakupalkki, millä voi hakea ravintoloita, luoda kuittikomponentti, alustaa ja korjata projektin esittelyteksti ja raakakirjoitus.

- Hytinkosken työtehtäviin kuuluivat sekä kirjautuminen että rekisteröityminen ja niiden yhteen toimivuus tietokannan, front- ja backendin kanssa.

- Huttulan tehtävänä oli tuotesivu- ja ostoskori komponentin tekeminen, kuitin tietojen tuominen front- ja backendissä. Huttula auttoi muita koodiin liittyvissä ongelmakohdissa, esimerkiksi suunnittelussa, funktioiden toimivuudessa ja komponenttien sitomisessa toimivaksi kokonaisuudeksi.

- Junnon tehtäviin kuului kasata alustava API sekä sivu ravintolan omistajalle, josta voi luoda tai poistaa ravintoloita ja niiden tuotteita. Junno loi asiakassivun, jossa asiakas voi muokata tietojaan, kuten osoitetta, puhelinnumeroa, sekä salasanaa. Junno loi kootun version, joka noutaa tiedot palvelimella pyörivästä tietokannasta paikallisten tietokantojen sijaan.

Projektin esittely

Projekti nimettiin Kvgwoltiksi. Kvgwolt on ruoan kotiinkuljetussovellus, jonka kautta kuluttaja voi tilata kotiinkuljetuksella ruoan ja ravintolan omistaja voi tarjota asiakkaalle ravintolansa palveluilta. Kurssin toimintavaatimuksena oli tehdä täysin toimiva web-sovellus sisältäen selain- ja palvelinsovellukset. Kvgwolt-sovelluksessa käyttäjä voi valita rekisteröityessä käyttäjätyypin asiakkaan eli kuluttajan ja ravintolan omistajan eli palveluntarjoajan väliltä. Sovellukseen kirjaudutaan olemassa olevalla tunnuksella ja salasanalla, jotka käyttäjä on luonut rekisteröitymisen yhteydessä.

Käyttäjäominaisuudet

Ravintolan omistaja eli palveluntarjoaja voi kirjautumisen jälkeen luoda sovellukseen oman ravintolan. Ravintolasta löytyy nimi, osoite, aukioloajat, kuva, tyyppi ja hintataso. Olemassa olevaan ravintolaan voidaan luoda tuotteita, joita asiakas voi ostaa sovelluksen kautta. Tuotteita voi lisätä ja poistaa

ruokalistoilta. Tuotteista löytyy kategoria, nimi, hinta ja kuva. Ravintolan omistaja voi seurata ravintolansa tilaushistoriaa.

Asiakas eli kuluttaja voi kirjautumisen jälkeen selata ja hakea ravintoloita. Ravintolasta asiakas voi valita tuotteita, joita haluaa tilata lisäämällä tuotteet ostoskoriin. Ostoskorin sisältöä voidaan muokata lisäämällä ja poistamalla tuotteita. Ostoskorissa näkyy tilattu määrä, tuotteen hinta, kokonaissumma ja tuotteen nimi. Asiakas kirjoittaa tilauskenttään toimitusosoitteen, minkä jälkeen hyväksyy tilauksen. Asiakas voi tarkastella tilaushistoriasta kuitteja tekemistään tilauksista.

Toiminnallisuus

Sovelluksesta löytyy erilaisia komponentteja. Käyttäjä voi rekisteröityä ja kirjautua sisään ja ulos. Ravintolan omistaja voi luoda ravintoloita ja muokata oman ravintolan ruokalistaa. Kuluttaja voi tarkastella kuitteja, ravintolan omistaja näkee oman ravintolansa tilaukset, kuluttaja näkee omalla käyttäjällä tehdyt tilaukset. Kuitista käy ilmi päivämäärä, summa, toimitusosoite ja tilatut tuotteet.

Teknologia

Teknologioina on käytetty JavaScriptiä ja sovelluksena Visual Studio Codea. Tietokanta on luotu MySQL Workbenchissä ja tuotu UniControlleriin käyttämällä Front Engineering -toimintoa. Yhteyssovellusten välillä luotu backendistä löytyvästä db.js-tiedostosta. Selaimena on käytetty Google Chromea ja Firefoxia. Palvelinsovelluksena käytettään Heroku-palvelinta. Koodien tiedostot ovat löydettävissä GitHubista julkisesta organisaatioympäristöstä ja toiminnallinen esittely YouTubesta. Sovelluksen voi ottaa käyttöön Heroku-palvelimesta. GitHubin linkistä tiedostot voi ladata omalle tietokoneelle. Sovelluksen voi ottaa käyttöön terminaalin avulla.
