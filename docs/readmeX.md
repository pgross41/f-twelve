<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>F-Twelve Demo</title>
    <!-- #################### -->
    <!--                      -->
    <!-- Include the CSS file -->
    <!--                      -->
    <!-- #################### -->
    <link rel="stylesheet" href="./../dist/f-twelve.css"/>
</head>


<body>kc

<h1>F-Twelve Demo</h1>
<p>Press and hold F+1+2 in that order to display F-Twelve console below.</p>

<h2>API Demo</h2>
<p>Use JS to show and hide the tool (instead of the keyboard shortcut). The API is available on the global
    <code>FTwelve</code> object.</p>
<button onclick="FTwelve.show()">Show</button>
<button onclick="FTwelve.hide()">Hide</button>

<p>Completely enable/disable the tool, this disables the keyboard shortcut as well as the <code>show</code> method.</p>
<button onclick="FTwelve.disable()">Disable</button>
<button onclick="FTwelve.enable()">Enable</button>
<button onclick="FTwelve.enable(false)">Enable (Hidden)</button>

<p>Callbacks. Make a selection then show and hide the tool with the buttons above or the keyboard shortcut.</p>
<button onclick="FTwelve.onShow(function(){alert('Showing')})">Alert on show</button>
<button onclick="FTwelve.onShow(function(){})">Do nothing on show</button>
<br/>
<button onclick="FTwelve.onHide(function(){alert('Hiding')})">Alert on hide</button>
<button onclick="FTwelve.onHide(function(){})">Do nothing on hide</button>

<h2>Dummy Content</h2>
<iframe src="https://pgross41.github.io/f-twelve"></iframe>

<script>
  window.onerror = function(message, source, lineNo, colNo, error) {
    console.error("I am the old error handler:", message);
  };
</script>

<!-- ####################################################### -->
<!--                                                         -->
<!-- Include the JS file... And that's it, F-Twelve is ready -->
<!--                                                         -->
<!-- ####################################################### -->
<script src="./../dist/f-twelve.umd.js"></script>

<script>

  generateFakeContent();

  // Use the console functions as usual and it will capture the output
  console.log("log msg");
  console.warn("warn msg");
  console.error("error msg");
  console.info("info msg");
  console.log({ "one": "two" });
  console.log("one", "two", 3);
  console.warn("words followed by a small object followed by a large object", { "one": "two" }, {
    "ticket": [{
      "impact": "0",
      "tenantId": "5ba2af2b0456dc5c3fdc9b02",
      "summary": "123",
      "description": "123",
      "assignedGroupId": "5ba3ddddc40a384ad1bd45c8",
      "containsPhi": true,
      "firstName": "Portal",
      "lastName": "Portal",
      "userName": "4464007",
      "email": "pgross41@gmail.com",
      "phoneNumber": "(636) 466-3778",
      "id": 1
    }],
    "configuration": [{
      "id": "undefined",
      "tenantId": "0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca",
      "issueTypes": {
        "default": "5ba3ddddc40a384ad1bd45c8",
        "options": [{
          "value": "5ba3ddddc40a384ad1bd45c7",
          "text": "Hardware"
        }, { "value": "5ba3ddddc40a384ad1bd45c8", "text": "Software" }, {
          "value": "5ba3ddddc40a384ad1bd45c9",
          "text": "Other"
        }]
      },
      "phoneNumber": "(866) 227-8877",
      "lookBackMinutes": 240,
      "impact": {
        "default": "0",
        "options": [{ "value": "0", "text": "Minor/Localized" }, {
          "value": "1",
          "text": "Moderate/Limited"
        }, { "value": "2", "text": "Significant/Large" }, { "value": "3", "text": "Extensive/Widespread" }]
      }
    }]
  });
  iAmBadCode;


  function generateFakeContent() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) document.getElementById("content").innerHTML = xmlHttp.responseText;
    };
    xmlHttp.open("GET", "https://baconipsum.com/api/?type=meat-and-filler&paras=10&format=html", true);
    xmlHttp.send();
  }


</script>
</body>

</html>