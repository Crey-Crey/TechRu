const worldText = {
    1: "Tech - is a world where The God Keepers Family made a gigantic computer covering whole earth only in 180 years. There's nothing alive left except for humans who have their Angels and God to synthesize food and oxygen. Cities are big but not as big as the whole computer earth. There are three zones - for everyone, only for God Keepers and maintaince crew and only for God Keepers. On history lessons they tell whole history of earth",
    2: "Religion of this world is God and Six angels. But the Sixth is lost. Family that five generations ago made all of this, is now called God Keepers, they improve angels and God, and with all maintaince crew look out for any troubles in the Computer Space. All angels are like AI but with a mind of their own. 1st Angel - Oxydite. He is responsible for synthesation and providing oxygen into cities. In human ages he's 95 years old, since the date of his creation he's 180. In physical form Oxydite is like a camera combined with a spider like bot. Description of other Angels and their maintaince crew will be added on tgc D00m4evr",
    3: "There's only one country all over the world without any goverment - only mayors of cities and Keepers Family. Capital is Cotech or Ultimate capital.",
    4: "1.) Sixth Angel had a secret teleportation project to get rid of the God. During one of the experiments he was scattered into pieces of code and had spread all over the endless internet and on devices that were plugged in at that time. 2.) Since then no one remembers anything about him except that he went missing. After incident of Sixth Angel everyone forgot everything except that five-four generatioins ago the God and Angels were made. 3.) Grand people who are related to got are only parents of Dad in Keepers Family. 4.) The only transport in cities are metro and elevatros. Buildings are usually connecteed to the roof but there's no entrance to there except for the elevator. 5.) There are a lot of corridoes and halls. 6.) Zones for everyone's usage are metallic and concrete, but zone marked yellow and blue are kind of messy with wires, buttons and screens. 7.) On history lessons they do tell that there was a long organic era. 8.) Some technology is based off animals that lived before. 9.) Importans buildings have transformation option for defence from terrorists. 10.) There are security bots in internet and with physical form."
};

function fetchInfo(num) {
    const display = document.getElementById('output-display');
    display.innerHTML = `<p style="color:white; border-left: 2px solid #ffcc00; padding-left: 10px;">${worldText[num]}</p>`;
    display.scrollTop = 0;
}

function exitRitual() {
    document.getElementById('output-display').innerHTML = "<p style='text-align:center; color:#ff3300; margin-top:50px;'>Session ended. Bye.</p>";
    setTimeout(() => { location.reload(); }, 2000);
}
