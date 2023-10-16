# capstone-project

### 1. Problem Statement

Genshin Impact is a new gatcha-style free world exploration game in which characters (also known as "waifus") are waiting to be taken home. Some users enjoy the game casually and have all of the luck on their side (yours truly). Others, on the other hand, are not so fortunate. They spend days, weeks, months, and even years, collecting and saving up primogems (in-game currency) so they can wish for and take home their favorite waifus. After all of their hard work and dedication, they are rewarded with nothing more than disappointment, as time and time again, their waifu does not wish to go home with them.

### 2. Technical Solution

This Genshin Impact Wish Simulator (or should we call it Waifu Generator?) will make all of your dreams come true. Primogems are now in unlimited supply, and the full collection of waifus are just at your fingertips, at the click of a button.

The only catch is that you still have to play the gatcha game, just like the rest of us. You will still receive your characters with the same rarity as they are in the real game. In other words, characters with a rarity of 5_star will still only come up infrequently, with a soft-pity at 75 pulls, and a hard-pity at... wait, how much was hard-pity again? I've never had this problem. ¯\_(ツ)_/¯

### 3. Glossary

Character

A fictional (but we wish was real) individual or entity represented within the narrative. Also known as "waifus". Characters each have their own unique name, weapon, artwork (photo), vision (element), and rarity.

Collection

This is where pulled characters are stored. Initially empty, the user's collection is their own private storage location of their pulled characters. Each character will only be added to the collection once, but each character can have up to 6 constellations.

Constellation

When a character is duplicated, any additional pull will add one constellation to the character up until a maximum of six constellations. In the original game, constellations make a character more powerful. In this Wish Simulator, the usefulness of getting all constellations for each character is not yet discovered...

Pull / Wish

The action of making a "wish" in the gatcha game. Pulls are available in one's (1_pull) and ten's (10_pull), generating either one or ten characters, respectively. After a pull, the character(s) are added to the user's collection. Duplicates of the same characters are added as constellations.

### 4. High Level Requirement

> Make a Wish (USER, ADMIN)
> View Collection (USER, ADMIN)
> View Characters in Collection (USER, ADMIN)
> Manually add Character, non-gatcha (ADMIN)
> Delete Character (ADMIN)

### 5. User Stories / Scenarios

- As a casual user, I want to generate characters for my own personal enjoyment (without needing to log in).

- As an authenticated user, I want to prove my dedication to my waifus by saving them in my collection and taking care of them over time. I want to log in and check on them every day so that I can make sure they are well fed and smiling at me first thing in the morning and the last thing I see before I go to bed.

- As an administrator, I want to additionally be able to add and delete characters from the Collection, so that I can manage all waifu-related collection functions.

- As an unauthenticated user, I want to log in, so I can save my collection and access it at a future time.

- As a new user, I want to create an account, so I can have my own collection.

> Make a Wish

Click the button to generate a character. The user will experience making wishes, just like in the original game, which are either followed by excitement or disappointment. What an adrenaline rush!

Precondition: User can use the Wish Simulator as a Guest if they do not wish to store their data over multiple sessions. User can log in if they wish to save and store their data.

> View Collection

Click on "My Collection" to view previously pulled characters and enjoy showing off your waifus to all of your jealous friends.

> View Characters in Collection

Click on the character's image to navigate to a new page with information about the selected character. Enjoy looking at the beautiful artwork, listening to their angelic voices, and memorizing all of the facts about your favorite waifus.

Precondition: The user must already "own" the character before they can view it.

### 6. Design

- Database (MySQL) - Collection to store pulled characters
- Web API (https://gsi.fly.dev/)
- other details (rarity calculations for 3_star, 4_star, 5_star. Count how many wishes)

int 5_star_chance = 0.00006;
int 4_star_chance = 0.01;

int 5_star_pity = 90;
int 4_star_pity = 10;

int count = 0; 
bool 50_50_guaranteed = false;
int banner_5_star_id; // set to some character id

bool win_50_50() {
    //TODO
    // return true or false
}

int get_random_5_star_id() {
    //TODO
}

int get_random_4_star_id() {
    //TODO
}

int get_random_3_star_id() {
    //TODO
}

// returns character id
int make_wish(){

    // hard pity
    if (stateMachine.count == 90){

        if (50_50_guaranteed){
            // reset 50_50 chances
            50_50_guaranteed = false;
            return banner_5_star_id;
        }

        // only need "if else" if no return statements
        if (win_50_50()){
            return banner_5_star_id;
        }

        // lost the 50_50
        50_50_guaranteed = true;
        return get_random_5_star_id();
    }
    
    // return the return value of the function
    return get_random_5_star_id(); 
}

// Check for soft pity
int chance_multiplier;

if (count < 75) {
    chance_multiplier = 1;
} else {
    chance_multiplier = 10;
}

// Play the gatcha
if (random(5_star_chance * chance_multiplier) == 0)


Genshin Impact Wish Simulator

1. The user will click a button (on-click) to make a "wish".
2. A Genshin Impact character will be randomly generated from a list of available characters. (Extra: randomly generated according to rarity, display video animation of wish event)
3. An image of the generated character will be displayed on the screen. (Extra: Audio)
4. The pulled character will be added to the user's collection. Any duplicate characters will be stored as "constellations" (C0~C6). Any duplicates beyond C6 will not be added.
5. Stretch goal: The user can view their collection by clicking a link to a different page, which displays the character icons. The user can click on a character icon to view further details about single characters (voice actors, sample dialogue audio, birthday, wiki_url)

The list of available characters will be taken from a Genshin Web API. Characters will have id, name, rarity (3_star, 4_star, 5_star), weapon type (bow, catalyst, sword, claymore, polearm), vision (hydro, pyro, cryo, dendro, electro, geo).
