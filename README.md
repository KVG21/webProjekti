Web-ohjelmoinnin projekti Kvgwolt   || 18.4.2022

 

Tietotekniikan ryhmä 7, jäsenet Maija-Elina Kolkka, Niko Hytinkoski, Topias Junno ja Aatu Huttula, luokalta TVT21KMO Oulun ammattikorkeakoulusta sai kurssilta IN00CT06-3001, Web-ohjelmoinnin sovellusprojekti - Kevät 2022, tehtäväkseen luoda ruoankotiinkuljetus web-sovelluksen. Ryhmän yhteinen kurssiarvosana tavoite oli saada kurssista vähintään hyväksytty arvosana, sovelluksella tavoitellaan arvosanoja 3–5. Ryhmässä on osaajia frontendista ja backendista, minkä vuoksi työtehtävät jakautui jokaisen jäsenen kesken oman osaamisalueen kesken. Jäsenillä, joilla oli osaamista molemmista, tekivät tehtäviä, mitkä vaativat front- ja backend osaamista. 

Jäsenten yksityiskohtaiset tehtävät projektissa on jaettu kanban-metodilla GitHub projektissa. Tietokannan luomiseen, ideointiin, viestinnän tehtäviin, koodin siistimiseen, projektin tuomiseen Heroku-palvelimelle ja sovelluksen tyylittelyyn osallistuivat kaikki. Jäsenet auttoivat toisiaan osaamisensa mukaan. Jäsenet kantoivat itsenäisen vastuun omasta työstään, aktiivisuudestaan, raportoinnistaan sekä palavereihin osallistumisesta tässä onnistuen lähes moitteettomasti.  

Kolkan tehtävänä oli alustaa selaimen etusivu, luoda hakupalkki, millä voi hakea ravintoloita, luoda kuittikomponentti, alustaa viestinnän projektin esittelyteksti ja raakakirjoitus. 

Hytinkosken työtehtäviin kuuluivat sekä kirjautuminen, että rekisteröityminen ja niiden yhteen toimivuus tietokannan, front- ja backendin kanssa.  

Huttulan tehtävänä oli tuotesivu- ja ostoskori komponentin tekeminen, kuitin tietojen tuominen front- ja backendissä. Huttula auttoi muita koodiin liittyvissä ongelmakohdissa, esimerkiksi suunnittelussa, funktioiden toimivuudessa ja komponenttien sitomisessa toimivaksi kokonaisuudeksi. 

Junnon tehtäviin kuului kasata alustava API, sekä sivu ravintolan omistajalle, josta voi luoda tai poistaa ravintoloita ja niiden tuotteita. Junno loi asiakassivun, jossa asiakas voi muokata tietojaan, kuten osoitetta, puhelinnumeroa, sekä salasanaa. Junno loi kootun version, joka noutaa tiedot palvelimella pyörivästä tietokannasta paikallisten tietokantojen sijaan.  

Projekti nimettiin Kvgwoltiksi. Kvgwolt on ruoan kotiinkuljetussovellus, minkä kautta kuluttaja voi tilata kotiinkuljetuksella ruoan ja ravintolan omistaja voi tarjota asiakkaalle ravintolansa palveluilta. Kurssin toimintavaatimuksena oli tehdä täysin toimiva web-sovellus sisältäen selain- ja palvelinsovellukset. Kvgwolt-sovelluksessa voit valita rekisteröityessä käyttäjätyypin asiakkaan eli kuluttajan ja ravintolan omistajan eli palveluntarjoajan väliltä. Sovellukseen kirjaudutaan olemassa olevalla tunnuksella ja salasanalla, minkä käyttäjä on luonut rekisteröitymisen yhteydessä.  

Ravintolan omistaja eli palveluntarjoaja voi kirjautumisen jälkeen luoda sovellukseen oman ravintolan. Ravintolasta löytyy nimi, osoite, aukioloajat, kuva, tyyppi ja hintataso. Olemassa olevaan ravintolaan voidaan luoda tuotteita, mitä asiakas voi ostaa sovelluksen kautta. Tuotteita voi lisätä ja poistaa ruokalistoilta. Tuotteista löytyy kategoria, nimi, hinta ja kuva. Ravintolan omistaja voi seurata ravintolansa tilaushistoriaa. 

Asiakas eli kuluttaja voi kirjautumisen jälkeen selata ja hakea ravintoloita. Ravintolasta asiakas voi valita tuotteita, mitä haluaa tilata lisäämällä tuotteet ostoskoriin. Ostoskorin sisältöä voidaan muokata lisäämällä ja poistamalla tuotteita. Ostoskorissa näkyy tilattu määrä, tuotteen hinta, kokonaissumma ja tuotteen nimi. Asiakas kirjoittaa tilauskenttään toimitusosoitteen, minkä jälkeen hyväksyy tilauksen. Asiakas voi tarkastella tilaushistoriasta kuitteja tekemistään tilauksista. 

Sovelluksesta löytyy erilaisia komponentteja. Käyttäjä voi rekisteröityä, kirjautua sisään ja ulos. Käyttäjätyypistä riippuen voi luoda ravintoloita ja muokata oman ravintolan ruokalistaa. Käyttäjätyypistä riippuen voi tarkastella kuitteja, ravintolan omistaja näkee oman ravintolansa tilaukset, kuluttaja näkee omalla käyttäjällä tehdyt tilaukset. Kuitista käy ilmi päivämäärä, summa, toimitusosoite ja tilaamansa tuotteet.  

Teknologioina on käytetty JavaScriptiä ja sovelluksena Visual Studio Codea. Tietokanta on luotu MySQL Workbenchissä ja tuotu UniControlleriin käyttämällä ‘Front Engineering’ toimintoa. Yhteyssovellusten välillä luotu Backendistä löytyvästä db.js tiedostosta. Selaimena on käytetty Google Chromea ja Firefoxia. Palvelinsovelluksena käytettään Heroku-palvelinta. Koodien tiedostot ovat löydettävissä GitHubista, julkisesta organisaatioympäristöstä: https://github.com/KVG21/webProjekti.git . Sovelluksen voi ottaa käyttöön Heroku-palvelimesta löytyvästä linkistä. GitHubin linkistä tiedostot voi ladata omalle tietokoneelle, jonka voi ottaa käyttöön terminaalin avulla.  
