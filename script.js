//Submit button code for email
var confirm = $(".confirmSubcription");
var submit = $(".submitButton"); 

submit.on("click",subscribe); 

function subscribe(){

  event.preventDefault();
  var email = $(".emailInput").val();
  confirm.append(`<p>${email} has been subcribed to our mailing list. Thank you!</p>`);

};

//sumbit feature in Resource Hub
var container = $(".container"); 
var submitButton = $(".submit-btn"); //variable used for both sumbit feature and adding to resource list below

submitButton.on("click", thanksResource); 

function thanksResource(){
  event.preventDefault(); 
  var nameInput = $(".nameInput").val(); 
  container.append(`<p> Thank you for adding your resource to our list ${nameInput}! :) </p>`); 
}; 

//adding resource to list 
var resourceListContainer = $(".resourceListContainer"); 
submitButton.on("click", addResourceList); 

function addResourceList(){
  
  var urlNameInput = $(".urlNameInput").val(); 
  var resourceInput = $(".resourceInput").val(); 
  resourceListContainer.append(`<li class = "resourceLinks"> <a href = "${resourceInput}"> ${urlNameInput} </a> </li> <br>`)
};

//submit for quiz questions
var quizAnswers = $(".quizAnswer");
var submitOne = $("#qOneButton");
var submitTwo = $("#qTwoButton");
var submitThree = $("#qThreeButton");
var submitFour = $("#qFourButton");
var submitFive = $("#qFiveButton");

submitOne.on("click", firstSubmit);
submitTwo.on("click", secondSubmit);
submitThree.on("click", thirdSubmit);
submitFour.on("click", fourthSubmit);
submitFive.on("click", fifthSubmit);

function firstSubmit() {
  event.preventDefault(); 
  $(".quizAnswer").empty();
  if (document.getElementById("questionOne_True").checked){
  quizAnswers.append(`<p><strong>Correct!</strong> This is <strong> true</strong>. The female literacy rate in the Democratic Republic of the Congo is 25% lower than that of the male rate.</p>
  <button class = "learnMore" ><a target = "_blank" style="text-decoration:none; color: inherit;" href = "https://borgenproject.org/girls-education-in-the-democratic-republic-of-congo/" >Want to learn more?</a></button>`);
  }else if (document.getElementById("questionOne_False").checked) {
  quizAnswers.append(`<p><strong>Incorrect.</strong> This is <strong> true</strong>. The female literacy rate in the Democratic Republic of the Congo is 25% lower than that of the male rate.</p>
  <button class = "learnMore" ><a target = "_blank" style="text-decoration:none; color: inherit;" href = "https://borgenproject.org/girls-education-in-the-democratic-republic-of-congo/" >Want to learn more?</a></button>`);
  };
};

function secondSubmit() {
  event.preventDefault();
  $(".quizAnswer").empty();
  if (document.getElementById("questionTwo_True").checked) {
  quizAnswers.append(`<p><strong>Incorrect.</strong> This is <strong> false</strong>. 27% of women in rural Zambia receive no education.</p>
  <button class = "learnMore" ><a target = "_blank" style="text-decoration:none; color: inherit;" href = "https://borgenproject.org/tag/girls-education-in-zambia/">Want to learn more?</a></button>`);
  }else if (document.getElementById("questionTwo_False").checked) {
  quizAnswers.append(`<p><strong>Correct!</strong> This is <strong> false</strong>. 27% of women in rural Zambia receive no education.</p>
  <button class = "learnMore" ><a target = "_blank" style="text-decoration:none; color: inherit;" href = "https://borgenproject.org/tag/girls-education-in-zambia/">Want to learn more?</a></button>`);    
  };
};

function thirdSubmit() {
  event.preventDefault();
  $(".quizAnswer").empty();
  if (document.getElementById("questionThree_True").checked){
  quizAnswers.append(`<p><strong>Correct!</strong> This is <strong> true</strong>. Malaysia has passed the Malaysia Women Policy and National Policy on Science, Technology, and Innovation.</p>
  <button class = "learnMore" ><a target = "_blank" style="text-decoration:none; color: inherit;" href = "https://borgenproject.org/10-facts-about-girls-education-in-malaysia/">Want to learn more?</a></button>`);
  }else if (document.getElementById("questionThree_False").checked){
  quizAnswers.append(`<p><strong>Incorrect.</strong> This is <strong> true</strong>. Malaysia has passed the Malaysia Women Policy and National Policy on Science, Technology, and Innovation.</p>
  <button class = "learnMore" ><a target = "_blank" style="text-decoration:none; color: inherit;" href = "https://borgenproject.org/10-facts-about-girls-education-in-malaysia/">Want to learn more?</a></button>`);    
  };
};

function fourthSubmit() {
  event.preventDefault();
  $(".quizAnswer").empty();
  if (document.getElementById("questionFour_True").checked){
  quizAnswers.append(`<p><strong>Incorrect.</strong> This is <strong> false</strong>. Approximately 14.5% of girls aged 15 - 16 are out of school in India.</p>
  <button class = "learnMore" ><a target = "_blank" style="text-decoration:none; color: inherit;" href = "https://time.com/5614642/india-girls-education/">Want to learn more?</a></button>`);
  }else if (document.getElementById("questionFour_False").checked){
  quizAnswers.append(`<p><strong>Correct!</strong> This is <strong> false</strong>. Approximately 14.5% of girls aged 15 - 16 are out of school in India.</p>
  <button class = "learnMore" ><a target = "_blank" style="text-decoration:none; color: inherit;" href = "https://time.com/5614642/india-girls-education/">Want to learn more?</a></button>`);    
  };
}

function fifthSubmit() {
  event.preventDefault();
  $(".quizAnswer").empty();
  if (document.getElementById("questionFive_True").checked){
  quizAnswers.append(`<p><strong>Correct!</strong> This is <strong> true</strong>. The female literacy rate in the Democratic Republic of the Congo is 25% lower than that of the male rate.</p>
  <button class = "learnMore" ><a target = "_blank" style="text-decoration:none; color: inherit;" href = "https://borgenproject.org/girls-education-in-the-democratic-republic-of-congo/">Want to learn more?</a></button>`);
  }else if (document.getElementById("questionFive_False").checked){  
  quizAnswers.append(`<p><strong>Incorrect.</strong> This is <strong> true</strong>. The female literacy rate in the Democratic Republic of the Congo is 25% lower than that of the male rate.</p> <button class = "learnMore" ><a target = "_blank" style="text-decoration:none; color: inherit;" href = https://www.brookings.edu/blog/education-plus-development/2017/11/07/supporting-the-education-of-teen-mothers-in-jamaica/">Want to learn more?</a></button>`);
  };
};
