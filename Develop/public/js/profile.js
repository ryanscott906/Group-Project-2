  var location = $("#location");
  var age = $("#age");
  var gender = $("#gender");
  var birthday = $("#birthday");
  var job = $("#job");
  var status = $("#status");
  var interests = $("#interests");
  var bio = $("#bio");
  var locationEdit = $("input#locationEdit");
  var ageEdit = $("input#ageEdit");
  var birthdayEdit = $("input#birthdayEdit");
  var genderEdit = $("input#genderEdit");
  var jobEdit = $("input#jobEdit");
  var relationshipEdit = $("input#relationshipEdit");
  var interestsEdit = $("input#interestsEdit");
  var bioEdit = $("input#bioEdit");
  var locationEditButton = $("#locationEditButton");
  var ageEditButton = $("#ageEditButton");
  var birthdayEditButton = $("#birthdayEditButton");
  var genderEditButton = $("#genderEditButton");
  var jobEditButton = $("#jobEditButton");
  var relationshipEditButton = $("#relationshipEditButton");
  var interestsEditButton = $("#interestsEditButton");
  var bioEditButton = $("#bioEditButton");

  
  locationEditButton.on("submit", function() {
    location.innerHtml = locationEdit.val();
  ageEditButton.on("submit", function() {
    event.preventDefault();
    age.text = ageEdit.val();
  birthdayEditButton.on("submit", function() {
    event.preventDefault();
    birthday.text = birthdayEdit.val();
  genderEditButton.on("submit", function() {
    event.preventDefault();
    gender.text = genderEdit.val();
  jobEditButton.on("submit", function() {
    event.preventDefault();
    job.text = jobEdit.val();
  relationshipEditButton.on("submit", function() {
    event.preventDefault();
    relationship.text = relationshipEdit.val();
  interestsEditButton.on("submit", function() {
    event.preventDefault();
    interests.text = interestsEdit.val();
  bioEditButton.on("submit", function() {
    event.preventDefault();
    bio.text = bioEdit.val();



//   db.User.findAll({}).then(function(data) {
//     $(".member-email").text(data.email);
//     $(".member-username").text(data.username);
//     $(".member-bio").text(data.bio);
//   });
// });

// app.get("/members/:user", function(req, res) {
//     db.Example.findOne({ where: { username: req.params.user } }).then(function(data) {
//       $(".member-email").text(data.email);
//       $(".member-username").text(data.username);
//       $(".member-bio").text(data.bio);
//       });
//     });
