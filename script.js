// Create animated stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 50;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = star.style.height = Math.random() * 3 + 1 + 'px';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// Sample stories as fallback
const sampleStories = [
    {
        title: "The Last Frontier",
        genre: "sci-fi",
        theme: "adventure",
        setting: "space station",
        content: `Captain Lyra Zhang stared through the viewport of Stellar Station Alpha, watching the swirling nebula that had been her home's backdrop for the past five years. The blues and purples twisted like cosmic dancers, oblivious to the crisis unfolding within the station's walls.

"Captain, we've got another systems failure in Sector 7," called her first officer, Tarek. "That's the third one this week."

Lyra sighed. "Not a coincidence, I take it?"

"Not a chance," said Tarek, sliding a data pad across the command console. "The failures follow a pattern. Someone's sabotaging us from the inside."

The station housed over three hundred scientists, engineers, and support staff—all working on the revolutionary Helios Project, humanity's best hope for sustainable interstellar travel. And apparently, someone wanted it to fail.

"Narrow down the suspects," Lyra ordered. "I want round-the-clock surveillance on—"

A deafening explosion rocked the station, throwing both officers to the floor. Emergency sirens wailed as red warning lights bathed the command center.

"Breach in the main laboratory!" shouted the security officer. "We're losing atmosphere!"

Lyra was already moving. "Lockdown protocols! Get everyone to emergency shelters!"

Racing through the corridors, she narrowly avoided panicked crew members. When she reached the lab, what she saw made her blood freeze. The specialized containment field for the experimental dark matter was fluctuating wildly.

And standing calmly before it was Dr. Elias Chen, the project's lead scientist, deliberately adjusting controls to destabilize it further.

"Step away from the console, Elias," Lyra commanded, drawing her pulse pistol.

He turned, smiling sadly. "You don't understand what we've created, Lyra. The Helios Project doesn't just bend space—it tears it. Each test has been creating micro-fractures in reality. If we succeed..."

"You're talking about theoretical risks," she countered. "This project will save billions of lives, connect distant colonies."

"I've seen through the fractures," he whispered. "What's on the other side... is coming through."

The containment field flickered, and within its energy, Lyra saw... something. Shapes that shouldn't exist, moving in ways that hurt her eyes.

"We have to destroy it all," Elias insisted.

Lyra hesitated, then lowered her weapon. "Show me your evidence. If you're right, we'll shut it down together. Properly. Without killing everyone on this station."

Elias stared at her, then slowly nodded. As he stepped away from the console, Lyra moved forward to stabilize the field.

"Captain," said Tarek's voice through her communicator. "We've discovered something in the quantum data. The nebula... it's not natural. It's some kind of doorway. And it's opening."

Lyra and Elias locked eyes.

"Too late," he whispered.

As the station trembled around them, Lyra made her decision. Not for Earth, not for science, but for the three hundred souls under her protection.

"Prepare the emergency shuttles," she ordered. "And download all the research. We're not running from this discovery."

She looked back at the strange shapes forming in the containment field.

"We're going to understand it. And then we're going to face it."`
    },
    {
        title: "The Ember Crown",
        genre: "fantasy",
        theme: "courage",
        setting: "medieval castle",
        content: `The ancient stones of Castle Durnhollow seemed to whisper secrets to those who knew how to listen. Kestrel, unfortunately, was not one of those people. As the youngest and most unremarkable servant in the castle kitchens, she was much more familiar with the scolding voices of the head cook and steward than with any mystical murmurings from the walls.

But today, as she scrubbed pots in the scullery, she could have sworn the castle was trying to tell her something.

"You're being ridiculous," she muttered to herself, dunking another blackened pot into the wash basin.

"Talking to yourself is the first sign of madness," came a voice from the doorway. Kestrel jumped, nearly dropping the pot.

A boy stood there—no, not a boy, but a young man with sharp features and clothes too fine for the kitchens. His dark eyes held a mischievous glint that made Kestrel immediately wary.

"Or perhaps," he continued, "it's the first sign of wisdom. I've never been quite sure."

"Can I help you, my lord?" Kestrel asked, hastily wiping her hands on her apron. He wasn't wearing noble colors, but something about him screamed 'important.'

"I'm no lord," he said with a laugh. "Just a messenger. And yes, you can help me." He glanced around conspiratorially before approaching. "I need to find the Ember Crown."

Kestrel blinked. "The what?"

"The Ember Crown. An ancient relic, supposedly hidden somewhere in this castle centuries ago." He leaned in. "And the stones have chosen you to help find it."

"The stones," Kestrel repeated flatly. "Chose me."

"You've heard them whispering, haven't you?"

A chill ran down Kestrel's spine. How could he possibly know that?

"Who are you?" she demanded.

"Ash," he said with a small bow. "Apprentice to the Royal Arcanist. And you're running out of time to decide, Kestrel."

"How do you know my name?"

"The same way I know that in approximately thirty seconds, the head cook will come looking for you, and any chance of saving this kingdom will vanish like morning mist."

As if on cue, a bellow echoed from the kitchen: "KESTREL! Where is that useless girl?"

Ash raised an eyebrow. "Well?"

Kestrel hesitated only a moment before untying her apron. "This had better not be some elaborate prank."

His smile widened. "Oh, it's elaborate all right, but no prank."

As they slipped out the scullery door and into a narrow passage Kestrel had never noticed before, the stone walls seemed to sigh with relief.

"The crown was hidden during the Sorcerer's Rebellion," Ash explained as they navigated the hidden corridor. "It can control the ancient defenses of the realm—defenses we desperately need now."

"Why? What's happening?"

"The queen is dead," he said grimly. "Poisoned last night. And her sister, who now takes the throne, is the one who killed her."

Kestrel stopped. "That's treason to even suggest."

"Yes. And it will be death for both of us if we're caught. But the usurper queen cannot be allowed to find the crown first."

The passage opened into a dusty chamber where the air felt strangely heavy. In the center stood a plain stone pedestal.

"This is it?" Kestrel asked, unimpressed.

"No, this is the first test." Ash nodded to the pedestal. "The crown reveals itself only to the worthy."

"And that's... me? A kitchen maid?"

"The stones chose you, Kestrel. Not for your station, but for what lies in your heart."

"And what's that?"

"That," said Ash with unexpected gentleness, "is what we're about to find out."`
    },
    {
        title: "Whispers in the Fog",
        genre: "mystery",
        theme: "discovery",
        setting: "coastal town",
        content: `The fog rolled in from the sea like a living thing, swallowing the small coastal town of Port Meridian street by street. Eleanor Wright watched it from the window of her rented cottage, a cup of tea cooling in her hands. Three weeks she'd been here, and not a single day without this evening ritual of encroaching mist.

Her phone buzzed. Detective Mills again.

"Wright," she answered.

"We found another one," Mills said without preamble. "Same as the others. No marks, no cause of death. Just a look of absolute terror and—"

"Let me guess. White hair?"

"Bingo. Man was thirty-six, according to his ID. Hair as white as snow."

Eleanor sighed. "I'll be there in twenty."

As she drove through the thickening fog, Eleanor mentally reviewed the facts. Four deaths in six weeks. All healthy adults with no connection except their final expression of horror and mysteriously bleached hair. No toxins, no trauma, nothing that explained how they died.

That's why the bureau had sent her. Because when cases defied conventional explanation, they called Eleanor Wright.

The latest scene was a small fishing boat, gently bobbing at the marina. Mills waited on the dock, his bulldog face even more wrinkled with frustration than usual.

"This is beyond weird now," he greeted her. "It's goddamn supernatural."

"No such thing," Eleanor replied automatically, though her conviction had been eroding with each inexplicable case over her fifteen-year career.

The victim lay on his back in the boat's cabin, eyes wide, mouth frozen in a silent scream. His hair—which showed dark brown roots—was stark white.

"Jeremy Coates, local fisherman," Mills supplied. "Well-liked, no enemies. Harbormaster found him when he didn't check in this morning."

Eleanor carefully examined the space. "No signs of struggle. Nothing stolen." She pointed to a logbook. "May I?"

Mills nodded.

The final entry, from yesterday evening, read: *Strange lights beneath the water. Following to investigate. Must be bioluminescent jellyfish or something. S.M. will want to see this.*

"Who's S.M.?" Eleanor asked.

"Sarah Marsh. Marine biologist at the research center up the coast. They were dating."

Eleanor closed the logbook. "I need to speak with her immediately."

At the research center, Dr. Sarah Marsh was not what Eleanor expected. Instead of a shaken, grieving girlfriend, she found a woman intensely focused on a computer screen displaying sonar readings.

"Dr. Marsh? I'm Agent Wright, FBI. I'm investigating Jeremy Coates' death."

"He saw them, didn't he?" Sarah asked without looking up. "The lights under the water."

Eleanor's instincts flared. "What do you know about them?"

"They're back," Sarah whispered. "After eighty years, they've returned."

"Who's back?"

Sarah finally looked up, her eyes feverish with excitement and fear. "In 1943, five fishing boats reported strange lights beneath the harbor. Within a week, twelve people were found dead. All with white hair."

"What are they?" Eleanor pressed.

"I don't know. But I've been tracking unusual electromagnetic disturbances in the bay for months. Something is down there, Agent Wright. Something that defies explanation."

Eleanor's phone buzzed with a text from Mills: *Harbor completely fogged in. Never seen it this thick. Can barely see my hand in front of my face.*

"We need to leave," Eleanor said suddenly, a chill running down her spine. "Now."

As they hurried to Eleanor's car, the fog thickened around them, no longer just obscuring vision but seeming to muffle sound itself.

"They hunt in the fog," Sarah whispered. "That's what the old records suggested. The fog is how they—"

A strange, blue-green light began to glow through the mist ahead of them. Pulsing. Hypnotic.

Eleanor reached for her gun, though some part of her knew it would be useless against whatever was coming.

"Don't look directly at it," Sarah hissed, grabbing Eleanor's arm. "That's how it starts."`
    }
];

// Function to generate story
async function generateStory() {
    const genre = document.getElementById('genre').value || 'sci-fi';
    const theme = document.getElementById('theme').value || 'adventure';
    const setting = document.getElementById('setting').value || 'space station';

    const prompt = `
Write a short story with the following parameters:
- Genre: ${genre}
- Theme: ${theme}
- Setting: ${setting}

Make it engaging, witty, and memorable. Include some clever dialogue and unexpected twists.`;

    const storyDiv = document.getElementById('story');
    const storyDisplay = document.getElementById('storyDisplay');
    const generateBtn = document.querySelector('.generate-btn');
    const spinner = document.getElementById('spinner');
    const btnText = document.getElementById('btn-text');
    const errorMessage = document.getElementById('errorMessage');
    const sampleStories = document.getElementById('sampleStories');

    // Show loading state
    generateBtn.classList.add('loading');
    spinner.style.display = 'inline-block';
    btnText.textContent = 'Crafting your story...';
    generateBtn.disabled = true;
    errorMessage.style.display = 'none';

    // Show story display area
    storyDisplay.classList.add('visible');
    storyDiv.innerHTML = '✨ Weaving your magical tale...\n\n🎭 Genre: ' + genre + '\n🎯 Theme: ' + theme + '\n🌍 Setting: ' + setting + '\n\n📝 Story incoming...';

    try {
        // First try with the streaming API
        try {
            const response = await puter.ai.chat(prompt, {
                model: 'x-ai/grok-3-beta', // Try with the specified model
                stream: true
            });

            storyDiv.innerHTML = '';
            for await (const part of response) {
                storyDiv.innerHTML += part.text;
                storyDiv.scrollTop = storyDiv.scrollHeight;
            }
            return; // Success! Exit the function
        } catch (streamError) {
            console.error("Stream error:", streamError);

            // Try again with a different model and non-streaming approach
            try {
                const fallbackResponse = await puter.ai.chat(prompt, {
                    stream: false // Try without streaming
                });

                if (fallbackResponse && fallbackResponse.text) {
                    storyDiv.innerHTML = fallbackResponse.text;
                    return; // Success with fallback! Exit the function
                }
            } catch (fallbackError) {
                console.error("Fallback error:", fallbackError);
                // Continue to error handling
            }
        }

        // If we get here, both approaches failed
        throw new Error("All AI generation attempts failed");

    } catch (error) {
        console.error("Story generation error:", error);

        // Show error message and sample stories
        errorMessage.style.display = 'block';
        sampleStories.style.display = 'block';

        // Display a more helpful error message in the story area
        storyDiv.innerHTML = `❌ We couldn't generate a new story with our AI service right now.\n\n` +
            `You can try:\n` +
            `1. Checking your internet connection\n` +
            `2. Trying again in a few minutes\n` +
            `3. Using one of our sample stories below\n\n` +
            `We apologize for the inconvenience!`;
    } finally {
        // Reset button state
        generateBtn.classList.remove('loading');
        spinner.style.display = 'none';
        btnText.textContent = '✨ Generate Story';
        generateBtn.disabled = false;
    }
}

// Function to load a sample story
function loadSampleStory(index) {
    const story = sampleStories[index];
    const storyDiv = document.getElementById('story');
    const storyDisplay = document.getElementById('storyDisplay');

    // Update form inputs
    document.getElementById('genre').value = story.genre;
    document.getElementById('theme').value = story.theme;
    document.getElementById('setting').value = story.setting;

    // Show story display
    storyDisplay.classList.add('visible');

    // Set story content
    storyDiv.innerHTML = `📖 ${story.title}\n\n${story.content}`;

    // Hide error message but keep sample stories visible
    document.getElementById('errorMessage').style.display = 'none';
}

function copyStory() {
    const storyText = document.getElementById('story').textContent;
    navigator.clipboard.writeText(storyText).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✅ Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

// Add example tag click functionality
document.addEventListener('DOMContentLoaded', function () {
    createStars();

    const exampleTags = document.querySelectorAll('.example-tag');
    exampleTags.forEach(tag => {
        tag.addEventListener('click', function () {
            const input = this.closest('.input-group').querySelector('input');
            input.value = this.textContent;
            input.focus();
        });
    });
});

// Add enter key support
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        generateStory();
    }
});