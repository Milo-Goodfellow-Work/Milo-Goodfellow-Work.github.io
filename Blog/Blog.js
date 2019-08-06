let BodyList, TitleList, ImageList, DetailsList, CurrentTitle, CurrentBody, CurrentImage, CurrentDetails, CompletedPage;

BodyList = [];
TitleList = [];
ImageList = [];
DetailsList = [];
CompletedPage = '';


TitleList.push("Why do I have a blog now?");
ImageList.push("Images/Post1.jpg");
DetailsList.push(`
<br/>
Date: 8/5/2019
<br/>
Productive Time: 5h56m39s87
<br/>
Wasted Time: 1h03m55s78
<br/>
`);
BodyList.push(`
I must be able to log my progress over time. The way I have done this in the past is a long log on twitter. However, this log didn't allow me almost any stylistic or programming freedom. This blog, on the other hand, offers me a massive amount of control over how things work. This and the fact I had just created a personal site guaranteed I would make the blog. So I have.

Please enjoy your stay!

`);

for(i=0; i<TitleList.length; ++i){
  console.log(i);
  CurrentTitle = TitleList[i];
  CurrentBody = BodyList[i];
  CurrentImage = ImageList[i];
  CurrentDetails = DetailsList[i];

  CompletedPage += `
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="`+CurrentImage+`"></img>
            </div>
            <div class="card-content">
              <span class="card-title activator">`+CurrentTitle+`<i class="material-icons right">more_vert</i></span>
              <p>Posted on: 8/5/2019</p>
            </div>
            <div class="card-reveal">
              <span class="card-title">`+CurrentTitle+`<i class="material-icons right">close</i></span>
              <strong class="bold">`+CurrentDetails+`</strong>
              <p>`+CurrentBody+`</p>
            </div>
          </div>
  `;

}

$("body").find(".posts").html(CompletedPage);
