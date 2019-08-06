let BodyList, TitleList, ImageList, CurrentTitle, CurrentBody, CurrentImage, CompletedPage;

BodyList = [];
TitleList = [];
ImageList = [];
CompletedPage = '';

TitleList.push("Why do I have a blog now?");
ImageList.push("Images/Post1.jpg");
BodyList.push(`


`);

for(i=0; i<TitleList.length; ++i){
  console.log(i);
  CurrentTitle = TitleList[i];
  CurrentBody = BodyList[i];
  CurrentImage = ImageList[i];

  CompletedPage += `
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="`+CurrentImage+`"></img>
            </div>
            <div class="card-content">
              <span class="card-title activator">`+CurrentTitle+`<i class="material-icons right">more_vert</i></span>
            </div>
            <div class="card-reveal">
              <span class="card-title">`+CurrentTitle+`<i class="material-icons right">close</i></span>
              <p>`+CurrentBody+`</p>
            </div>
          </div>
  `;

}

$("body").find(".posts").html(CompletedPage);
