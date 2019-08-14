//This constant contains what would normally be a magic string, the base url from which all posts are derived
const allPostsUrl = "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/Milo-Goodfellow-Work/Milo-Goodfellow-Work.github.io/master/Blog/Posts/Post";

async function generateBlogData(postNum){
	let completedPage = '';
	for(let i = postNum; i>=1; i--){
		const rawPage = await pageFetcher(i);
		const parsedList = pageParser(rawPage);
		completedPage += newPost(parsedList);

	}

	return completedPage;

}

function pageParser(pageData){
	const parsedData = pageData.replace('↵', '').split(',');
	return parsedData;

}

async function pageFetcher(currentPostNum){
	const fetchedReturn = await fetch(`${allPostsUrl + currentPostNum}`);
	const fetchedPage = await fetchedReturn.text();
	return fetchedPage;

}

function newPost(parsedList){
	const newPost = `
<div class="card">
	<div class="card-image card-image-max-width waves-effect waves-block waves-light">
		<img class="activator" src="${parsedList[1]}"></img>
	</div>
	<div class="card-content">
		<span class="card-title activator">${parsedList[0]}<i class="material-icons right">more_vert</i></span>
		<p>Posted on: ${parsedList[2]}</p>
	</div>
	<div class="card-reveal">
		<span class="card-title">${parsedList[0]}<i class="material-icons right">close</i></span>
		<strong class="bold">${parsedList[3]}</strong>
		<p>${parsedList[4]}</p>
	</div>
</div>`;

	return newPost;

}

generateBlogData(9).then(function(completedPage){
	$(".interior-container").append(completedPage);

})
