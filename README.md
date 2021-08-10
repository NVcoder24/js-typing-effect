# js-typing-effect
Epic js based typing effect!<br>
Requires JQuery!

## usage
```html
<script>
	toggle_typing(0, "Js typing effect is epic!", "", "", 300, 50, 300, 5); 
	// id, target text, static text on start, static text on end, delay between cursor blinking, delay between typing letters, delay after cursor will disapear, cursor blinking time
</script>
```

## exapmle
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>js typing effect</title>
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
	<script src="js-typing-effect.js"></script>
</head>
<body>
	<h1 class="js-typing-effect" data-typing-effect-id=0></h1>

	<script>
		toggle_typing(0, "Js typing effect is epic!", "", "", 300, 50, 300, 5); 
    // id, target text, static text on start, static text on end, delay between cursor blinking, delay between typing letters, delay after cursor will disapear, cursor blinking time
	</script>
</body>
</html>
```
[Open in jsFiddle](https://jsfiddle.net/v7zLkmed/11/ "Open in jsFiddle")
