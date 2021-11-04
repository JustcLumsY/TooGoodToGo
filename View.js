let html = '';
show();
function show()
{
   document.getElementById('app').innerHTML = html;
}

function mainPage()
{
    html = /*html*/`
    
    <h1>Too Good To Go</h1>

    <div id="mainFrame">
        <img id="photo1" src="matsvinn.png"  >
        <div class="frames" id="innerFrame">
        
            <div id="newUserInfo">
                <p>Ny til "To Good To Go?"</p>
                <p>Lag en bruker</p>
                <button onclick="newUser()" class="mainBtns" type="submit">Klikk her</button>
            </div>

                <div id="userLoginInfo"> 
                    <label>Brukernavn:</label>
                    <input class="bruker" type="text" placeholder= "navn">
    
                    <label>Passord:</label>
                    <input class="passord" type="text" placeholder= "*****">
        
                    <button onclick="accountPage()" class="mainBtns" type="submit">Login</button>
                </div>
        </div>
    </div>
    `;
    show();
}
mainPage();

function newUser(){
    html = /*html*/`
    
    <h1>Too Good To Go</h1>
    <div id="mainFrame">
        <img id="photo1" src="matsvinn.png" >
        <div class="frames" id="innerFrame">
            <div id="newUserInfo">
        
                <h1>Lag en bruker</h1>

            </div>
                <div id="userLoginInfo"> 
                    <label>Brukernavn:</label>
                    <input class="bruker" type="username" placeholder= "navn">

                    <label>MobilNr:</label>
                    <input class="tlfNr" type="tel" placeholder= "telefon">
                    
                    <label>Adresse:</label>
                    <input class="adresse" type="Adress" placeholder= "adresse">
    
                    <label>Passord:</label>
                    <input class="passord" type="PW" placeholder= "*****">
        
                    <button onclick="mainPage()" class="mainBtns" type="submit">Avbryt</button>
                    <button onclick="accountPage()"class="mainBtns" type="submit">Opprett Bruker</button>
                </div>
        </div>
    </div>
    
    `;
    show();
}

function accountPage(){
    html = /*html*/`
    <h1>Too Good To Go</h1>
    <div id="mainFrame">  
        <button onklick = ${mainPage()} class="logout mainBtns">logg ut</button>
        <button onclick ="foodPage()" class="findFood mainBtns">Finn mat</button>
        <button onklick = ${givAway()} class="giveFood mainBtns">Gi ut mat</button>
    <div>
        <div class="userInfo">
        </div>
        
            <div class="userInfo">
                <button onclick="editUserInfo()" class ="edit mainBtns">Rediger</button>
                <p>bruker info</p>
                <p>bruker annonser</p>
                <p>bruker bestilt</p>
            </div>
                
            <div clas = "ads">
                <div class="ads list"></div>
            </div>     
    </div>    
    `;
    show();
}

function foodPage(){
     html = /*html*/`
     <h1>Too Good To Go</h1>
     <div id="zipFrame"> 

            <div class="zipCodeframe">
                <label>Post Adresse</label>
                <input class="bruker" type="text" placeholder="5098">
            </div>
            <div>
                <button class="mainBtns">Egg</button>
                <button class="mainBtns">Gluten</button>
                <button class="mainBtns">Nøtter</button>
                <button class="mainBtns">Melk</button>
            </div>
            <div id="foodGroupFrame">
                <div onclick="foodPageAd()" class="FoodGroupPhotoFrame"><img src="matsvinn.png"></div>
                <div onclick="foodPageAd()" class="FoodGroupPhotoFrame"><img src="matsvinn.png"></div>
                <div onclick="foodPageAd()" class="FoodGroupPhotoFrame"><img src="matsvinn.png"></div>
                <div onclick="foodPageAd()" class="FoodGroupPhotoFrame"><img src="matsvinn.png"></div>
                <div onclick="foodPageAd()" class="FoodGroupPhotoFrame"><img src="matsvinn.png"></div>
                <div onclick="foodPageAd()" class="FoodGroupPhotoFrame"><img src="matsvinn.png"></div>
                <div onclick="foodPageAd()" class="FoodGroupPhotoFrame"><img src="matsvinn.png"></div>
                <div onclick="foodPageAd()" class="FoodGroupPhotoFrame"><img src="matsvinn.png"></div>
                <div onclick="foodPageAd()" class="FoodGroupPhotoFrame"><img src="matsvinn.png"></div>
            </div>
    </div>

     `;
     show();
}

function foodPageAd() {
    html = /*html*/`
    <h1>Too Good To Go</h1>
    <div id="foodMainFrame">
        <div id="foodPageInformation">1</div>
    </div>
    `;
    show();
    
}

function editUserInfo(){
    html = /*html*/`
    
    <h1>Too Good To Go</h1>

    <div id="mainFrame">
        <div class="frames" id="innerFrame">
            <div id="newUserInfo">
        
                <h1>Rediger Bruker</h1>

            </div>
                <div id="userLoginInfo">

                    <label>Nytt MobilNr:</label>
                    <input class="tlfNr" type="tel" placeholder= "Nytt Telefon Nr">
                    
                    <label>Nytt Adresse:</label>
                    <input class="adresse" type="Adress" placeholder= "Nytt Adresse">
    
                    <label>Nytt Passord:</label>
                    <input class="passord" type="PW" placeholder= "*****">
        
                    <button onclick="newUserInfo()" class="mainBtns" type="submit">lagre</button>
                    <button onclick="accountPage()"class="mainBtns" type="submit">Avbryt</button>
                </div>
        </div>
    </div>
    
    `;
    show();
}

function givAway(){
    html = /*html*/`
    <h1>Too Good To Go</h1>
    <button onklick = "mainPage()" class="logout mainBtns">logg ut</button>

    <div id="mainFrame">
    <div class="frames" id="innerFrame">
    
    <div type="text">Tittel:</div>
    <div type="text">Beskrivelse:</div>
    <div type="text">allergyID:</div>
    <div type="address">Adresse:</div>
    <div type="nomber">postnr:</div>
    <div type="date">Dato fra:</div>
    <div type="date">Dato til:</div>
    <div type="tel">Tlf:</div>
    
    <button>legg til bilde</button>
    <button type= "checkbox">jeg vil være anonym og vil bruke "takontakt" funksjon</button>
    <button type= "checkbox">Jeg vil at kunden skal kunne se min informasjon</button>
    <button onclick = "meinPage()">legg ut annonse</button>

    `;
    show();
}
 

