// ─── Posts Data ───────────────────────────────────────────────────────────────
const POSTS = [
  {
    slug: 'the-bell-jar-experience',
    category: 'book-reviews',
    title: 'The Bell Jar Experience',
    subtitle: 'The tornado of things I felt while reading the Bell Jar by Sylvia Plath.',
    date: '2026',
    tags: ['book review', 'fiction', 'sylvia plath'],
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>The tornado of things I felt while reading the Bell Jar by Sylvia Plath. It didn't take me more than 10 pages to feel relatable to the main character Esther.</p>`
  },
  {
    slug: 'a-thousand-splendid-suns',
    category: 'book-reviews',
    title: 'The Bell Jar Experience',
    subtitle: 'The tornado of things I felt while reading the Bell Jar by Sylvia Plath.',
    date: '2026',
    tags: ['book review', 'fiction', 'sylvia plath'],
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>The tornado of things I felt while reading the Bell Jar by Sylvia Plath. It didn't take me more than 10 pages to feel relatable to the main character Esther.</p>`
  },
  {
    slug: 'a-thousand-splendid-suns',
    category: 'book-reviews',
    title: 'A Thousand Splendid Suns',
    subtitle: 'Coming soon.',
    date: '2026',
    tags: ['book review', 'fiction', 'khaled hosseini'],
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>Content coming soon.</p>`
  },
  {
    slug: 'palace-of-illusions',
    category: 'book-reviews',
    title: 'The Palace of Illusions',
    subtitle: 'Coming soon.',
    date: '2026',
    tags: ['book review', 'fiction', 'chitra banerjee divakaruni'],
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>Content coming soon.</p>`
  },
  {
    slug: 'to-the-girls',
    category: 'poems',
    title: 'To the Girls',
    subtitle: 'A thank you would be a pint word.',
    date: '2026',
    tags: ['friendship', 'gratitude', 'women'],
    cover: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>To,<br>
The girls who held my hair while puking but got me another shot<br>
The girls who hate my taste but pushed me into my lover's arms<br>
The girls who would slap me before consoling me for my decisions<br>
The girls who dance with me till the morning but also walk with me through the storms<br>
The girls who witnessed my many many personalities but never judged any<br>
The girls who shared my heartbreaks but also joked about the later on<br>
The girls who cry their hearts out but also give me the strength needed</p>
<p>A thank you would be a pint word.</p>`
  },
  {
    slug: 'wavy-hair',
    category: 'poems',
    title: 'Wavy Hair',
    subtitle: 'A girl learning to love herself as she is.',
    date: '2026',
    tags: ['self love', 'identity', 'freedom'],
    cover: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>Falling in love with my wavy hair was never an option as a child,<br>
but now I'm 21, independent enough to tame these curls,<br>
choosing to not straighten my hair for every occasion,<br>
letting them dance.</p>
<p>These waves that remind me of the salty ocean air.</p>
<p>As a child,<br>
falling in love with my wavy hair<br>
was never an option.</p>
<p>But now at 21, with freedom in my hands<br>
I tame these curls gently,<br>
refuse to press them flat for every gathering.<br>
I let them dance,<br>
rebellious and soft like ocean waves,<br>
carrying secrets of salty air<br>
and a girl learning to love herself<br>
as she is.</p>`
  },
  {
    slug: 'nineteen-degrees',
    category: 'poems',
    title: 'Nineteen Degrees',
    subtitle: 'The world belonged only to us.',
    date: '2026',
    tags: ['love', 'night', 'intimacy'],
    cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>That chilly night, nineteen degrees,<br>
we raced at eighty, far from the city.<br>
The lights faded behind,<br>
and the stars became our only guide.</p>
<p>My head rested upon your chest,<br>
listening to your heartbeat rise and fall.<br>
Each beat quickened with my every touch,<br>
a rhythm that calmed my restless nerves.</p>
<p>My fingers tapped gently on your skin,<br>
following the tempo of your pulse.<br>
In that moment, time felt still,<br>
and the world belonged only to us.</p>`
  },
  {
    slug: '5am-thrills',
    category: 'poems',
    title: '5am Thrills',
    subtitle: 'Breathless, bruised, lost in your embrace.',
    date: '2026',
    tags: ['love', 'morning', 'desire'],
    cover: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>Early morning thrills, smoking in the balcony<br>
Letting it warm up these misty mornings<br>
While I stare at those starry eyes<br>
And you take a step close only to pull me into an unstoppable kiss,<br>
that leaves me bruised and breathless.</p>
<p>5am thrills, smoking on the balcony,<br>
Misty mornings, the world feels wide.<br>
White Mustang playing in the background,<br>
Starry eyes hold me, I'm spellbound.<br>
Until your kiss steals the space,<br>
Breathless, bruised, lost in your embrace.</p>`
  },
  {
    slug: 'do-you-still-not-understand-me',
    category: 'poems',
    title: 'Do You Still Not Understand Me',
    subtitle: 'Is this truth, or a cunning facade?',
    date: '2026',
    tags: ['identity', 'loss', 'confusion'],
    cover: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>You said you wanna know what's going on.<br>
So I will tell you.<br>
But don't you dare tell me that you couldn't understand a single word.</p>
<p>I feel like I'm losing something.<br>
Or someone.<br>
But Destiny doesn't wanna disclose this thing or person.<br>
I can feel the pain.<br>
I can feel the tyranny.<br>
But what I cannot feel is the face of the person I'm losing.</p>
<p>I'm getting lost.<br>
In the train of memories.<br>
Wondering which is day which is night<br>
Which is dark.<br>
Wondering which is real and which is not.</p>
<p>If it is real or if it is a lie do you still not understand me.</p>
<p>You said you wished to know my plight,<br>
So I'll unveil it, word by light.<br>
But do not claim, with voice absurd,<br>
That you can't grasp a single word.</p>
<p>I feel I'm losing—what, or who?<br>
A shadow cloaked, no clear view.<br>
Destiny hides, with a quiet sting,<br>
The name of this vanishing thing.</p>
<p>The pain, it strikes, the tyranny burns,<br>
Yet the face I've lost, my mind discerns.<br>
I stumble, lost, on memory's train,<br>
Wandering through its shifting terrain.</p>
<p>Which is day, and which is night?<br>
Which is dark, and which is light?<br>
Reality bends, or is it fraud?<br>
Is this truth, or a cunning facade?</p>
<p>If it's truth or just a lie,<br>
Can you not see the tears I cry?<br>
Do you still not understand me now,<br>
As doubt carves lines upon my brow?</p>`
  },
  {
    slug: 'your-fragrance',
    category: 'poems',
    title: 'Your Fragrance',
    subtitle: 'Your fragrance brought it back.',
    date: '2026',
    tags: ['memory', 'heartbreak', 'love and loss'],
    cover: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>I never knew a scent could be so deep,<br>
Reviving wounds I thought were healed,<br>
Breaking my heart all over again,<br>
With memories of us.</p>
<p>Love, pain, and all the rest,<br>
Long buried, until<br>
Your fragrance brought it back.</p>`
  },
  {
    slug: 'astronomy',
    category: 'poems',
    title: 'Astronomy',
    subtitle: 'A moment solely for me.',
    date: '2026',
    tags: ['solitude', 'self', 'night'],
    cover: 'https://images.unsplash.com/photo-1532978379173-523e16f371f9?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>Sitting on the footpath,<br>
I gazed at the full moon golden in hue<br>
While the cold breeze makes me forget the day's heat and sweat<br>
Listening to astronomy by Conan Gray<br>
We have seen everything from Saturn to Mars replaying in my mind<br>
I let the time slow down, forgot to rush back home<br>
It's astronomy keeping us apart<br>
And for the first time in months I felt human</p>
<p>All I needed was a moment with myself,<br>
In this chaotic life<br>
A moment away from office, from home,<br>
from friends from social media, from the hustle.<br>
A moment solely for me.</p>`
  },
  {
    slug: 'nothing-in-your-eyes',
    category: 'poems',
    title: 'Nothing in Your Eyes',
    subtitle: 'I had never felt anything like this before.',
    date: '2026',
    tags: ['heartbreak', 'self worth', 'love and loss'],
    cover: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>How easy it was for you<br>
to kill my excitement<br>
with just a few careless words<br>
and that half-hearted smile.</p>
<p>I ran to you like a child,<br>
eager to share my happiness,<br>
but to you it meant nothing<br>
The thing I starved myself for,<br>
dreamed for, ached for,<br>
was still nothing in your eyes.</p>
<p>How blind I must have been,<br>
making excuses for your insolence,<br>
ignoring every sign,<br>
sweeping every wound beneath the rug<br>
just so I wouldn't stop liking you<br>
because I had never felt<br>
anything like this before.</p>`
  },
  {
    slug: '365',
    category: 'poems',
    title: '365',
    subtitle: 'Courage fell to its knees.',
    date: '2026',
    tags: ['letting go', 'memory', 'healing'],
    cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>Took me exactly 365 days to walk back into that bookstore.<br>
Memories of us wrecked me every time I passed its doors,<br>
and courage fell to its knees.</p>
<p>It was once a place I loved,<br>
even before you,<br>
but now it lives as nothing more than an abandoned memory,<br>
I was afraid to touch.</p>
<p>The cashier smiled like he remembered,<br>
like time hadn't swallowed us whole,<br>
but his smile faltered,<br>
eyes widening softly<br>
when he saw someone beside me<br>
who wasn't you.</p>`
  },
  {
    slug: 'how-silly-of-me',
    category: 'poems',
    title: 'How Silly of Me',
    subtitle: 'You only wanted a few moments with me.',
    date: '2026',
    tags: ['heartbreak', 'young adulthood', 'letting go'],
    cover: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>How silly of me to dream a new year with you,<br>
to make a vision board with you,<br>
to wait for midnight just to kiss you,<br>
to pour my heart into loving you,<br>
to dance until the sunrise,<br>
thinking you were mine…</p>
<p>While you did all of this with someone else<br>
Leaving me in quiet shadows.</p>
<p>How silly of me for wanting a life with you<br>
when you only wanted a few moments with me.</p>`
  },
  {
    slug: 'oh-death-come-again-another-day',
    category: 'articles',
    subtitle: 'about an old friend who comes n goes.',
    date: 'March 5, 2026',
    tags: ['death', 'young adulthood', 'rebirth', 'life transitions'],
    cover: 'https://substackcdn.com/image/fetch/w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd57f688b-bb68-4199-8f39-759d3b5872e3_960x540.png',
    substackUrl: 'https://chndnaaaaaaa.substack.com/p/oh-death-come-again-another-day',
    body: `<p>One fine morning, it was the usual crowd in the metro, the morning sunshine was all the same, nothing different. I felt something churn in my stomach and felt a little dizzy, so I decided to go to the nearest coffee shop. I ordered my usual (cappuccino) and sat at a table near the window, and was gazing outside, waiting for my coffee.</p>
<p>I saw the creature that haunted me in one of my dreams a couple of years ago, a black shadow with a white mask like the ghost from Spirited Away movie. I was not shocked to see him again. I smiled at him as I recognized him. I knew him; he was called Mors (death).</p>
<p>The smile began to fade as he started walking towards me slowly. I didn't want him to approach me so soon at the ripe age of 21. There are so many books that I haven't read, so many places I haven't visited, so many movies that I haven't watched, so many people whom I haven't met, so many feelings I haven't felt, so many pending lessons, I haven't seen the northern lights, so many unfulfilled promises, so much life that I haven't lived.</p>
<p>I haven't found myself, I haven't felt something like what Kafka felt with Milena, I haven't worn a silk dress to a jazz bar, I haven't met my tribe, I haven't gotten my driver's license, I haven't spent a summer in Santorini, I haven't seen peonies in real, I haven't had the best wine, I haven't built a snowman, I haven't learnt swimming, I haven't bought the red bottoms, I haven't even celebrated my birthday alone. There's so much that I haven't done or even touched yet.</p>
<p>After my pleading, he stood like a stone and nodded like he heard the train of thoughts running at a speed of 180kmph.</p>
<p>One last favor I asked him was to come back to me in a couple of years, when at least 70% of the things to be done are done. I reassured him that I would not let him go back alone then. I will be there with him, walking side by side, him holding my aging hand and telling me tales of the afterlife while I pretend like I am listening.</p>
<p>What if I don't do any of these because I don't wanna die?</p>
<p><em>Darling, what if you do everything and run into his arms?</em></p>`
  },
  {
    slug: 'numbness-and-breakdowns',
    category: 'articles',
    title: 'Numbness and breakdowns',
    subtitle: 'a small article on the roads that lead to numbness and breakdowns at random hours.',
    date: 'March 3, 2026',
    tags: ['heartbreak', 'letting go', 'identity', 'young adulthood', 'choosing yourself'],
    cover: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com/p/numbness-and-breakdowns',
    body: `<p>What is this feeling of standing between numbness and breakdowns called? Does it even have a name? I am standing at a junction where these two roads meet, and I cannot choose to travel both these roads at once. This double edged sword that will hurt me either way sooner or later, sharper pain or blunt, slow one. I should pick one and face the truth.</p>
<p>When I chose the road called breakdowns, the pain was unbearable beyond what a frail human could take. I prayed to God to make me numb so I could escape from the pain. I begged him like a desperate child looking for his mother. What was all that pain for? I kept asking myself this question every day, like it's a task I needed to finish. Why did I choose to suffer a storm that wasn't in my hands to control and wasn't even meant to be mine?</p>
<p>I had no say in what had happened. I did my best, gave everything I had in me to prevent things from falling apart. But they did fall apart in the end, and even now I am alone. Breakdowns happened in the most random places and situations. I was someone who never cried for anything; it was like all those years of bottled-up tears came out in the breakdown phase.</p>
<p>I cried listening to Kabira, Daylight, Mystery of Love, Chance with You, The Night We Met, and many more songs. I heard them on loop. Cried in the office, cried in a cafe having my favorite food, cried while walking back home, cried in a restaurant and scared the guy sitting next to me, cried in the shower, and worst of all, cried in the metro, and a sweet lady offered me her seat. I can't remember the places where I did not cry. 21 years of tears rushed out in a couple of months.</p>
<p>When I chose the road of numbness, yes, I felt nothing, absolutely nothing; I was a stone, a cold one. No warmth that could turn the coldness away. I disappeared, let them walk away. I saw the closest people not blink an eye. I saw them go on with their life like nothing had happened.</p>
<p>The people I gave everything I had to felt like this was just another not-so-serious crisis I was in, just another guy issue. Now that I have lost it all and have nothing to give, the love and caring I have received from some of my closest friends just disappeared. Is that what friendship is about? So, people don't check on their friends during tough times anymore?</p>
<p>When you know that someone is basically dying internally, it doesn't concern you anymore? Especially when this someone has stayed with you in your toughest battles. I keep wondering if it's my fault for pushing away people when I need them the most, or if it's their fault for not recognizing when I am in pain.</p>
<p>Opening up to people is a pain, and people brushing it off, saying it's nothing, is a different pain. Maybe situations like these show the truest intentions of people. True colours came out before the day of colours.</p>
<p><em>This numbness has taught me that homes can be replaced easily when the ceiling leaks.</em></p>`
  },
  {
    slug: 'breakdowns-during-office-hours',
    category: 'articles',
    title: 'breakdowns during office hours',
    subtitle: 'A month of silence, a hundred what-ifs, and the courage to ask the questions that scared me the most.',
    date: 'February 25, 2026',
    tags: ['love and loss', 'heartbreak', 'young adulthood', 'letting go'],
    cover: 'https://substack-post-media.s3.amazonaws.com/public/images/a6a54cf5-0fd7-45ea-892d-60db26eee9f4_1169x1280.jpeg',
    substackUrl: 'https://chndnaaaaaaa.substack.com/p/breakdowns-during-office-hours',
    body: `<p><strong>I ended things with you a month ago, and yet here I am, crying in the office, ending things all over again.</strong></p>
<p>It's quieter this time. Quieter, and somehow that quiet gave me the closure I needed to stop thinking about all the <em>what ifs</em>.</p>
<p>Until this moment, I had no idea how deeply I felt. I had no clue about the intensity of it. This very moment, when I'm sprinting out of the office as tears race down my cheeks I realize it all at once. I ran like my life depended on it until I found a place where I could sit without worrying about people seeing me fall apart.</p>
<p>The intensity of the pain shocked me. I couldn't even breathe, forget thinking straight. I usually don't go back to people once I end things. But this time, I felt like I needed answers to choose myself over you. So yes, I hurt my self-respect a little, but I needed to know.</p>
<p>I don't know if those answers will set my heart free from the pain. But at least I won't spend the rest of my days questioning my worth or wondering about the what-ifs that could have been.</p>
<p>One month of not talking to you made me feel numb. I didn't know what to think about the situation, so I did everything in my power not to think about you at all. I drowned myself in work and made it my biggest distraction. I took on multiple projects. I started reading so many books that I sometimes confuse the plots. I created a new Instagram account and promised myself I would post every day. I started meeting people often so I wouldn't get lost in my thoughts.</p>
<p>I gave myself no time to sit idle. I made sure there wasn't even an hour in the day where I could think.</p>
<p>The days went fine, more than fine, to be honest. But the nights… the nights had only one goal, to sleep and let this fragile body rest. I couldn't achieve even that. My body begged for rest, but my mind ran in infinite loops of what ifs. And my heart, my silly heart, bled again and again. Nothing to clot the wound. Just aching heartstrings and longing that refused to sleep.</p>
<p>But today, I let go of the need to stay busy. Maybe I wanted to think. Maybe I wanted to feel it all, because I am only human. I am a woman, a hopeless romantic, as if being emotional and sensitive weren't already enough.</p>
<p>It's in my nature to feel. To feel everything, as if I may never get to feel again tomorrow. That's how I am, I either feel everything, or I feel nothing at all. Two extremes.</p>
<p>Today, I asked you the questions that have been haunting me for days. Your answers surprised me.</p>
<p>So you did feel something when we last met. My gut feeling was right. You let me stand at your boundaries. Maybe you really liked me. Or maybe you already knew this would never go further.</p>
<p>I didn't have the courage to ask which one it was. I was afraid my heart wouldn't survive the truth.</p>
<p><em>So I left, silently.</em></p>`
  },
  {
    slug: 'mint-chocolate-and-broken-promises',
    category: 'articles',
    title: 'Mint Chocolate and Broken Promises',
    subtitle: 'It wasn\'t about the ice cream.',
    date: 'February 16, 2026',
    tags: ['self worth', 'choosing yourself', 'young adulthood', 'letting go'],
    cover: 'https://substack-post-media.s3.amazonaws.com/public/images/5f183122-7f37-40d2-8498-8870b0aab8e3_736x920.jpeg',
    substackUrl: 'https://chndnaaaaaaa.substack.com/p/mint-chocolate-and-broken-promises',
    body: `<p><em>Hey, I'm sitting in a cafe sipping coffee, books stacked on the table, while I let the pasta cool down. I'm wearing that pink top, which I wanted to wear to get ice cream with him today, but he completely forgot about it, like he never intended to make it happen. I didn't remind him of the date because part of me already knew the ending. I thought if I went out by myself, I would feel better, but here I am, completely unaware of the present, lost in the memories of him and us, trying my best to be in the moment.</em></p>
<p><em>I am mad at him, I am mad at myself for letting him treat me like this, like I'm asking him too much when I'm settling for breadcrumbs in reality.</em></p>
<p><em>I wanted to remind him of our first encounter, the people we were when the universe decided to surprise me with you, I wanted to remind him of how sweet he was that day, how much he liked that pink top, I wanted to remind him of everything beautiful that happened between us because I could feel it in my core, the very thing I didn't want to happen, him drifting away from me like the wind was taking him elsewhere, I wasn't ready to let him go already, betraying myself.</em></p>
<p><em>But he completely forgot about our mint chocolate ice cream date today. It sounds silly that I'm feeling all this about an ice cream date, but it's about the broken promises. Every time he promised me that he would try harder, every time he promised me quality time. Every time I believed that things would improve, every small disappointment led to this breaking point, where a decision should be made.</em></p>
<p><em>I can't let him go on like this with no accountability.</em></p>
<p><em>I like him, but I don't wanna betray myself for nothing again. The tears in my eyes run down my cheeks, ruining my mascara (goddd I should've bought that waterproof mascara). If he truly felt everything he said he did, I don't think I would be sitting here and ruining my day.</em></p>
<p><strong>Is it that difficult to give some time and reassurance when you know that I overthink??</strong></p>
<p><em>Fuck what I feel and fuck what we had.</em></p>
<p><em>I loathe myself for giving him this liberty. I want to write more about it, but I don't have the energy to do it. I feel like my lungs aren't cooperating already, or maybe it's just steamy in here.</em></p>
<p><em>I look this good, and I am having the two things I love the most, pasta and coffee, and yet my mind can't stop wondering about how easy it is for him to treat me like this. I guess this is how it ends.</em></p>
<p><em>Oh, I forgot there was nothing to begin with.</em></p>
<p>Thank you, reader.</p>`
  },
  {
    slug: 'relearning-2026-my-second-engineering',
    category: 'articles',
    title: 'Relearning 2026: My Second Engineering.',
    subtitle: 'A Conversation That Shifted My Trajectory',
    date: 'February 14, 2026',
    tags: ['rebuilding', 'career growth', 'self development', 'career reset'],
    cover: 'https://substack-post-media.s3.amazonaws.com/public/images/219974d8-d304-4ec1-819c-1997ca13a2af_400x349.jpeg',
    substackUrl: 'https://chndnaaaaaaa.substack.com/p/relearning-2026-my-second-engineering',
    body: `<p>Today was a very chill day at work. There were barely 10 people on my floor since it's a Saturday, and also Valentine's day the office is deserted. After lunch, I was just reading a book and relaxing. My manager came up to me asking if I was occupied, so I thought he would have wanted to talk about the project progress or any new requirements, but he asked me about the subject-wise notes we get in university, and I was a little surprised when he wanted the notes if I had any on my laptop.</p>
<p>During the convo, he told me that he wants to learn again, everything related to tech from scratch, and he wanted to train his brain to forget what he learnt and start from zero. He is more into project management and doesn't deal with tech a lot. So, I asked him if he is planning to switch roles or jobs, and he was like no nothing of that sort. I just wanna learn and relearn everything that I already know. The eagerness in his eyes to learn was something inspiring.</p>
<p>This man, in his late twenties, with no urgent need to know these subjects, wants to learn again, and he told me that he regrets not learning more in his college days. He did not wanna just learn the booming skills like AI, Data Science, or GenAI; he wanted to start with the very core Math, C, Java, OS, and CN. He knew all these already, but the urge to relearn everything kinda struck me tbh.</p>
<p>I am also at zero now, and I am in a place looking for a stable, well-paying job, but my skills are mediocre, nothing impressive. Along the lines of job hunt, I lost the zeal I had for learning and stopped working on my skills. I worked hard until I got my first job offer, even though it was not the offer I wanted. I kinda settled down, I let myself forget what I truly wanted in the name of a break.</p>
<p>Right now, I am only an intern here, and he was asking me what kind of roles I am looking for and how I am preparing. When I told him that I have given up on preparing and I am not skilled enough, what he replied was <em>"Chandana, I see your work everyday, I have seen the growth of your project, I know your skills and you might think little of yourself but you are quite talented for the roles you are looking for, do you really think you would be here without having the skills?"</em> It was not a big compliment but knowing that someone believes in your work and skills feels very nice especially during times like these when I don't really have any faith in myself. The question he asked in the end brightened things in my mind.</p>
<p>Once the convo got over I started thinking if someone else can start from zero again why can't I, I don't have to just lay down here and look at my dreams floating up above, I can build again, I can learn again, I don't have to settle here I can go chase that dream, I can give myself the life that I dreamt of.</p>
<p>I downloaded all my college notes (38 subjects, 210 PDFs and PPTs), sent everything to him, and saved it in a folder called <em>relearning 2026</em>. Basically, this is another engineering. Maybe this was the start I needed. I think it's time I get out of this comfy, warm blanket, walk on the cold ground, and chase that dream again.</p>
<p>I should thank my manager for this.</p>
<blockquote><p>"No tree, it is said, can grow to heaven unless its roots reach down to hell."<br>— Carl Jung</p></blockquote>
<p><em>A heartfelt thank you to the reader.</em></p>`
  },
  {
    slug: 'days-i-miss-you-a-lil-more-than-the',
    category: 'articles',
    title: 'Days I miss you a lil more than the usual',
    subtitle: 'On missing someone who never really chose you.',
    date: 'February 13, 2026',
    tags: ['love and loss', 'letting go', 'self worth'],
    cover: 'https://substack-post-media.s3.amazonaws.com/public/images/f37cc82f-b411-4c83-b625-fc64788e9756_736x404.jpeg',
    substackUrl: 'https://chndnaaaaaaa.substack.com/p/days-i-miss-you-a-lil-more-than-the',
    body: `<p><em>It's just one of those days where I miss u a little more than usual. I open your snaps that I haven't opened in a long time I see pics of you in your handsome outfit checks, I see you wearing the shirts I love, I see you smiling the same, I see you having the same coffee that I love what hurts me the most is I can just see you like this but I can't even replay your snap, I can't save it or reply something sweet or flirty to your snaps. All I can do is watch you live your life as if nothing happened, like u didn't feel a single drop of the ocean I felt. I would've just been another girl in your DMs whom u could impress easily.</em></p>
<p><em>I should've trusted my gut the day u opened up your emotions slowly to me, the day you let me stand on your boundaries without a constant reminder in my head to step back. I could see you becoming close to me, and my gut warned me that it might be the last time we meet, and it came true. I tried manipulating my gut into thinking that u were finally feeling something, getting closer to me, and you wanted me like I wanted you. But apparently, I was the only one who felt it.</em></p>
<p><em>Opening up and genuinely liking someone petrified you. Just because the pain is understandable doesn't give you the right to treat me this way. I understood how difficult it was for you to trust me and open up about your emotions and the things you were going through. I waited for weeks, giving you time. I did not rush you into anything. I never asked you what we were, and I never told you what I wanted. Maybe it was my fault to sit there and wait for you to allow me in while you treated me like I never mattered. All those days where you could've just told me you were busy, but instead you chose not reply for 6 hours, 8 hours, 10 hours, 14 hours, and 24 hours, most times making me feel neglected and unimportant in your life.</em></p>
<p><em>I know how precious time is for everyone, but the person who wants your time isn't precious enough? You say you want to give me your time, but your actions show me the truth. Busy is just a lie, sweetheart.</em></p>
<p><em>I don't know how I stayed there with all the disrespect and constant measuring up my worth for months when you never even uttered the words that you liked me. All I ever wanted was consistency and time, but that hit you like a rocket lol.</em></p>
<p><em>It feels like a thundering night in my heart every time I miss you. I keep reminding myself of the disrespect and the nights I stood in front of the mirror questioning my own worth. It feels impossible to like myself when I still can't let you go.</em></p>
<blockquote><p><em>I needed to lose you to find me<br>This dancing was killing me softly<br>I needed to hate you to love me, yeah — Selena Gomez</em></p></blockquote>
<p><em>I am scared that if I don't keep reminding myself of all the pain I went through to be with you and the pain I am going through to let you go like a sane human being, I might just go back to liking you again, betraying myself again and again for nothing, putting myself at zero again, I am afraid I don't have it in me to rise from zero, I might just lie down there and not move an inch, I might just surrender myself to whatever it is that keeps me there. There's only exhaustion left in me, and the best thing I can do is resent you so much that I will not fall into that dark coal mine again.</em></p>
<p><em>You took away the soft girl in me, who genuinely liked you for who you are, or maybe just the illusion you showed me in the beginning, but I will not let the memories of you take me away. <strong>The cost of losing myself is something I can't afford to pay. I've lost enough in the name of love.</strong></em></p>`
  },
  {
    slug: 'the-girl-you-left-behind',
    category: 'articles',
    title: 'The Girl You Left Behind',
    subtitle: 'A letter to the one who walked away, or all the questions that couldn\'t be asked.',
    date: 'February 6, 2026',
    tags: ['love and loss', 'identity', 'finding her'],
    cover: 'https://substack-post-media.s3.amazonaws.com/public/images/419ef9c4-2f1c-4c9f-8c0a-b8465ade6118_736x508.jpeg',
    substackUrl: 'https://chndnaaaaaaa.substack.com/p/the-girl-you-left-behind',
    body: `<p>What about everything that girl felt when you left her for your convenience?</p>
<p>What about everything she had to go through to be with you?</p>
<p>What about everything she has to do to get over you?</p>
<p>What about the life she dreamt with you?</p>
<p>What about the pain she endured?</p>
<p>What about the pain she has to endure now that you left?</p>
<p>How easy was it for you to leave with just a single line sentence telling that this isn't working out? You should've thought about it in the initial stages of the relationship. You should've thought about it before you made her fall in love with you, before you declared your everlasting love for her, before you made her believe that she was made for you.</p>
<p>That girl never believed in love and its fairytales, but you were like a tornado in her not-so-chaotic life. You were the exception to her hate for men, the only exception. Turns out that exceptions can be dangerously painful.</p>
<p>There she sits wondering if she didn't love you enough, if she was not warm enough, if she didn't put in the required efforts, if she did not satisfy your needs, if she wasn't pretty enough, if she did not learn your hobbies enough, if she wasn't funny enough, if she was not adjusting enough to your needs and your life, if she was even enough.</p>
<p>How long would she look for the closure that you never gave?</p>
<p>Why did you even become a part of her life if you had no intention of staying? All the pieces that you left her to deal with, her hyper independence that will not let her cry for help. Where will this little bird go to seek her solace?</p>
<p>How did her opinion not matter when you wanted to leave? She felt her whole life turn upside down while you uttered those words. She thought she was dreaming and forced herself to wake up, but she couldn't. She carries all these broken pieces like they might disappear if she stops carrying. She sees pieces of her, pieces of you, pieces of the life together you talked about in these pieces.</p>
<p>Will you ever take the responsibility for her pain when you solely caused it for your convenience? How cruel we people are to cause immense pain to someone whose only intention was to give us the kind of love we never had, the purest form of love with no expectation in return. And still all we gave them was loss. Love and loss are such simple words, and yet the difference in meaning is not measurable but they seem close to the people who love with no limitations.</p>
<p>It might take her some time, probably years, to find the substance that will hold her pieces like mosaic art made <strong>with love</strong>, and I pray to God that she finds this substance in herself, not in some place, not in some person, not in an object, not anywhere else but herself.</p>`
  },
  {
    slug: 'what-even-is-in-hyderabad',
    category: 'articles',
    title: 'What even is in Hyderabad?',
    subtitle: 'A lot of people who know me constantly ask this question. It\'s time to share the answer.',
    date: 'February 10, 2026',
    tags: ['identity', 'freedom', 'first love', 'self discovery', 'home'],
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Charminar_Hyderabad.jpg/1200px-Charminar_Hyderabad.jpg',
    substackUrl: 'https://chndnaaaaaaa.substack.com/p/what-even-is-in-hyderabad',
    body: `<p>A lot of people who know me constantly ask this question: "What even is in Hyderabad? Why are you so obsessed with it?" I've heard this question a couple of times, but it's time to share the answer with y'all.</p>
<p>I was in Hyderabad for a year when I was 17, which feels like a decade ago lol. 17 was such a tender age. I was told I was too mature at 17, and I thought that it was a good thing. I was there because I took a drop year and wanted to prepare for NEET. I moved away from home, stayed in a PG, and got an entirely fresh perspective on life. I didn't know who I was before Hyderabad happened to me. I was a mess. Now I can't imagine who I would've been if Hyderabad hadn't happened to me.</p>
<p>In a word or two, Hyderabad was my muse, or maybe I was its muse. It was the place where I had my first shot at freedom from everything, everyone, including myself. Ironic how I found myself there when I was clearly running away from myself. A place that taught me poetry, a place that taught me to explore on my own, a place that taught me kindness, a place that taught me to be gentle with myself, a place where my first kiss happened, a place that made me feel like a muse, a place where a heart was shattered, a place that felt close to myself.</p>
<p>For most girls, that first shot of freedom kind of defines the course of their life; it teaches them how different life is outside the rules and regulations of the home they grew up in. The taste of freedom can be addictive. The freedom to go where she wants, do what she wants, and not worry about the curfews is definitely something. My first shot of freedom gave me a bigger picture of life, showed me the truth with no filters, made me spiritual, and most importantly, it made me independent. It gave me the strength to stand on my own feet and have my own dreams.</p>
<p>Hyderabad was the first place that felt like home. I visited so many places before Hyderabad, but none of them made me feel like I was at home, and the food? I don't think I have to tell you about it, amazing food (Biryani and Irani chai loveeeeee). It was my first everything. A lot of my firsts happened there.</p>
<p>My first time falling in love, the kind of love where you break their heart so they can find someone better. I let him go because I genuinely felt that he could be happier with someone else. Someone who was more emotionally stable than I was, someone who could become his home, not just a shelter.</p>
<p>Now that it's been years, I feel like a coward for saying I let him go for his own happiness, because I couldn't give him what he deserved. I didn't understand the pain back then, but I eventually understood that the heartbreak wasn't his alone; it was mine as well. Maybe it all happened for a reason.</p>
<p>I didn't just fall in love with a guy there; I fell in love with myself. It was my first time meeting the person I was, and damn, that girl was something. If I were a guy, I would've gone to war for her. That girl was kind, had clear boundaries, too mature for her age, lively, curious about everything, and whatnot. She was like a hummingbird. I can't relate to her right now. She feels like a distant dream.</p>
<p>The people I met in Hyderabad were so kind, I felt that kindness from people who were close to me, but seeing that type of kindness from strangers made me softer.</p>
<p>It was the place that made me take the road not taken, which led me to the person I am right now. Along the lines, it became my home.</p>
<p><em>A BIG THANK YOU FOR READING :)))))))))</em></p>`
  },
  {
    slug: 'the-rot',
    category: 'poems',
    title: 'The Rot',
    subtitle: 'Too young to die, too tired to live.',
    date: 'June 19, 2025',
    tags: ['exhaustion', 'identity', 'survival'],
    cover: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>I always wondered<br>
how it felt—to be buried,<br>
to decompose.</p>
<p>One false belief:<br>
it comes only after death.<br>
Why did no one tell me<br>
it's possible before?</p>
<p>Now,<br>
the answers arrive,<br>
uninvited,<br>
whispered through exhaustion.</p>
<p>Too young to die,<br>
too tired to live,<br>
too scared to step ahead.</p>
<p>Breaths—<br>
not for life,<br>
but to keep the flesh from rotting,<br>
to delay the stink<br>
that creeps beneath glamour.</p>`
  },
  {
    slug: 'no-time',
    category: 'poems',
    title: 'No Time',
    subtitle: 'Moments that borrow your breath before returning you changed.',
    date: 'June 15, 2025',
    tags: ['time', 'memory', 'presence'],
    cover: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>Moments so simple,<br>
yet they pull you back.<br>
A sip of coffee,<br>
the warmth like a hand once held.<br>
A passing colour and suddenly,<br>
you're standing in a different time.</p>
<p>Maybe it's always been<br>
about the moments<br>
that borrow your breath<br>
before returning you<br>
changed.</p>`
  },
  {
    slug: '21',
    category: 'poems',
    title: '21',
    subtitle: 'No disclaimer for becoming this tired kind of grown.',
    date: 'July 27, 2025',
    tags: ['young adulthood', 'growing up', 'identity'],
    cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>Woke up drowning<br>
in feelings I never invited.<br>
Tears tracing paths down silent cheeks,<br>
a quiet panic whispering:<br>
Time is slipping.</p>
<p>I want so much,<br>
yet the world spins faster than I can breathe,<br>
like it's set to 2x speed<br>
while I'm stuck on pause.</p>
<p>Why did no one leave a warning<br>
at the edge of childhood?<br>
No disclaimer for becoming<br>
this tired kind of grown.</p>`
  },
  {
    slug: 'the-fav-one',
    category: 'poems',
    title: 'The Fav One',
    subtitle: 'She realizes, she\'s in love.',
    date: 'April 22, 2025',
    tags: ['love', 'friendship', 'desire'],
    cover: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>In the middle of the movie,<br>
an urge rose up from the depth of her heart<br>
telling her to do it.<br>
What if this friendship tears apart?<br>
whispered her mind.<br>
She had to choose the wiser one.</p>
<p>Her fingers ice cold resting on his warm cheeks<br>
while her lips crashed onto his.<br>
Butterflies rose up from their grave and<br>
started dancing in her gut.<br>
Her eyes closed so tight like they may explode<br>
with all the adrenaline gushing around.</p>
<p>Now,<br>
she realizes, she's in LOVE.</p>`
  },
  {
    slug: 'shadows-of-maybe',
    category: 'poems',
    title: 'Shadows of Maybe',
    subtitle: 'Dancing in the shadows of maybe.',
    date: 'February 17, 2025',
    tags: ['love', 'longing', 'heartbreak'],
    cover: 'https://images.unsplash.com/photo-1532978379173-523e16f371f9?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>How could you smile,<br>
lips curved in fragile grace,<br>
while your heart quietly bled<br>
beneath the weight of silent wars,<br>
all to mend this fractured soul of mine—<br>
mine, that aches for a name<br>
that's not yours.</p>
<p>Yet still, you hope,<br>
that one day, the winds will shift,<br>
and my heart will find its rhythm in your name,<br>
while yours beats on, bruised but brave,<br>
dancing in the shadows of maybe.</p>`
  },
  {
    slug: 'secants',
    category: 'poems',
    title: 'Secants',
    subtitle: 'Meeting once, then breaking the heart.',
    date: 'January 30, 2025',
    tags: ['love', 'religion', 'letting go'],
    cover: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>Why don't we ever speak of tomorrow?<br>
The tomorrow that never exists,<br>
where religion carves an eternal line,<br>
a chasm too vast for hope to persist.</p>
<p>The differences that time won't mend.<br>
We're bound to moments, fleeting and small,<br>
no dreams of tomorrow, no future at all.</p>
<p>Perhaps we are secants, destined to part,<br>
meeting once, then breaking the heart.<br>
A brief connection, a fragile stay,<br>
religion whispers, "No other way."</p>`
  },
  {
    slug: 'temple-bells',
    category: 'poems',
    title: 'Temple Bells',
    subtitle: 'I found myself, completely there.',
    date: 'January 23, 2025',
    tags: ['love', 'spirituality', 'presence'],
    cover: 'https://images.unsplash.com/photo-1532978379173-523e16f371f9?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>I thought the bells were just a silly tale,<br>
in telugu films when lovers unite.<br>
But there I stood, with you so near,<br>
surrounded by a thousand flickering diyas.</p>
<p>Clutching your hand, like a child,<br>
while you tuck a lily behind my ear.<br>
You noticed it all, each little thing<br>
my jhumka's song, my unsteady grip.</p>
<p>The temple bells, rang for real,<br>
a sound that made my spirit kneel.<br>
With agarbatti's fragrance in the air,<br>
I found myself, completely there.</p>`
  },
  {
    slug: 'fragrant-echoes',
    category: 'poems',
    title: 'Fragrant Echoes',
    subtitle: 'Love unspoken, yet deeply bestowed.',
    date: 'December 29, 2024',
    tags: ['memory', 'heartbreak', 'love and loss'],
    cover: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>I scrubbed my skin, erased the trace,<br>
washed my clothes, your scent to replace.<br>
But loosening up my tangled hair, a fragrant snare,<br>
your memory lingered in the air.</p>
<p>A bittersweet touch, a fleeting cry,<br>
your head on my chest, our silent goodbye.<br>
Between us, a river of sadness flowed,<br>
love unspoken, yet deeply bestowed.</p>`
  },
  {
    slug: 'beautiful-string',
    category: 'poems',
    title: 'Beautiful String',
    subtitle: 'How beautiful this string could be.',
    date: 'January 27, 2025',
    tags: ['love', 'connection', 'hope'],
    cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>How beautiful this string could be,<br>
if egos fall, setting us free.<br>
Letting go of every divide,<br>
building dreams we hold inside.</p>
<p>To learn your love, to share mine too,<br>
to understand what makes us true.<br>
With hearts aligned, our souls would see,<br>
how beautiful this string could be.</p>`
  },
  {
    slug: 'it-was-never-the-drink',
    category: 'poems',
    title: 'It Was Never the Drink',
    subtitle: 'It\'s always been you.',
    date: 'October 6, 2024',
    tags: ['love', 'night', 'desire'],
    cover: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>I initially thought it was the alcohol that gave me the rush,<br>
but I was mistaken.<br>
It was the thrill of the night,<br>
surrounded by a field of roses,<br>
under a star filled sky and bright moonlight.</p>
<p>The feeling of grass beneath my bare feet,<br>
the cool breeze, and the laughter.<br>
The lyrics that touched my heart,<br>
and the memories of our wild adventures.<br>
It was never the drink, baby<br>
it's always been you.</p>`
  },
  {
    slug: 'again',
    category: 'poems',
    title: 'Again',
    subtitle: 'A new that\'s not you, again.',
    date: 'June 10, 2025',
    tags: ['letting go', 'heartbreak', 'moving on'],
    cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>A new face,<br>
A new phase,<br>
A new name,<br>
A new fragrance,<br>
A new eye colour,<br>
A new laughter,<br>
All of the new—<br>
Just the shadows I chase<br>
to forget the unforgettable you,<br>
A new that's not you,<br>
AGAIN.</p>`
  },
  {
    slug: 'salt-kissed-tides',
    category: 'poems',
    title: 'Salt-Kissed Tides',
    subtitle: 'The ocean led me back to stand alone.',
    date: 'February 7, 2025',
    tags: ['solitude', 'healing', 'nature'],
    cover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>A thousand voices echoed in my mind,<br>
a chorus of shadows, restless and loud,<br>
till the waves whispered secrets at my feet,<br>
their cold touch pulling me closer.</p>
<p>Salt-kissed tides cradled my weary soul,<br>
dissolving the noise that weighed me down.<br>
Awake from the labyrinth within my head,<br>
I left behind the endless conversations.</p>
<p>With every step along the shore,<br>
the voices faded into the wind.<br>
The ocean spoke in softer tones,<br>
and led me back to stand alone.</p>`
  },
  {
    slug: 'tides-of-almost',
    category: 'poems',
    title: 'Tides of Almost',
    subtitle: 'I\'ve known the tides, but never the storm.',
    date: 'February 10, 2025',
    tags: ['love', 'longing', 'growing up'],
    cover: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>Now that I'm older,<br>
and maybe a little wiser,<br>
I've drifted through the tides a couple times,<br>
with no shoreline in sight,<br>
no lighthouse calling me home.</p>
<p>Met strangers with borrowed smiles,<br>
felt flickers sometimes,<br>
but never enough to set fire.<br>
Carried feelings like fragile glass,<br>
either too soon to hold or too late to matter.</p>
<p>Love? I've redrawn its borders,<br>
scribbled new definitions in the margins,<br>
only to watch them blur in the rain.</p>
<p>And still, I've never touched the edge<br>
of what Kafka bled when he wrote—<br>
"Loving you is both my salvation and my suffering."<br>
Because I've known the tides,<br>
but never the storm.</p>`
  },
  {
    slug: 'lying-about-love',
    category: 'poems',
    title: 'Lying About Love',
    subtitle: 'Forgetting it feels like a gentle flame.',
    date: 'April 14, 2025',
    tags: ['memory', 'heartbreak', 'letting go'],
    cover: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=848&q=80',
    substackUrl: 'https://chndnaaaaaaa.substack.com',
    body: `<p>I've learned to lie about love<br>
to say I've forgotten its touch, its tune,<br>
a stranger lost in the haze of some distant June,<br>
I bury the firsts, the first laughs, first touches, first ache<br>
but the memory clings like perfume,<br>
and becomes a slow heartbreak.<br>
I held it once,<br>
never knowing its name.<br>
Now, forgetting it feels like a gentle flame.</p>`
  }
];

// ─── Render Posts ──────────────────────────────────────────────────────────────
function renderPosts(filter = 'all') {
  const grid = document.getElementById('posts-grid');
  const filtered = filter === 'all' ? POSTS : POSTS.filter(p => p.category === filter);

  grid.innerHTML = filtered.map((post, i) => `
    <article class="post-card reveal" data-index="${i}" data-slug="${post.slug}">
      <div class="post-img ${post.cover ? '' : 'no-img'}"
        ${post.cover ? `style="background-image:url('${post.cover}')"` : ''}>
        ${!post.cover ? `<div class="post-img-text">${post.title.slice(0,2).toUpperCase()}</div>` : ''}
      </div>
      <div class="post-body">
        <div class="post-tags">${post.tags.slice(0,3).map(t => `<span>${t}</span>`).join('')}</div>
        <h3>${post.title}</h3>
        <p>${post.subtitle}</p>
        <span class="post-read">Read →</span>
      </div>
    </article>
  `).join('') + `
    <article class="post-card cta-card reveal" data-index="${filtered.length}">
      <a href="https://chndnaaaaaaa.substack.com/archive" target="_blank">
        <div class="cta-card-inner">
          <span class="cta-big">↗</span>
          <h3>See everything on Substack</h3>
          <p>More essays, notes, and fragments from the archive.</p>
        </div>
      </a>
    </article>`;

  // Re-observe new cards
  grid.querySelectorAll('.post-card[data-slug]').forEach(card => {
    card.addEventListener('click', () => openArticle(card.dataset.slug));
    observer.observe(card);
  });
  grid.querySelectorAll('.cta-card').forEach(card => observer.observe(card));
}

// ─── Article Reader ────────────────────────────────────────────────────────────
const overlay = document.getElementById('article-overlay');
const modalBody = document.getElementById('article-modal-body');
const substackLink = document.getElementById('article-substack-link');
const closeBtn = document.getElementById('article-close');

function openArticle(slug) {
  const post = POSTS.find(p => p.slug === slug);
  if (!post) return;

  substackLink.href = post.substackUrl;

  modalBody.innerHTML = `
    ${post.cover ? `<img class="article-cover" src="${post.cover}" alt="${post.title}" />` : ''}
    <span class="article-category-badge">${post.category.replace('-', ' ')}</span>
    <h1 class="article-title">${post.title}</h1>
    <p class="article-subtitle">${post.subtitle}</p>
    <div class="article-meta">
      <span>Chandana Polanki</span>
      <span>·</span>
      <span>${post.date}</span>
    </div>
    <div class="article-tags">${post.tags.map(t => `<span>${t}</span>`).join('')}</div>
    <div class="article-body${post.category === 'poems' ? ' poem-body' : ''}">${post.body}</div>
    <div class="article-footer">
      <p>Enjoyed this? Subscribe for more on Substack.</p>
      <a href="https://chndnaaaaaaa.substack.com" target="_blank">Subscribe ↗</a>
    </div>
  `;

  overlay.classList.add('open');
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeArticle() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeArticle);
overlay.addEventListener('click', e => { if (e.target === overlay) closeArticle(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeArticle(); });

// ─── Filter Buttons ────────────────────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPosts(btn.dataset.filter);
  });
});

// ─── Scroll Reveal ─────────────────────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = (entry.target.dataset.index || 0) * 80;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Initial render
renderPosts();

// ─── Custom Cursor ─────────────────────────────────────────────────────────────
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});
(function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
})();

// ─── Nav on Scroll ─────────────────────────────────────────────────────────────
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(245,240,232,0.97)';
    nav.style.backdropFilter = 'blur(12px)';
    nav.style.borderBottom = '1px solid rgba(176,160,144,0.25)';
  } else {
    nav.style.background = 'linear-gradient(to bottom, rgba(245,240,232,0.97) 0%, transparent 100%)';
    nav.style.backdropFilter = 'blur(0px)';
    nav.style.borderBottom = 'none';
  }
});

// ─── Hero Parallax ─────────────────────────────────────────────────────────────
const heroBg = document.querySelector('.hero-bg-text');
window.addEventListener('scroll', () => {
  if (heroBg) h'eroBg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
});
