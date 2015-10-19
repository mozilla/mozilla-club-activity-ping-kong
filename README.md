![logo](activity-data/images/pingkong.png)

# Ping Kong Activity

For many, "the Internet" is an abstract and overwhelming concept. This activity challenges learners to **think concretely about how the internet communicates with a computer.**

It lasts about 1-2 hours

---

# Mozilla Clubs
A Mozilla Club meets regularly in-person to learn how to read, write and participate on the Web in an inclusive, engaging way.

You can learn more about [Mozilla Clubs](http://teach.mozilla.org/clubs) by reading the [Mozilla Clubs Fact Sheet](http://mozilla.github.io/learning-networks/clubs/)

---

# Activity Template for Mozilla Clubs Activities
This is a simple to use template that can be used to prototype and test new activities for the Mozilla Learning Networks.
You can see this template working live at:

http://riomozillaclub.github.io/activity-template

The idea is that each activity lives inside their own [Github repository](https://help.github.com/articles/github-glossary/#repository). This leads to the advantages below:

## Use markdown to write content
This template system uses the popular [markdown text file format](http://daringfireball.net/projects/markdown/) to store activity data. This is much easier than changing data on static HTML files and leads to much faster iteration and easier content management. We have some links for you in case you're not familiar with this file format:

* [Markdown basics](https://help.github.com/articles/markdown-basics/)
* [Mastering markdown](https://guides.github.com/features/mastering-markdown/)

Markdown is converted at runtime to HTML by this system, so even though you write your activity instructions in a simple text file format, the result is rendered as HTML. You don't need to install anything for this to work besides having a working [git version control system](http://git-scm.org) available on your machine.

## Use *issues* to handle discussion
Each github repository has its own issue tracker. Think of it as a mini bugzilla that can be used to track discussions, problems and recommendations for the repository at hand. We can use the issues system to handle all our tasks related to the testing, improvement and discussion for a given activity. MLN already makes extensive use of github issues to handle many different tasks, this is just joining the current flow.

## Use *wiki* to handle extra documentation
All repositories have their own wiki system which we can use to hold extra documentation about a given task. Stuff such as advise, recomendation for extra materials or even tips about how to deal with common challenges.

The wiki can be edited online on the github portal or managed as markdown files in a special branch. You may opt to one way or the other depending on your knowledge of git and github.

## Use *github pages* system to distribute content
Since github repos can host static web content, it makes really easy to distribute our content using them. Mostly this frees us from having to deal with a web server and all the maintenance and security that comes from it.

# How to use this template
The instructions here will become much more clear if you have some basic knowledge of git and github. You can learn more about both at:

* [Github Guides](https://guides.github.com/): Github provides many guides that are quick to read/watch and will explain all that you need.
* [Pro GIT book](https://git-scm.com/book/en/v1): This is an awesome book but it goes a universe beyond the knowledge you need. After this book you will become a GIT deity. The book is freely available, chapters 1 and 2 will give you knowledge enough to do any task you need. 

## Step #1 - Create a new repository
Once you decide to create a new activity, your first step is to create a new repository on Github. You can think of a repository as a project folder. All your data about your new activity will live inside that repository.
 
We advise you to give a meaningful name for your repository. Usually repository names are all lowercase where words are joined by dashes as in:
 
`club-activity-challenge-of-the-chupacabra`
 
> If we all agree on a common prefix for our repository names (such as: `club-activity-*`) then it will be quite easy to scan Github and find all activities

After creating your new repository on Github, follow the instructions to clone it to your machine. This will make a local copy of the repository on your computer. You will work on your local independent copy and commit and push your data back to the online repository on github. This allows you to work offline and to have a safe copy of all your data.

## Step #2 - Copy the files from this repository to your new repository
After cloning your new repository to your computer, you will copy all the files from this repository to your new respository. The easiest way is to download a current copy from this repository using [the download link on Github](https://github.com/RioMozillaClub/activity-template/archive/gh-pages.zip). This link will give you a ZIP file will all the files you need. You can also clone [this repository](https://github.com/RioMozillaClub/activity-template) to your computer and then copy and paste the files from one folder to the other.

> # Why copying files instead of forking
> If you are familiar with git you may be wondering why we're advising the user to copy files from one repository to the other instead of just forking the repository into a new one. We're doing this because of two reasons. One is technical and the other semantical.
>
> * **Technical:** Github only allows you to have one fork per repository so if you fork the `activity-template` to create your `club-activity-rainbow-slurpee` then you won't be able to fork it again to create another activity.
> * **Semantical:** You fork a project when you want to contribute back to it in the form of pull requests or when you want to take a specific project in a new direction. If you want to contribute back to this template, then forking is the correct thing to do but if you're creating new activities then this is semantically different than contributing back or taking this template into a new direction.

## Step #3 - Customize the markdown content
The only location where you will change stuff in this template system is inside the `activity-data` folder. You will add your images to the `activity-data/images` folder and you will customize both the `aside.md` and the `activity.md` markdown files that are inside the `content` folder. This `content` folder holds folders for each locale available. So the English instructions for an activity will be inside the `activity-data/content/en/activity.md` file.

This template has a main content area (content from `activity.md`) and a little sidebar on the left side (content from `aside.md`). You need to customize both files to your needs. You can experiment by opening the `index.html` file from your local repository, changing those markdown files, and reloading the page to see how changes work.
 
Tweak your content until you're happy. Remember that you can keep pushing new revisions of it to your github repo so don't be afraid to experiment.

### Important stuff about `activity.md`
There is some magic happening on `activity.md` that is beyond the normal markdown syntax. First as you can see on the [top of the file](https://raw.githubusercontent.com/RioMozillaClub/activity-template/gh-pages/data/activity.md) there is a little header:

```
---
title: Kraken the Code
github: riomozillaclub/activity-template
github_label: View on Github
image: square-kraken.png
competencies_label: Web Literacy Competencies
competencies:
    - Search
    - Credibility
---
```

This holds metadata about the activity page and needs to hold your own content. There is also some CSS classes automagically applied to specific paragraphs. 

paragraph | style
----------|--------
4th paragraph | this is the **Lead Paragraph**
5th paragraph | this is the green bar with the activity time
First paragraph after a horizontal rule | this is a time circle. It should contain the number of minutes that the given step takes in the following format ```40<br>min```

By playing the `activity.md` and checking how the content and the live version interact you will learn how to use it.

 
## Step #4 - Commit and push!
Now that you have your content ready to upload you need to commit your changes to the local repository and push them to the remote repository on github. Once you push it, it will take a little bit of time for it to be available.

Rememeber to add the image files to your commit. Just adding files to the folder is not enough for them to be added to the commit and carried over. Check the [Github Guides](https://guides.github.com/) for more information about this.

Once you push your changes back to your repository, you will be able to browse it online using the public URL for the repository. For example the URL for this repository is:

`http://github.com/riomozillaclub/activity-template`

The URL to see the working page becomes:

`http://riomozillaclub.github.io/activity-template`

You can learn more [about github pages on this link](https://pages.github.com/). 

### Important stuff about branches
Github pages work from the `gh-pages` branch. New repositories come by default with a `master` branch. You need to create a `gh-pages` branch and use it to commit and push your data. If you are using `master` then this will not work.

We advise you to create the `gh-pages`, set it as the default branch on your repository settings and then delete the `master` branch.

## How to localize/translate an activity
If you want to help localize or translate an activity there are two ways to go depending on your knowledge of git. Both ways are equally valid and lead to the same result.

### Using your git skills
1. Follow the steps above to clone the repository to your machine.
2. Inside the `activity-data/content` folder create a folder for your language using the **two letter code for your locale** (Ie: *pt* for Portuguese).
3. Copy both the `aside.md` and `activity.md` to your new folder and change their content to suit your language and region.
4. Add your language name and two letter code to the file `activity-data/locales.json`.
5. Commit and send a pull request.

### With help from the repository owner
If you're not confident in your git skills there is another way to help. You can use the issues section of the repository to create a new issue/task and exchange information with the people involved with the repository.

1. Create a new issue in the desired repository with a title such as: **Localization of aside.md into Portuguese**
2. Pick the content of the `aside.md` file in the repository, translate it using your favorite text editor, paste it as the content of the new issue.
3. Repeat the same process and create a new issue for the translation of `activity.md` as well.
4. Wait for the comments of the maintainers of the repository. If the translation is good, they will integrate it into the repository in some future commit.

![Translating aside.md using issues](http://andregarzia.com/shots/New_Issue__RioMozillaClubactivity-template_2015-10-13_11-47-04.png)

# How does this work (internally)
This web app uses AJAX requests to fetch the markdown files asynchronously and then process them using `marked.js`. It then uses `handlebars.js` to insert the processed markdown content into pretty templates. It is also using `jQuery` and `YAML.js` to make things easier.

All the interesting code is inside [the app.js file](https://github.com/RioMozillaClub/activity-template/blob/gh-pages/app.js).

# Challenges
Since this templating system work on the client side, I don't know how well it will index and how it will affect possible SEO stuff. IMHO I dont really care about that stuff regarding this intiative because activities are meant to be linked from a curriculum page or something similar. I don't expect people to go fishing for activities on a search engine but I am probably wrong.

# Contributing
You can contribute back to this initiative by sending pull requests, testing this out and giving me feedback and/or sending me recommendations and asking for new features.

Please use the [issues page](https://github.com/RioMozillaClub/activity-template/issues) to contact me with your need/feedback/bug.

Areas where I need help:
* **CSS:** there are little CSS bugs on this page. CSS/layouting was never my strong suit. I welcome fixes!
* **Testing:** This needs testing.
