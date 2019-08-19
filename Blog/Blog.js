//This constant contains what would normally be a magic string, the base url from which all posts are derived
const allPostsUrl = "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/Milo-Goodfellow-Work/Milo-Goodfellow-Work.github.io/master/Blog/Posts/Post";
const urlParams = new URLSearchParams(window.location.search);
const pageNumber = urlParams.get('pageNumber');

async function generateBlogData(postNum){
	let completedPage = '';
	let paginationNum = 0;
	const postPerPageNum = postNum-(pageNumber-1)*5;
	for(let i = postPerPageNum; i>=1; i--){
		if(i == postPerPageNum - 5){
			break;

		}else{
			const rawPage = await pageFetcher(i);
			const parsedList = pageParser(rawPage);
			completedPage += newPost(parsedList);
		}

	}

	for(let i = postNum/5; i>=0; i--){
		++paginationNum;
		const newPaginationButton = `<li class="waves-effect" id="pageNumber${paginationNum}"><a href="?pageNumber=${paginationNum}">${paginationNum}</a></li>`;
		$('.pagination').append(newPaginationButton);


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

generateBlogData(14).then(function(completedPage){
	$(".interior-container").append(completedPage);
	$("#pageNumber"+pageNumber).toggleClass("active");
	$("#pageNumber"+pageNumber).toggleClass("waves-effect");

})
