// For the Discord webhook
const request = require('request')
const webhookurl = require('./webhookurl.json').url
// Reddit
const Snoowrap = require('snoowrap')
const redditTokensAndStuff = require('./redditTokensAndStuff.json')
const r = new Snoowrap(redditTokensAndStuff)

// Elkia database
const {Database, Model} = require('mongorito')
const db = new Database('localhost/ServerStats')
class Server extends Model {}
db.register(Server)

const server = 'my.elkia.life'

async function postToReddit (host) {
  let server = await Server.findOne({host})

  let postTitle = `Elkia [Vanilla][SMP]{Whitelist}{${server.get('version')}}{Custom Terrain}{Mature}{Community}{Discord}`
  let postContent =
`Hey there! We're glad you're considering the **Elkia** community!

*Let's get the obvious things out of the way*

#General information
***
**Server Location**: Eastern USA

**Server Address**: ${server.get('host')}

**Website**: https://elkia.life *(currently under constructions, leaving it here for future reference)*

**Version**: ${server.get('version')}

**Difficulty**: Hard

**Staff**: Cerx (the boss), Anubis, Brockle, Caoimhin, and Tommin

Admins do have the definitive say, however we value the community wishes and decisions and believe in a democratic system for any changes that need to be made.

#About us
***
We're **well-estabilished** community of **dedicated** players with over a **year of history**. Our idea of a server is a Mindcrack/Hermitcraft-esque group - a **small and friendly** active community. 

Elkia players are very **diverse** - from countries **all around the world**. There's amazing **builders**, **technical people** skilled with **redstone** and commandblocks or just causuals who **enjoy playing**. The age averages somewhere around 17, however it does not matter to us as long as **you're mature**. We've got older players as well as the younger ones. 

Our current world began on **April 7th, 2017** and uses [custom terrain generation](https://www.reddit.com/r/Minecraft/comments/2koh9g/i_have_almost_perfected_customized_realistic/) which makes our world **quite unique**. While there may be plenty of untouched land, if you're looking for a fresh server we might not be the best fit for you. 

There's also some **command-block magic** behind the scenes to enhance your experience:

* The Ender Dragon drops Elytra upon death
* Your player head drops upon PvP death
* Shulker always drops at least one Shulker shell
* Loot-tables for [more mob heads](http://xisumavoid.com/moremobheads/)!
* A growing collection of our own custom advancements
* Endermans don't pick up blocks
* Only one player is required to sleep to skip the night
* AFK players will display grayed out in the tab menu

#Community events
***
Even tho we're rather small community, we try our best to bond everyone together and have fun!
##Weekly meetups
 **Each friday** at **8PM GMT** *(just [Google](https://www.google.com/search?q=8PM+GMT) that to convert it to your local timezone)* we will meet in one of our Discord voice channels and proceed to do some community activities. It might be just playing some minigames at Hypixel together, working on new and fancy epic build or most likely just derping around. Theese meetups are about having fun and bonding relationships with other members.
##Penguin saturday
*What a silly name!* - you might say. But don't be mistaken! Penguin stands for thrill and competition within the Elkia community *(and beyond)*! **Every odd saturday** at **8PM GMT** there's an UHC *(ever seen hunger games? Its kinda like that.)* competition to find out who's the ruler! Depending on number of participants, we will eithier play in teams or settle on free for all. Sometimes, sneaky admins might spice things up and implement different sets of rules - no match is the same!

#Important things to take into account
***
##General rules
We believe in our community so theres not a strong ruleset. *It's mostly just common sense.* Unfortunately sometimes admins need to get involved. To avoid any issues, please **obey the rules** listed bellow.
### Be nice and mature. 
Try to make new friends! Hate speech is not tolerated - *swearing is fine, just don't roleplay Eminem*

### Absolutely no griefing, stealing or cheating.
Intentionally causing harm to other players is not the way we roll. Any form of **hacking** (xray, flying or whatever) will get you **banned** without any questions asked or previous notice. **Duping items** is allowed only in specific occasions and you need to **get permission** from the community! *(generally speaking - dragon eggs and gravity blocks are fine with us, on the other hand diamonds, shulker boxes and basically all of the late-game stuff is prohibited)*

### Killing players without their permission is not allowed. 
This includes both **PvP** and traps as well. All items a player might lose upon death due to your actions must be **returned**.

### We encourage pranking!
So don't get mad when you become a taget of someone's evil doing. When pranking someone, just **don't go over the top** and **offer help** with cleaning up.

### So you're streaming/recording?
Thats **amazing**! No need to ask for a permission, **we love** and strongly encourage sharing any piece of history Elkia might have to offer! *(unfortunately not many of us do so)* Just **make sure** to **clarify** you're live when you're in a **voice chat** with someone.

##Activity
We're looking for **dedicated players** whom still **enjoy playing** even after they finished building their first house. Most of us are very **passionate** and we always have some new thing to play with or old project to polish. Members who don't play on the server for longer than **14 days** will be notified on Discord and removed after **21 days** if there's no response. Vacations are fine, just hit up admins and make sure they know.
##Discord
Our community practically *lives* on Discord, and it's very closely tied to the server itself. If you're new to discord, we highly recommend downloading the desktop app.
### #announcements
Our #announcemets channel is **open to everyone**! If you open up a new shop or want to anounce a new minigame/public idea you've had - you can! However, this comes with some issues. New members often type their reactions to the announcements there, instead of keeping that for the **#general** channel. This is a **punishable offence** - you'll get half-baked, which takes away your permission to post announcements - until you write at least one-page essay saying sorry. *We're not joking, please don't reply in #announcemets.*
### #landmarks
There's also a relatively new channel - #landmarks. It's there for everyone to **share** their creations and discoveries; You can submit your builds or cool places you've found. Just send a **screenshot** that represents the place of your choosing the best, come up with **a name**, add a **short description** and make sure to include **in-game coordinates**. Please properly **credit all contributors** when submitting a build.
For the sakes of easy discovery, any messages that are not landmark submissions will be removed. You might get half-baked for that too.
## Signing your builds
As time flows, members come and go. Its very hard for us to keep track of which building is who's - so for the sakes of keeping things simple we **need** you to put up a **sign** or a **banner** with your own **original design** visibly at **all** your builds. This especially applies for your project chests around the world and starter bases. Also, on completely different note - leave the word *penguin* somewhere in your application to confirm you've read the rules.
#Applying
***
All that sounds just **awesome**, right? If you'd like to apply, join our [Discord server](https://discord.gg/Bs3MS7K) to get started. Feel free to check out the #screenshots channel to get a better idea of what we're about. When you're ready, leave an application in #new-guys. Take your time, we very much value **well-written** applications that show you've put **some effort** into writing it!

If you have any questions, **feel free to ask us anything** - eithier here in the comments or on Discord.

*Please don't get mad if we conclude you might not be the best fit for us. Check out other listings here on r/mcservers, we're sure there's plenty of other communities that would love to have you!*

Best of wishes, hope to see you online! - *Elkia^a^a^a*`

  // Post to reddit
  let submission = await r.getSubreddit('mcservers').submitSelfpost({title: postTitle, text: postContent})
  let post = await submission.fetch()
  console.log(post.url)

  // Post notification to Discord
  const options = {
    uri: webhookurl,
    method: 'POST',
    json: {
      'embeds': [
        {
          'title': 'New reddit ad has been posted!',
          'description': `${post.url}`,
          'color': 7308758,
          'footer': {
            'text': new Date()
          }
        }
      ]
    }
  }

  request(options, (err, res, body) => {
    return res
  })
}
db.connect().then(() => {
  postToReddit(server).then(() => {
    console.log('Done!')
    db.disconnect()
  })
}).catch(err => console.log(err))
