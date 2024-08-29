
const Winamp = window.Webamp;
    // All configuration options are optional.
    let webamp = new Webamp({
        // Optional.
        initialTracks: [
            {
                metaData: {
                    artist: "Toby fox",
                    title: "Deltarune OST: 28 - Hip Shop",
                },
                url: "https://files.catbox.moe/n92z99.mp3",
            }, {
                metaData: {
                    artist: "Mora Oracle, Cling Ring",
                    title:  "Ghost Hack (feat. Cling Ring)",
                },
                url: "https://files.catbox.moe/zirj8a.mp3",
            },
            {
                metaData: {
                    artist: "Goreshit",
                    title: "Fine night",
                },
                url:  "https://files.catbox.moe/uwaak6.mp3",
            },
            {
                metaData: {
                    artist: "availax & pikaro",
                    title: "NYUTOPIA",
                },
                url:  "https://files.catbox.moe/ems1dq.mp3",
            },
            {
                metaData: {
                    artist: "Yem",
                    title: "Memories I Can't Get Back",
                },
                url:  "https://files.catbox.moe/t7zqoe.mp3",
            },
            {
                metaData: {
                    artist: "Yem",
                    title: "Crushed Lunar Pill",
                },
                url:  "https://files.catbox.moe/q9v95b.mp3",
            },
            {
                metaData: {
                    artist: "lhk",
                    title: "NIGHTMARE TECHNICIAN",
                },
                url:  "https://files.catbox.moe/62zev9.mp3",
            },
            {
                metaData: {
                    artist: "bye2",
                    title: "Aortic Pressure Valve",
                },
                url:  "https://files.catbox.moe/dvt0k4.mp3",
            },
            {
                metaData: {
                    artist: "vervid! ",
                    title: "behind this broken smile",
                },
                url:  "https://files.catbox.moe/qdk0rp.mp3",
            },
            {
                metaData: {
                    artist: "vervid!",
                    title: "i never existed",
                },
                url:  "https://files.catbox.moe/lb15rz.mp3",
            },
            {
                metaData: {
                    artist: "nylakiyo",
                    title: "will you love me?",
                },
                url:  "https://files.catbox.moe/v94zqz.mp3",
            },
            {
                metaData: {
                    artist: "FEMTANYL",
                    title: "Katamari",
                },
                url:  "https://files.catbox.moe/xn2vmx.wav",
            },
            {
                metaData: {
                    artist: "dokxid & yem",
                    title: "i slept in again",
                },
                url:  "https://files.catbox.moe/ejlw1c.mp3",
            },
          ],
    });
    webamp.renderWhenReady(document.getElementById('winamp-container'));

function port1(arr, el) {
    let ind = arr.indexOf(el);
    if (ind > -1)
      arr.splice(ind, 1);
    arr.push(el);
 }
console.log(webamp.options.initialTracks[13])

port1(webamp.options.initialTracks, {metaData: {artist: "Tosdy fox",title: "Deltarune sgdsgs: 28 - Hip Shop",},url:"https://files.catbox.moe/n92z99.mp3"},)

console.log(webamp.options.initialTracks[13])

function skibidiUnleashed() {
    webamp = new Webamp({
        // Optional.
        initialTracks: [
            {metaData: {artist: "Satan himself",title: "Skibidi toilet",},url:"https://files.catbox.moe/5ln7w5.mp3"},
          ],
    });
    webamp.renderWhenReady(document.getElementById('winamp-container'));
}


// webamp.options.initialTracks.push({
//     metaData: {artist: "Tosdy fox",title: "Deltarune sgdsgs: 28 - Hip Shop",},url:"https://files.catbox.moe/n92z99.mp3",
// })
