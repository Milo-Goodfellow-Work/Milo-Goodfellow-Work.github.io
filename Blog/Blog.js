let BodyList, TitleList, ImageList, DetailsList, DateList, CurrentTitle, CurrentBody, CurrentImage, CurrentDetails, CurrentDate, CompletedPage, WhileRun, IteratorRecord;

BodyList = [];
TitleList = [];
ImageList = [];
DetailsList = [];
DateList = [];
CompletedPage = '';
WhileRun = 0;

IteratorRecord = 0;
PostNum = 8;

for(i=1;i<=PostNum;i++){

	PageExample = fetch("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/Milo-Goodfellow-Work/Milo-Goodfellow-Work.github.io/master/Blog/Posts/Post"+String(i)).then(function(response) {
	    return response.text();
	}).then(function(response) {
			let InitialList = textFileParser(response);
			TitleList.push(InitialList[0]);
			ImageList.push(InitialList[1]);
			DateList.push(InitialList[2]);
			DetailsList.push(InitialList[3]);
			BodyList.push(InitialList[4]);

	}).then(function(){
		++IteratorRecord;
		if(IteratorRecord == PostNum){
			CompletedPage = beginIteration();
			$("body").find(".interior-container").append(CompletedPage);

		}
	});

}

function textFileParser(file){
	let file_list_store = [];
	file_list_store = (String(file).replace("↵", "")).split(',');
	return file_list_store;

}

/*
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

*/

function beginIteration(){

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

	return CompletedPage;

}
