$( document ).ready(function() {

   
    
})

function displayPosts() {

    $.get("resource/json/posts.json", function(posts) {

        for (let post of posts) {
            
            let userIcon = $('<img>')
            userIcon.attr("src","resource/images/user-circle.svg")
            userIcon.attr("alt","user icon")
            let likeIcon = $('<img>')
            likeIcon.attr("src","resource/images/thumbs-up.jpeg")
            likeIcon.attr("alt","like")
            
            //create new article
            let article = $('<article>', {"class":"container-postit-page"})
            //post head
            let divHead = $('<div>', {"class":"container-post-head"})
                //add user icon image then icon is always the same
                divHead.append(userIcon)
                divHead.append($('<p class="date">').text(post.date))

            //post image
            let postImage = $('<img>')
            postImage.attr("src", post.post_image)
            postImage.attr("alt", "post no" + post.id)

            //post content
            let divContent = $('<div>', {"class":"container post-comment"})
            divContent.append($("<p>",{"class":"my_caption"}).text(post.caption))
            divContent.append(likeIcon)

            //assemble article
            article.append(divHead)
            article.append(postImage)
            article.append(divContent)
            //add article to page
            $("section").append(article) 
        }
    })
}

displayPosts() //Siin on mul nüüd küsimus, kas see peaks siiski olema document.readys või mitte.


/*(function() {
    $.get("resource/json/posts.json", function(posts) {
        for (post of posts) {
            let article = $('<article class="container-post">');
            let div_head = $('<div class = "container-post-head">');
            let div_image = $('<div class = "container-post-image">');
            let div_comment = $('<div class = "container-post-comment">');
            let date = $('<p class="date">').text(post.date);
            let caption = $('<p class="my_caption">').text(post.caption);
            let img = $('<img>').img(post.post_image);
            article.append(div_head);
            article.append(div_image);
            article.append(div_comment);
            div_head.append(date);
            div_image.append(img);
            div_comment.append(caption);
            $('body').append(article)
        }
    })
});*/

/*
{
      "userId": 1,
      "id": 1,
      "user_data":{ "name":"John Doe", "e-mail":"john.doe@example.com"},
      "caption": "I think it's going to rain",
      "date":"2021-10-21T05:55:06.419Z",
      "post_image": "resource/images/rain.png"
    },
    */
