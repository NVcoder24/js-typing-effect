# js-typing-effect
Epic js based typing effect!

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
	<script>
		// toggle slow typing function
    function toggle_typing(id, target, start_text, end_text, delay, type_delay, end_time, blink_times) {
      texts = $(".js-typing-effect")

      $(texts).each(function() {
        if ($(this).attr("data-typing-effect-id") == id) {
          let text = this;

          for (let m = 0; m < blink_times; m++) {
            setTimeout(function() {
              $(text).html(start_text + "<span>_</span>" + end_text);
            }, m * delay);
          }

          for (let m = 0; m < blink_times - 1; m++) {
            setTimeout(function() {
              $(text).html(start_text + "<span> </span>" + end_text);
            }, m * delay + delay / 2);
          }

          arr = target.split("");

          let buffer = ""

          for (let i = 0; i < arr.length; i++) {
            setTimeout(function() {
              buffer +=  arr[i];
              $(text).html(start_text + buffer + "_" + end_text);
            }, type_delay * i + delay * 5);
          }

          setTimeout(function() {
            $(text).html(start_text + target + end_text);
          }, type_delay * arr.length + end_time + delay * 5);
        }
      });
    }
	</script>
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
