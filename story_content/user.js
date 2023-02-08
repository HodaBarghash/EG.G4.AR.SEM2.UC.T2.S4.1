function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rd1E7xzsFR":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbx98az91MnSn-Tese0Hjm5Ca4n_5ieG2mHLolMRp7t_L9HBb25feJC2UblYYxTYpG6G2g/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

