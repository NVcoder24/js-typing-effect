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

      let arr = target.split("");

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
