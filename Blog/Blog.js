let BodyList, TitleList, ImageList, DetailsList, DateList, CurrentTitle, CurrentBody, CurrentImage, CurrentDetails, CurrentDate, CompletedPage;

BodyList = [];
TitleList = [];
ImageList = [];
DetailsList = [];
DateList = [];
CompletedPage = '';


//PageExample = fetch("https://api.github.com/",{
//        mode: 'no-cors'})

//console.log(PageExample)
TitleList.push("Why do I have a blog now?");
ImageList.push("Images/Post1.jpg");
DateList.push('8/5/2019');
DetailsList.push(`
<br/>
Date: 8/5/2019
<br/>
Productive Time: 6h01m26s08
<br/>
Wasted Time: 1h03m55s78
<br/>
Unblocked sites: FALSE
<br/>
Joined debate discord: FALSE
`);
BodyList.push(`
I must be able to log my progress over time. The way I have done this in the past is a long log on twitter. However, this log didn't allow me almost any stylistic or programming freedom. This blog, on the other hand, offers me a massive amount of control over how things work. This and the fact I had just created a personal site guaranteed I would make the blog. So I have.
Please enjoy your stay!

`);

TitleList.push("How does this blog work?");
ImageList.push("Images/Post2.jpg");
DateList.push("8/6/2019");
DetailsList.push(`
<br/>
Date: 8/6/2019
<br/>
Productive Time: 1h56m34s97
<br/>
Wasted Time: 1h08m22s27
<br/>
Unblocked sites: FALSE
<br/>
Joined debate discord: FALSE
`);
BodyList.push(`
This blog is designed to facilitate one specific goal, charting my productivity over time. Each post contains a body and post-date, as well as holding a variety of additional fields. These fields are as follows: Productive Time, Wasted Time, Unblocked sites, and Joined debate Discord. The first two of these fields are intuitive. They track the time I've spent being productive on a given day and the time I've spent being unproductive on a given day. The next two, however, do not make sense without context. These are Unblocked Sites and Joined debate Discord. They are two methods by which I can be unproductive. To turn my machine strictly to productivity, I have blocked all sites on which I exclusively waste time. This includes youtube, twitter, Bandcamp, and several other social media websites. This can hold a value of True or False dependant on whether or not I unblocked these sites for any reason. The latter of these two, Joined debate Discord, concerns productively using the Discord app. I need Discord to ask for help on more challenging programming questions, but it can be a huge time sink. For this reason, I've included the field "Joined debate Discord". debate servers are where I wasted most of my time online and I refuse to do so again. This allows me to track if I'm responsibly using my time.
`);


TitleList.push("What is considered productive?");
ImageList.push("Images/Post3.jpg");
DateList.push("8/7/2019");
DetailsList.push(`
<br/>
Date: 8/7/2019
<br/>
Productive Time: 8h40m30s66
<br/>
Wasted Time: 24m16s77
<br/>
Unblocked sites: FALSE
<br/>
Joined debate discord: FALSE
`);
BodyList.push(`
Productivity and unproductivity are determined as follows:
<br/>
<br/>
Productivity must be conducive to achieving the long term goals I have IE:
		Practicing C programming
<br/>
<br/>
Unproductivity must not be conducive to achieving the long term goals I have IE:
		Viewing twitter
<br/>
<br/>
For either to be considered anything I must have chosen to do them, a family dinner is not unproductive. Following this, I can determine what is and is not a productive use of time.
`);

TitleList.push("August 8, 2019");
ImageList.push("Images/Post4.jpg");
DateList.push("8/8/2019");
DetailsList.push(`
<br/>
Date: 8/8/2019
<br/>
Productive Time: 10h09m25s71
<br/>
Wasted Time: 56m34s82
<br/>
Unblocked sites: FALSE
<br/>
Joined debate discord: FALSE
`);
BodyList.push(`
I don't really have much to say today. It was the last day of my contract with Emmatt meaning I no longer work there.
It's sad, but I have a letter of recommendation and a new experience. Things that are always welcome.
`);

TitleList.push("0-0");
ImageList.push("Images/Post5.jpg");
DateList.push("8/10/2019");
DetailsList.push(`
<br/>
Date: 8/10/2019
<br/>
Productive Time: 3h37m06s75
<br/>
Wasted Time: 35m23s15
<br/>
Unblocked sites: FALSE
<br/>
Joined debate discord: FALSE
`);
BodyList.push(`
Nothing to say \\_(0-0)_/
`);

TitleList.push("I used social media today");
ImageList.push("Images/Post6.jpg");
DateList.push("8/10/2019");
DetailsList.push(`
<br/>
Date: 8/10/2019
<br/>
Productive Time: 5h16m11s03
<br/>
Wasted Time: 2h17m18s09
<br/>
Unblocked sites: TRUE
<br/>
Joined debate discord: FALSE
`);
BodyList.push(`
I unblocked social media today, which was stupid.
But I also realized something, I genuinely don't enjoy it. It's not a fun or useful tool.
<br/><br/>I hate it. It's only stressful.
`);

TitleList.push("An absolutely horrendously unproductive day");
ImageList.push("Images/Post7.jpg");
DateList.push("8/11/2019");
DetailsList.push(`
<br/>
Date: 8/11/2019
<br/>
Productive Time: 1h02m09s97
<br/>
Wasted Time: 2h18m56s94
<br/>
Unblocked sites: FALSE
<br/>
Joined debate discord: TRUE
`);
BodyList.push(`
I wasted a large amount of time on discord.
`);

for(i=TitleList.length-1; i >= 0 ; --i){
  CurrentTitle = TitleList[i];
  CurrentBody = BodyList[i];
  CurrentImage = ImageList[i];
  CurrentDetails = DetailsList[i];
  CurrentDate = DateList[i];

  CompletedPage += `
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="`+CurrentImage+`"></img>
            </div>
            <div class="card-content">
              <span class="card-title activator">`+CurrentTitle+`<i class="material-icons right">more_vert</i></span>
              <p>Posted on: `+CurrentDate+`</p>
            </div>
            <div class="card-reveal">
              <span class="card-title">`+CurrentTitle+`<i class="material-icons right">close</i></span>
              <strong class="bold">`+CurrentDetails+`</strong>
              <p>`+CurrentBody+`</p>
            </div>
          </div>
  `;

}

$("body").find(".interior-container").append(CompletedPage);
