{{{
  "title": "My own blog, finally",
  "tags": ["projects", "javascript", "docker"],
  "category": "projects",
  "date": "2014-10-14"
}}}

I've finally made the time to setup my own personal blog. Like many other web developers, I've had my own site for quite sometime. Until now, I've had nothing more than a simple page. But now I am inspired to start writing, thus I've created a blog. Here's how and why.

I think my first page deployed on http://jamespamplin.com was in 2007 with a simple message: "Techno-blog and Site comming soon" - unfortunately no under construction GIFs. Well 7-ish years later, its time to do something real.

Four and a half years ago, I made the move across the planet from Newcastle in Australia to London, UK. Quitting my job to travel and start afresh turned out to be one of the best decisions I've ever made. During my time in the UK, I've learned much, and not just about tech. Now, I'd like to try and share what I've learned as much as I can. Hence time for a proper blog.

Creating my site took longer than I thought, mostly due to laziness, beer, and Netflix. But I'll work towards trying to publish something once a month this year.


## And now for the tech...

In 2010 I created a single profile page to replace the original placeholder page. This new profile page listed a summary of my technical skills and a basic bio intended as a supplement to my CV, as at the time I had just moved to the UK and was searching for employment. This page was a static HTML page with inline CSS, nothing too complicated really. This profile page served its purpose, but was far from a blog.

A few years later I revived the project to build my own blog. First step, was to decide on tech. I could create another set of simple static pages making up my blog and website, but that would be too easy. I had a look at some hosted solutions, including Tumblr, and some self-hosted solutions, such as Wordpress. But as usual for Developers, I was thinking solution first rather than properly defining the problem or objectives. So I sat back, and thought about what I'd like to achieve from creating my own site with a blog and came up with the following:

 - Public profile about myself from a technical and personal perspective
 - Provide an outlet to learn and experiment with some new tech and learn more about hosting a full website
 - Share some of my experiences with tech, travelling, and potentially other things too

With these in mind, I felt that the primary goal for me with this project was to learn something new, and to continue to learn as the site grows. Hosted solutions provided platforms ready to post, which would allow me to get something up quick and easily. Most solutions allowed customisable CSS styles and HTML templates, but there was little I could learn from this setup as I knew CSS and HTML pretty well, plus I wanted to improve my knowledge of server side technologies, expanding on my current experiece with Java, PHP, and some Ruby.

At this time, I'd heard a little about Node JS and was quite intrigued by how it enabled Javascript execution on the Server side. I quite liked coding in Javascript on the client-side, its unique syntax provided flexibility in coding styles, including allowing functional and object-oriented paradigms to work interoperably. Other languages such as Ruby offered similar features, but the potential to use the same language for logic on the client-side and server side sparked loads of crazy ideas around code and logic sharing reducing DRY. Using the same language cross-stack could also improve productivity with my own development, and at my workplace by reducing context-switching between different languages when developing a feature. So, I decided to try out Node, but where to start...

Like many others, my node initiation was with [Grunt JS](http://gruntjs.com/). Grunt was a great tool for enhancing the build process of Front-end assets. We were using Maven at my workplace at the time for building PHP Web Apps, and using Ant tasks within Maven to process front-end assets was just horrible. Previously, I'd written some shell and PHP scripts to manually concatenate and process front-end assets. Switching to Grunt was fast and simple, and much easier to extend and maintain. The huge range of plugins provided every feature we needed, and a lot more too. Plus customising the Grunt workflow with our own tasks was simple and flexible.

I found Node's package manager NPM simpler than other package managers I'd used before, including ruby gem bundles, and Maven.


Node site on heroku.

Microdata, Schema.org

** But it still wasn't a blog **

So in October 2014 I started work on updating my site to be more like a real blog.

Why poet?

Docker on CoreOS. Hosted on [Digital Ocean](http://www.digitalocean.com/?refcode=c0a34dd866c3).
[Poet](http://jsantell.github.io/poet/)

In retrospect, I should've gone with a simple hosted solution first to get me into the habit of writing and sharing on a blog early, then creating a custom app later. If you're also thinking of creating your own blog from scratch, I advise you to start with a hosted solution such as [Ghost](https://ghost.org/), [Tumblr](https://www.tumblr.com/), or even [Wordpress](https://wordpress.com/).
