# Lesson 1: Welcome, the Internet, and Markup Languages
## TODO:
1. 5 minute crash course in bash, basically just follow me exactly to make the folder structure (just to give them a taste and then give them a simple reference document for bash)
2. How can they view index.htmls before they learn how to clone repos? Maybe deploy first few lessons to github pages..

## Part 1: Welcome, the Internet, and Markdown

### Icebreaker

1. Whats your work education history?
2. Whats your background with coding?
3. Where are you trying to get / what do you want to do?
4. Personal interests / hobbies
5. Specifically what do you want to get out of this class?

### Introduction: Who are you and why are you qualified to teach this class?

1. Background - work/school
2. Personal Interests / Hobbies
3. How you got involved with MakerSquare
4. Why you decided to stay on as a fellow
5. Technical interests / goals for after MakerSquare
6. Questions

Do an icebreaker of your choice, get to know everyone in the class and have them engage with each other in some way.
Also, have ask anyone what they want to learn specifically, use that to think about the curiculuum and if you should make any adjustments to it. Try and probe deep here, see if people have any specific things in mind.

### Expectations
1. This class is designed to take you from no experience whatsoever with programming and web design to having a solid foundation. As a byproduct of that preparation, this course will also help you prepare for the MakerSquare technical interview, but that is a side-effect only. My goal is to teach you the fundamentals of HTML/CSS/Javascript to the best of my ability, not to "teach-to-the-test". I do promise, however, that at the end of this course you will be prepared to continue learning on your own, and with enough practice, tackle the MakerSquare technical interview.

2. MakerSquare is not a traditional academic institution. The curriculum relies heavily on autonomous learning. As a result, we will do our best to prepare you for that type of a learning environment. As we get deeper and deeper into the material, we will begin to "remove the training wheels" and expect you to learn more on your own. We want you to struggle. This is designed to help YOU succeed not only at MakerSquare, but for the rest of your career as a software engineer. In 5 years the technologies you learned at MakerSquare might be obsolete, but the skills you learn will last for the rest of your career. Learning how to learn is far more important than any specific topic that MakerSquare teaches. That being said, I'm here to make sure you all succeed, so please don't ever hesitate to reach out to me, in public or private, if you're feeling overwhelmed.

3. My responsibility is to make sure that all of you finish this course with a solid grasp of the MakerPrep curiculuum, not turn you into software engineers; thats what the MakerSquare curiculuum is for. I will do my best to accomodate the various degrees of experience that you all have, but please keep in mind that this is an introductory class and I will limit the pace of the course if necessary.

4. Don't be an asshole. Self-explanatory. Help each other out, ya'll are not competing with each other and the MakerSquare school in general is not a competitive environment. We go out of our way to foster a friendly and collaborative community, I expect you guys to take that to heart.

#### Context Lecture
Before I start this lecture I just want to let you all know that its totally ok if you don't understand or memorize everything I'm about to say. I'm treading a pretty fine line during this course between exposing you to things that I think you should know / be aware of, but not overwhelming you at the same time. A lot of the time there may be some technical information thats presented as context or an aside that you don't understand, thats ok. Learning is an uncomfortable process, especially diving into a completely new field like this. There will be a lot of times where in your career where you really need to dig deep into the details and get your hands dirty, but there will also be a lot of ther times where you'll have to just be comfortable with no understanding, otherwise you'd never be able to get anything done. Most of it is not important to your ability to succeed in this course, but I do think thats its important that you're atleast exposed to this information early and familiar with it even a little bit. Also, there is a 5 minute video I'm gonna show you at the end that does a much better job of explaining how the internet works than I can. That being said, lets dive into the fun stuff. Why are you all here? [learn Javascript / web development / get into makersquare]. Why do you care about that? [I want to be an engineer / I want a good job / I want to make a lot of money / I want to be a programmer] Ok, so why JavaScript? [I actually have no idea what people will say here, but this is how I want to introduce the context lecture]

We as engineers learn JavaScript because its the language of the web. JavaScript is the only programming language that runs in the browser. In order to understand why thats important we need to talk about the internet. Can someone tell me what the internet is or how it works? [several explanations of varying quality].

According to Wikipedia, the Internet is: "A global system of interconnected computer networks that use the standard Internet protocol suite (TCP/IP) to link several billion devices worldwide."

How does it work? Well before 1960 the U.S's telephone system relied on analog, circuit-switching technology. You ever see old TV-Shows with a bunch of telephone operators connecting cables from one hole into another? That's because they were using a circuit-switching system. A dedicated line allows for transmission of data from one point to another. When telephone switchboard operators plugged those cables in, they were literally creating a direct connection (through many intermediaries) between two different phones that did not previously exist. With this kind of system in place, people didn't have to worry about the order in which information arrived (it always came sequentially), but there is a huge bandwidth issue and it takes a lot of work to manual connect the lines. Imagine if everytime you wanted to visit Facebook, some poor person sitting in a cramped office had to manual connect a wire between your house and facebook office. What if your friend wanted to watch Netflix at the same time? Then you'd need two lines!

In the mid 1960s, packet-switching technology was invented. In packet-switching technology, data is first divided up into smaller chunks called "packets". In addition to carrying data, each packet contains destination information, so it knows where it is going, even without a dedicated line. This means that packets can be transmitted individually, follow different routes (there are no more dedicated lines or manual switching), and ultimately arrive at the proper destination, in the proper order.

A good analogy is that circuit-switching is like a train riding along train tracks, whereas packet switching is like cars driving on the highway.

Still with me? Cool. How many of you have heard of TCP/IP? How many of you know what it stands for? Me either. Kidding.

TCP stands for Transmmission Control Protocol (you don't need to memorize that) and it allows for data to be divided up into packets on the senders machine, and then reliably (i.e in the right order) reconstructed on the receivers machine.

IP stands for Internet Protocol and is responsible for formatting and adrressing sent packets. Much like the address on an envelope, every device on the internet needs an I.P address so that packets which are sent to it know how to get there.

TCP is analogous for putting a letter in an envelope (you're packaging it), and IP is analogous to writing the address on the envelope

Internet explanation source: http://blog.hubspot.com/marketing/how-the-internet-works

If you're more confused about how the internet works than when I started talking, don't worry, I have this 5 minute video that does a much better job of explaining the topic than I do: https://www.youtube.com/watch?v=7_LPdttKXPc (show them this video)

### Markdown Lecture
Markdown is a markup (confusing, I know) syntax for annotating plain text such that it can be converted later to rich text, or in todays case, html. We'll go over what a markup language is later today.

**Consider not using the markdown preview package, had some irregularities with how it worked with the students. Could use an online markdown preview tool instead like [markdown live preview](http://markdownlivepreview.com)

Do a quick tutorial on the screen, show them how to use Sublime to convert MarkDown to html (I have a guide written on how to setup sublime with Markdown preview, link that once I have it transferred over). A good example would be to just write some Markdown in sublime and then convert it, make some more changes, and convert it again. Also explain why MarkDown is useful (its fast and more intuitive than HTML).

Set the students loose on the first half of the lesson (Markdown), and continue on with the lecture after an hour and a half has elapsed.

## Part 2: HTML

### Context
Unfortunately Markdown represents only a limited subset of all the possible things you can do with HTML. Its great for when you need to quickly generated formatted text for the internet thats meant to be digested as a readable product (like a blog post, article, or these lessons), but you still need to work with raw html to accomplish a lot of the cool things that you're used to seeing on the web.

If you remember from the 5 minute video we watched earlier, they described web pages as files stored on servers that are delivered to clients on request. HTML is the language that is used to construct these websites.

HTML stands for HyperText Markup Language. It is a standardized language that all web browsers know how to interpret. Web browsers can read HTML files and render them into visible web pages.

So is HTML a programming language? Why do you think that? The answer is that while HTML is a markup language, it is not a programming language. A markup language is used to control the presentation of data. HTML tells the browser how to **display** the data, but it does not instruct the browser on how to transform the data.

What about Javascript, is Javascript a markup language or a programming language? How come? The answer is that Javascript is a programming language because its used to transform data. When we begin to make real web applications, not just websites, later in the course, we will use Javascript to modify the data in the html files and respond to user input.

Back to HTML. HTML elements form the building blocks of all websites, and they allow us to do a lot of interesting things.

### Demo
[Open up the example.html in your code editor]
Make sure you address the following things in the file:
  1. &lt;!DOCTYPE html&gt;
  2. Meta data in &lt;head&gt;
  3. The comments (what they're for, how they're friendly to other developers who work on your code)
  4. Structure: The different tags and how they're nested within each other (children / parent relationship, maybe pick a few tags and draw a tree-like representation of a small part of the DOM)
  5. Structure of links / image tags

**Another point of confusion is how to link to files on their system (same folder as their website vs other folders) and files on the internet. Try embedding two images, one local and one remote to show that to them. They seemed confused about the relative path system, so go over how to link to images / files in children directory and parent directories (using `..`). There is a brief explanation of the path system in the bash reference also **

[Open up index.html in browser and show them what it looks like, then open up the chrome developer tools and walk through the DOM tree in the elements tab, as well as how they can just directly modify the html]

Also they seem to have trouble figuring out how to preview the html they write. Make a point of showing them that to preview it, they save it as a .html file and then open that file in chrome. If they makes changes to the file later and then resave it, they don't need to reopen the file, they can just refresh the page.

Ok, now you guys try it!

Before the end of the lesson I remind them to fill out the survey, slack me their GitHub if they haven't already, let me know if they haven't made it on slack yet, and try to install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) if they have some free time.

**Also change the nightmare mode to something else**