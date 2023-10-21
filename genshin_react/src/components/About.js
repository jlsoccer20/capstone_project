// src/components/About.js

export default function About() {
    return (
        <div>
            <img className="header-image-home" src={process.env.PUBLIC_URL + "/genshinbackground.jpg_large"} alt="Genshin Banner"></img>

            <h1>About Genshin Wish Simulator</h1>

            <p>
                Welcome to the Genshin Impact Wish Simulator, where your favorite Genshin characters are just a click away 
                (and a bit of luck)!
            </p>

            <p>This project implements many topics covered in the Dev10 Academy 2023 cohort. </p>

            <h2>Dev10 2023 Cohort - Capstone Project</h2>
            
            <h3> 1. Problem Statement</h3>

            <p>
                Genshin Impact is a new gatcha-style free world exploration game in which characters (also known as "waifus") are waiting to be taken home. 
                Some users enjoy the game casually and have all of the luck on their side (yours truly). 
                Others, on the other hand, are not so fortunate. 
                They spend days, weeks, months, and even years, collecting and saving up primogems (in-game currency) 
                so they can wish for and take home their favorite waifus. After all of their hard work and dedication, 
                they are rewarded with nothing more than disappointment, as time and time again, their waifu does not wish to go home with them.
            </p>

            <h3>2. Technical Solution</h3>
            
            <p>
                This Genshin Impact Wish Simulator (or should we call it Waifu Generator?) will make all of your dreams come true. 
                Primogems are now in unlimited supply, and the full collection of waifus are just at your fingertips, at the click of a button.
            </p>

            <p>
                The only catch is that you still have to play the gatcha game, just like the rest of us. 
                You will still receive your characters with the same rarity as they are in the real game. 
                In other words, characters with a rarity of 5_star will still only come up infrequently, with a soft-pity at 75 pulls, 
                and a hard-pity at... wait, how much was hard-pity again? I've never had this problem. ¯\_(ツ)_/¯
            </p>

            <h3>3. Glossary</h3>

            <p>Character</p>

            <p>
                A fictional (but we wish was real) individual or entity represented within the narrative. 
                Also known as "waifus". Characters each have their own unique name, weapon, artwork (photo), vision (element), and rarity.
            </p>
            
            <p>Collection</p>
            
            <p>
                This is where pulled characters are stored. Initially empty, the user's collection is their own private storage location of their pulled characters. 
                Each character will only be added to the collection once, but each character can have up to 6 constellations.
            </p>
            
            <p>Constellation</p>
            
            <p>
                When a character is duplicated, any additional pull will add one constellation to the character up until a maximum of six constellations. 
                In the original game, constellations make a character more powerful. In this Wish Simulator, 
                the usefulness of getting all constellations for each character is not yet discovered...
            </p>
            
            <p>Pull / Wish</p>
            
            <p>
                The action of making a "wish" in the gatcha game. Pulls are available in one's (1_pull) and ten's (10_pull), 
                generating either one or ten characters, respectively. After a pull, the character(s) are added to the user's collection. 
                Duplicates of the same characters are added as constellations.
            </p>

            <h3>4. High Level Requirement</h3>

            <p>-- Make a Wish (USER, ADMIN)</p>
            <p>-- View Collection (USER, ADMIN)</p>
            <p>-- View Characters in Collection (USER, ADMIN)</p>
            <p>-- Manually add Character, non-gatcha (ADMIN)</p>
            <p>-- Delete Character (ADMIN)</p>

            <h3>5. User Stories / Scenarios</h3>

            <p>
                -- As a casual user, I want to generate characters for my own personal enjoyment (without needing to log in).
            </p>

            <p>
                -- As an authenticated user, I want to prove my dedication to my waifus by saving them in my collection and taking care of them over time. 
                I want to log in and check on them every day so that I can make sure they are well fed and smiling at me first thing in the morning 
                and the last thing I see before I go to bed.
            </p>

            <p>
                -- As an administrator, I want to additionally be able to add and delete characters from the Collection, 
                so that I can manage all waifu-related collection functions.
            </p>

            <p>
                -- As an unauthenticated user, I want to log in, so I can save my collection and access it at a future time.
            </p>

            <p>
                -- As a new user, I want to create an account, so I can have my own collection.
            </p>

            <strong>Make a Wish</strong>
            <p></p>

            <p>
                Click the button to generate a character. The user will experience making wishes, 
                just like in the original game, which are either followed by excitement or disappointment. 
                What an adrenaline rush!
            </p>

            <p>
                Precondition: User can use the Wish Simulator as a Guest if they do not wish to store their data over multiple sessions. 
                User can log in if they wish to save and store their data.
            </p>

            <p></p>
            <strong> View Collection</strong>
            <p></p>

            <p>Click on "My Collection" to view previously pulled characters and enjoy showing off your waifus to all of your jealous friends.</p>

            <p></p>
            <strong> View Characters in Collection</strong>
            <p></p>

            <p>
                Click on the character's image to navigate to a new page with information about the selected character. 
                Enjoy looking at the beautiful artwork, listening to their angelic voices, and memorizing all of the facts about your favorite waifus.
            </p>

            <p>Precondition: The user must already "own" the character before they can view it.</p>
        
            <h3>6. Design</h3><p>

            <p> Database (MySQL) - Collection to store pulled characters</p>
            <p> Web API (https://gsi.fly.dev/)</p>
            <p> Other details (rarity calculations for 3_star, 4_star, 5_star. Count how many wishes)</p>

            <strong>Genshin Impact Wish Simulator</strong>

            <p>1. The user will click a button (on-click) to make a "wish".</p>

            <p>
                2. A Genshin Impact character will be randomly generated from a list of available characters. 
                (Extra: randomly generated according to rarity, display video animation of wish event)
            </p>
            
            <p>
                3. An image of the generated character will be displayed on the screen. (Extra: Audio)
            </p>

            <p>
                4. The pulled character will be added to the user's collection. Any duplicate characters will be stored as "constellations" (C0~C6). 
                Any duplicates beyond C6 will not be added.
            </p>

            <p>
                5. Stretch goal: The user can view their collection by clicking a link to a different page, which displays the character icons. 
                The user can click on a character icon to view further details about single characters 
                (voice actors, sample dialogue audio, birthday, wiki_url)
            </p>

            <p>
                The list of available characters will be taken from a Genshin Web API. Characters will have id, name, rarity (3_star, 4_star, 5_star),
                 weapon type (bow, catalyst, sword, claymore, polearm), vision (hydro, pyro, cryo, dendro, electro, geo).
            </p>

            </p>           
        </div>
    );
}
